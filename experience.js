document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Digital Twin for Elastic Deformations",
      link: "/solutions/elasticity.html",
      description: "Physics-informed AI model for predicting metallic deformations",
      image: "images/elasticity.png"
    },
    {
      title: "Bifurcation Toolkit for PDEs",
      link: "/solutions/bifurcation.html",
      description: "Lightweight Python API for numerical continuation and bifurcation detection",
      image: "images/pycont.png"
    },
    {
      title: "Enhanced Sampling for Protein Folding",
      link: "/solutions/sampling.html",
      description: "New multifidelity sampling algorithm for improved protein structure predition",
      image: "images/alanine_dipeptide.png"
    },
    {
      title: "Probabilistic Inference of Viral Dynamics",
      link: "/solutions/bayesian.html",
      description: "Bayesian data assimilation and prediction of infection rates",
      image: "images/SIR.png"
    },
    {
      title: "Finite Element Wave Propagation Suite",
      link: "/solutions/wave.html",
      description: "Python Package for Acoustic, Electromagnetic and Elastodynamic Wave Models",
      image: "images/wave.png"
    },
  ];

  const gridContainer = document.getElementById("projects-grid");

  projects.forEach((project) => {
    const gridItem = document.createElement("a");
    gridItem.href = project.link;
    gridItem.className = "grid-item";

    const title = document.createElement("h2");
    title.textContent = project.title;
    gridItem.appendChild(title);

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.description;
    image.loading = "lazy";
    gridItem.appendChild(image);

    const description = document.createElement("p");
    description.textContent = project.description;
    gridItem.appendChild(description);

    gridContainer.appendChild(gridItem);
  });

  const titles = document.querySelectorAll('#projects-grid h2');
  const tallest = Math.max(...[...titles].map(t => t.offsetHeight));
  titles.forEach(t => t.style.minHeight = tallest + 'px');
});