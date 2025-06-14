document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Digital Twin for Elastic Deformations",
      link: "#",
      description: "Physics-informed AI model for predicting metallic deformations",
      image: "images/fem_solver.png"
    },
    {
      title: "Bifurcation Toolkit for PDEs",
      link: "#",
      description: "Lightweight Python API for numerical continuation and bifurcation detection",
      image: "images/pycont_resized.png"
    },
    {
      title: "Enhanced Sampling for Protein Folding",
      link: "#",
      description: "New multifidelity sampling algorithm for improved protein structure predition",
      image: "images/ml_chemistry.png"
    },
    {
      title: "AI Surrogate for Phase Separation in Materials",
      link: "#",
      description: "New ML operator for computing phase boundaries",
      image: "images/mcmc_sampling.png"
    },
    {
      title: "Probabilistic Inference of Viral Dynamics",
      link: "#",
      description: "Bayesian data assimilation and probabilistic prediction of infection rates",
      image: "images/biotech_modeling.png"
    },
    {
      title: "Fast GPU Poisson Solver",
      link: "#",
      description: "Resource-efficent implementation of the Poission equation using CUDA in C++",
      image: "images/hpc_integration.png"
    },
  ];

  const gridContainer = document.getElementById("projects-grid");

  projects.forEach((project) => {
    const gridItem = document.createElement("a");
    gridItem.href = project.link;
    gridItem.className = "grid-item";

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = "";
    gridItem.appendChild(image);

    const title = document.createElement("h2");
    title.textContent = project.title;
    gridItem.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    gridItem.appendChild(description);

    gridContainer.appendChild(gridItem);
  });
});