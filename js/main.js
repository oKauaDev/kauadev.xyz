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

/**
 * Ultima função de Js, a parte de lingugens
*/

const DescriptionLinguage = document.getElementById('description-linguage');
if (window.innerWidth > 800) {
    const LinguagensDivs = document.querySelectorAll(".linguagem-index-select");
    LinguagensDivs.forEach(ElementoD => {
        ElementoD.addEventListener("mouseenter", function(event) {
            const target = event.target.parentElement;
            switch (target.getAttribute('type-linguage')) {
                case "css":
                    DescriptionLinguage.innerHTML = "Ao falarmos sobre o que é CSS (Cascading Style Sheet, ou Folha de Estilo em Cascatas), é necessário dizer que sua aplicação é utilizada na estilização de componentes escritos em linguagens de marcação.";
                    break;
            
                case "js":
                    DescriptionLinguage.innerHTML = "O JavaScript é utilizado para controlar o HTML e o CSS, usado para manipular comportamentos na página. O que seria esse comportamento? Por exemplo, submenu, carousel, etc. Portanto, O JavaScript permite implementar itens complexos em páginas web.";
                    break;
            
                case "html":
                    DescriptionLinguage.innerHTML = "HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.";
                    break;
            
            }
            const name = target.querySelector("p");
            name.style.display = "block";
        });
        ElementoD.addEventListener('mouseout', function(event) {
            if (event.target.classList.contains("linguagem-index")) {
                const target = event.target;
                const name = target.querySelector("p");
                removeDescriptionLinguage(name);
            }else{
                const target = event.target.parentElement;
                const name = target.querySelector("p");
                removeDescriptionLinguage(name);
            }
        });
    });
}else{
    linguagePromisse();
}

function removeDescriptionLinguage(element) {
    element.style.display = "none";
    DescriptionLinguage.innerHTML = "*Clique ou passe o mouse por cima para ver.";
}

//loop de código para mobile

async function linguagePromisse() {
    for (c = 0; true; c += 5) {
        switch (c % 3) {
            case 2:
                DescriptionLinguage.innerHTML = "Ao falarmos sobre o que é CSS (Cascading Style Sheet, ou Folha de Estilo em Cascatas), é necessário dizer que sua aplicação é utilizada na estilização de componentes escritos em linguagens de marcação.";
                break;
        
            case 1:
                DescriptionLinguage.innerHTML = "O JavaScript é utilizado para controlar o HTML e o CSS, usado para manipular comportamentos na página. O que seria esse comportamento? Por exemplo, submenu, carousel, etc. Portanto, O JavaScript permite implementar itens complexos em páginas web.";
                break;
        
            case 0:
                DescriptionLinguage.innerHTML = "HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.";
                break; 
        }
        await new Promise(res => setTimeout(res, 10000));
    }
}

//Modal contatos

const modal = document.getElementById("base-modal");

function openModal() {
    modal.setAttribute("visible", "true");
    modal.style.display = "block";
    modal.style.top = ((window.innerHeight / 2) - 150) + "px";
}

window.addEventListener('click', event => {
    if (!event.target.classList.contains("modalopenbutton")) {
        modal.setAttribute("visible", "false");
        modal.style.display = "none";
    }
});