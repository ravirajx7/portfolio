document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle")
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

  const getCurrentTheme = () => document.body.getAttribute("data-theme")
  const isDark = () => getCurrentTheme() === "dark"

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme
    }
    return prefersDarkScheme.matches ? "dark" : "light"
  }

  const setTheme = (theme) => {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }

  // Initial theme setup
  setTheme(getPreferredTheme())

  // Theme toggle button handler
  themeToggle.addEventListener("click", () => {
    const newTheme = isDark() ? "light" : "dark"
    setTheme(newTheme)
  })

  // Listen for OS theme changes
  prefersDarkScheme.addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light"
    setTheme(newTheme)
  })
})


