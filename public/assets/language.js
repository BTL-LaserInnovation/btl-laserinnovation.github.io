(() => {
  "use strict";

  const storageKey = "blueocean.language";
  const supported = new Set(["ko", "en"]);
  const textEntries = Array.from(document.querySelectorAll("[data-en]"))
    .filter(element => !element.parentElement?.closest("[data-en]"))
    .map(element => ({ element, ko: element.innerHTML, en: element.getAttribute("data-en") }));
  const attributeEntries = ["aria-label", "alt", "content"].flatMap(attribute =>
    Array.from(document.querySelectorAll(`[data-en-${attribute}]`)).map(element => ({
      element, attribute, ko: element.getAttribute(attribute), en: element.getAttribute(`data-en-${attribute}`)
    }))
  );
  const buttons = Array.from(document.querySelectorAll("[data-language]"));
  const internalLinks = Array.from(document.querySelectorAll("a[href]"))
    .map(element => ({ element, href: element.getAttribute("href") }))
    .filter(({ href }) => href && !href.startsWith("#") && !/^(https?:|mailto:|tel:|data:)/i.test(href));

  function applyLanguage(language, remember = false) {
    if (!supported.has(language)) language = "ko";
    document.documentElement.lang = language;
    for (const entry of textEntries) {
      // Translations are authored in the same static HTML, never supplied by a visitor or API.
      entry.element.innerHTML = entry[language];
    }
    for (const entry of attributeEntries) entry.element.setAttribute(entry.attribute, entry[language]);
    for (const button of buttons) button.setAttribute("aria-pressed", String(button.dataset.language === language));

    // Carry the choice in page links too, so navigation works when local storage is blocked.
    for (const entry of internalLinks) {
      if (!entry.element.isConnected) continue;
      const url = new URL(entry.href, location.href);
      url.searchParams.set("lang", language);
      entry.element.href = url.href;
    }
    // Translation can replace links inside paragraphs. Include those newly created links.
    for (const entry of textEntries) {
      for (const link of entry.element.querySelectorAll("a[href]")) {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || /^(https?:|mailto:|tel:|data:)/i.test(href)) continue;
        const url = new URL(href, location.href);
        url.searchParams.set("lang", language);
        link.href = url.href;
      }
    }
    if (remember) {
      try { localStorage.setItem(storageKey, language); } catch { /* The switch also works without storage. */ }
      try {
        const url = new URL(location.href);
        url.searchParams.set("lang", language);
        history.replaceState(null, "", url);
      } catch { /* Some local file previews do not allow history updates. */ }
    }
  }

  let initialLanguage = "ko";
  try {
    const saved = localStorage.getItem(storageKey);
    if (supported.has(saved)) initialLanguage = saved;
  } catch { /* Korean remains the default. */ }
  const requested = new URL(location.href).searchParams.get("lang");
  if (supported.has(requested)) {
    initialLanguage = requested;
    try { localStorage.setItem(storageKey, requested); } catch { /* Links carry this preference. */ }
  }
  for (const button of buttons) button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  applyLanguage(initialLanguage);
})();
