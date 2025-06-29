const projects = [
  
  {
    title: "Netflix Clone",
    // description: "Netflix UI clone using HTML + CSS.",
    image: "netflix-clone.png",
    tags: ["HTML", "CSS"],
    links: [
      { text: "Live Demo", url: "https://your-demo.com" },
      { text: "GitHub", url: "https://github.com/your-repo" }
    ],
  },
  {
    title: "QR Code Generator",
    // description: "Built using basic HTML/CSS layout.",
    image: "qr-code.png",
    tags: ["FrontendMentor", "HTML", "CSS"],
    links: [],
  },

  
   
  
];

function showSlider() {
  const section = document.getElementById("project-slider-section");
  const slider = document.getElementById("slider");

  section.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // disable scroll on background
  slider.innerHTML = ""; // clear previous cards

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.backgroundImage = `url('${project.image}')`;

    // If live demo link is available, make card clickable
    if (project.links[0]?.url) {
      card.onclick = () => window.open(project.links[0].url, "_blank");
    }

    const tagsHTML = project.tags.map(tag => `<span>#${tag}</span>`).join(" ");

    card.innerHTML = `
      ${
        project.links[1]?.url
          ? `<a href="${project.links[1].url}" target="_blank" class="github-icon">
              <i class="fab fa-github"></i>
             </a>`
          : ""
      }
      <div class="content">
    <div class="top-text">
      <h3>${project.title}</h3>
                                   
    </div>
    <div class="tags">${tagsHTML}</div>
  </div>
    `;

    slider.appendChild(card);
  });
}


function hideSlider() {
  document.getElementById("project-slider-section").classList.add("hidden");
  document.body.style.overflow = ""; // re-enable scroll
}

function slideRight() {
  document.getElementById("slider").scrollLeft += 350;
}

function slideLeft() {
  document.getElementById("slider").scrollLeft -= 350;
}
