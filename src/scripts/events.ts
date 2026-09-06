// Provider-neutral hook only: no cookies, network requests or persistent storage.
// Subscribe after selecting/configuring an analytics provider; do not send email URLs.
export interface PortfolioEventDetail {
  name: string;
  path: string;
}
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const target = event.target.closest<HTMLElement>("[data-event]");
  const name = target?.dataset.event;
  if (!name || navigator.doNotTrack === "1") return;
  window.dispatchEvent(new CustomEvent<PortfolioEventDetail>("portfolio:interaction", {
    detail: { name, path: window.location.pathname },
  }));
});
