window.onload = function () {
    alert("Bem-vindo ao meu portfólio!");
};

// Alternar tema claro/escuro
document.getElementById("toggle-theme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Mostrar/Ocultar projetos
document.getElementById("toggle-projects").addEventListener("click", function () {
    const projectList = document.getElementById("project-list");
    if (projectList.style.display === "none") {
        projectList.style.display = "flex";
    } else {
        projectList.style.display = "none";
    }
});
