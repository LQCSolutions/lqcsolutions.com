function loadGoogleAnalytics(trackingId) {
  if (!trackingId) return;

  const scriptTag = document.createElement("script");
  scriptTag.setAttribute("async", "");
  scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(scriptTag);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', trackingId);
}
