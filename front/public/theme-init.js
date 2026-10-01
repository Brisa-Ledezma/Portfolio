// Aplica el tema antes del primer render para evitar el parpadeo.
// Vive en un archivo aparte (no inline) para ser compatible con una CSP estricta.
;(function () {
  var stored = null
  try {
    stored = localStorage.getItem('theme')
  } catch (e) {
    /* almacenamiento no disponible */
  }
  var theme =
    stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  document.documentElement.dataset.theme = theme
})()
