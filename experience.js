document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Digital Twin for Elastic Deformations",
      link: "#",
      description: "Physics-informed AI model for predicting metallic deformations",
      image: "images/elasticity.png"
    },
    {
      title: "Bifurcation Toolkit for PDEs",
      link: "#",
      description: "Lightweight Python API for numerical continuation and bifurcation detection",
      image: "images/elasticity.png"
    },
    {
      title: "Enhanced Sampling for Protein Folding",
      link: "#",
      description: "New multifidelity sampling algorithm for improved protein structure predition",
      image: "images/alanine_dipeptide.png"
    },
    {
      title: "AI Surrogate for Phase Separation in Materials",
      link: "#",
      description: "New machine learning operator for computing phase boundaries",
      image: "images/elasticity.png"
    },
    {
      title: "Probabilistic Inference of Viral Dynamics",
      link: "#",
      description: "Bayesian data assimilation and prediction of infection rates",
      image: "images/elasticity.png"
    },
    {
      title: "Fast GPU Poisson Solver",
      link: "#",
      description: "Resource-efficent implementation of the Poission equation using CUDA in C++",
      image: "images/elasticity.png"
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
    image.alt = "";
    image.loading = "lazy";
    gridItem.appendChild(image);

    const description = document.createElement("p");
    description.textContent = project.description;
    gridItem.appendChild(description);

    gridContainer.appendChild(gridItem);
  });
});