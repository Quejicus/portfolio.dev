const header = document.querySelector<HTMLElement>("#site-header");
const sections = [...document.querySelectorAll<HTMLElement>("[data-section]")];
const links = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav-section]")];

// Native document navigation: no router or lifecycle listeners are required.
if (header && sections.length) {
  let framePending = false;
  const update = () => {
    framePending = false;
    const offset = header.getBoundingClientRect().bottom + 32;
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
