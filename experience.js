document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "PyCont",
      link: "#",
      description: "Pseudo-arclength continuation and bifurcation detection engine for nonlinear systems.",
      image: "images/pycont_resized.png"
    },
    {
      title: "Custom PDE Solvers",
      link: "#",
      description: "Specialized finite element and surrogate solvers for mechanical systems.",
      image: "images/fem_solver.png"
    },
    {
      title: "ML for Molecular Design",
      link: "#",
      description: "Neural operators and deep surrogates trained for quantum chemistry models.",
      image: "images/ml_chemistry.png"
    },
    {
      title: "Monte Carlo Sampling",
      link: "#",
      description: "Advanced MCMC algorithms for chemical kinetics and rare event estimation.",
      image: "images/mcmc_sampling.png"
    },
    {
      title: "Biotech Optimization",
      link: "#",
      description: "Model-driven parameter estimation for protein folding and enzymatic pathways.",
      image: "images/biotech_modeling.png"
    },
    {
      title: "HPC Integration",
      link: "#",
      description: "End-to-end GPU and supercomputer deployments for scalable simulation.",
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
    image.alt = project.title;
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