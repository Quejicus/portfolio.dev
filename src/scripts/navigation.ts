const header = document.querySelector<HTMLElement>("#site-header");
const sections = [...document.querySelectorAll<HTMLElement>("[data-section]")];
const links = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav-section]")];
const languageLink = document.querySelector<HTMLAnchorElement>("[data-locale]");
const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const navigation = document.querySelector<HTMLElement>("#primary-navigation");

// Enhance the visible no-JavaScript navigation with a mobile disclosure.
if (header && menuButton && navigation) {
  const mobile = window.matchMedia("(max-width: 760px)");
  const setExpanded = (expanded: boolean) => {
    header.dataset.menu = expanded ? "open" : "closed";
    menuButton.setAttribute("aria-expanded", String(expanded));
    menuButton.setAttribute("aria-label", (expanded ? menuButton.dataset.closeLabel : menuButton.dataset.openLabel) ?? "");
  };
  const syncMenu = () => {
    const focusInNavigation = navigation.contains(document.activeElement);
    const focusOnButton = document.activeElement === menuButton;
    menuButton.hidden = !mobile.matches;
    setExpanded(false);
    if (!mobile.matches) {
      delete header.dataset.menu;
      if (focusOnButton) header.querySelector<HTMLAnchorElement>(".wordmark")?.focus();
    } else if (focusInNavigation) menuButton.focus();
  };
  menuButton.addEventListener("click", () => setExpanded(menuButton.getAttribute("aria-expanded") !== "true"));
  navigation.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
    if (!link || !mobile.matches) return;
    setExpanded(false);
    const destination = new URL(link.href);
    if (destination.pathname === window.location.pathname && destination.hash) {
      const target = document.getElementById(decodeURIComponent(destination.hash.slice(1)));
      target?.setAttribute("tabindex", "-1");
      target?.focus({ preventScroll: true });
    }
  });
  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.dataset.menu === "open") {
      event.preventDefault();
      setExpanded(false);
      menuButton.focus();
    }
  });
  const closeOutside = (event: Event) => {
    if (header.dataset.menu === "open" && event.target instanceof Node && !header.contains(event.target)) setExpanded(false);
  };
  document.addEventListener("click", closeOutside);
  document.addEventListener("focusin", closeOutside);
  mobile.addEventListener("change", syncMenu);
  window.addEventListener("pageshow", syncMenu);
  syncMenu();
}

// A regular link also works without JavaScript; enhance it to retain the section.
if (languageLink) {
  const translatedPath = languageLink.getAttribute("href")!;
  const keepSection = () => { languageLink.href = translatedPath + window.location.hash; };
  window.addEventListener("hashchange", keepSection);
  window.addEventListener("pageshow", keepSection);
  keepSection();
}

// Native document navigation: no router or lifecycle listeners are required.
if (header && sections.length) {
  let framePending = false;
  const update = () => {
    framePending = false;
    const offset = Math.max(header.getBoundingClientRect().bottom + 32, parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 1);
    const positions = sections.map((section) => ({ id: section.id, top: section.getBoundingClientRect().top }));
    let active = positions.filter((section) => section.top <= offset).at(-1)?.id;
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = sections.at(-1)?.id;
    }
    links.forEach((link) => {
      if (link.dataset.navSection === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const schedule = () => {
    if (!framePending) {
      framePending = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  update();
}
