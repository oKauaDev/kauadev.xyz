const animateText = document.getElementById("subtitle-top");

function writeText(element) {
    const textToArray = element.innerHTML.split('');
    element.innerHTML = "";
    textToArray.forEach((letra, i) => {
        setTimeout(function() {
            element.innerHTML += letra;
        }, 65 * i);
    });
}

writeText(animateText);

//Lista de projetos interativa
const listProjects = document.querySelectorAll("[project-id]");

function DeselectAllProjects() {
    listProjects.forEach(Lelement => {
        Lelement.classList.remove('selectedProject');
    })
}

const titleProject = document.getElementById("title-projeto");
const descriptionProject = document.getElementById("description-projeto");
refreshProjects("p-1")
function refreshProjects(id) {
    switch (id) {
        case "p-1":
            titleProject.innerHTML = "PlayScript"
            descriptionProject.innerHTML = "Execute scripts em php dentro de seu servidor no minecraft, sem precisar de reiniciar ao algo do gênero! basta digitar um comando.";
            break;

        case "p-2":
            titleProject.innerHTML = "EnableEncryptedPlugin"
            descriptionProject.innerHTML = "Deixe seu plugin aprova de vazamentos usando EnableEncryptedPlugin! basta compilar para seu cliente utilizando o IP do servidor dele.";
            break;

        case "p-3":
            titleProject.innerHTML = "Bedrock-community"
            descriptionProject.innerHTML = "Um dos meus primeiros sites feitos sem JS.";
            break;
    }
}

listProjects.forEach(Lelement => {
    Lelement.addEventListener('click', event => {
        const target = event.target;
        DeselectAllProjects();
        target.classList.add('selectedProject');
        refreshProjects(target.getAttribute("project-id"));
    });
});