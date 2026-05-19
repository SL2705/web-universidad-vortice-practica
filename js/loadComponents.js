// js/loadComponents.js
const components = [
  { id: "navbar", file: "components/navbar.html" },
  { id: "hero", file: "components/hero.html" },
  { id: "about", file: "components/about.html" },
  { id: "general-info", file: "components/general-info.html" },
  { id: "oferta", file: "components/oferta.html" },
  { id: "servicios", file: "components/servicios.html" },
  { id: "vida", file: "components/vida.html" },
  { id: "instalaciones", file: "components/instalaciones.html" },
  { id: "mission", file: "components/mission.html" },
  { id: "students-photo", file: "components/students-photo.html" },
  { id: "footer", file: "components/footer.html" }
];

async function loadComponents() {
  for (const component of components) {
    const container = document.getElementById(component.id);

    if (!container) continue;

    try {
      const response = await fetch(component.file);

      if (!response.ok) {
        throw new Error(`No se pudo cargar: ${component.file}`);
      }

      container.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
    }
  }

  initializeNavbar();
}

document.addEventListener("DOMContentLoaded", loadComponents);