
let lists = [];
let listsCard = [];

// Liste

let liste = document.querySelectorAll('.card-body');

// Section qui contient toutes les listes

let listContainer = document.querySelector('.lists');

// input qui permet d'ajouter une nouvelle liste

let input = document.getElementById('ajout-liste');

// bouton qui permet d'ajouter la liste

let add = document.getElementById('add');

// permet de changer le background du site

let background = document.getElementById('background');

// barre de navigation

let nav = document.querySelector('nav');

let cpt = 0;

liste.forEach(e => {
    lists.push('#' + e.id);
});

// Permet de créer une tâche dans une liste
const createItem = (div) => {
    let listItem = document.createElement('div');
    let spanItem = document.createElement('span');
    let inputItem = document.createElement('input');
    let removeItem = document.createElement('i');
    let editItem = document.createElement('i');

    listItem.className = 'list-item';
    listItem.draggable = true;
    spanItem.textContent = 'Item';

    inputItem.value = spanItem.innerText;
    inputItem.className = "form-control d-none";
    removeItem.className = 'fas fa-times mt-1 mr-1';
    editItem.className = 'fas fa-pen mt-1 mr-1';
    removeItem.style.cursor = "pointer";
    div.appendChild(listItem);
    listItem.appendChild(spanItem);
    listItem.appendChild(inputItem);
    listItem.appendChild(editItem);
    listItem.appendChild(removeItem);
    listItem.addEventListener('dblclick', () => {
        inputItem.classList.toggle('d-none');
        removeItem.classList.toggle('d-none');
        spanItem.classList.toggle('d-none');

    });
    inputItem.addEventListener('keypress', (event) => {

        if (event.key == "Enter" && inputItem.value != '') {

            spanItem.textContent = event.target.value;
            inputItem.classList.toggle('d-none');
            removeItem.classList.toggle('d-none');
            spanItem.classList.toggle('d-none');

        } else if (event.key == "Enter" && inputItem.value == '') {
            spanItem.classList.toggle('d-none');
            inputItem.classList.toggle('d-none');
            removeItem.classList.toggle('d-none');
            inputItem.value = spanItem.textContent;
        }
    });

    removeItem.addEventListener('click', () => {
        listItem.parentElement.removeChild(listItem);
    });

}

const createList = (texte) => {

    let container = document.createElement('div');
    let div = document.createElement('div');
    let titre = document.createElement('h5');
    let spanTitre = document.createElement('span');
    let inputTitre = document.createElement('input');
    let cardBody = document.createElement('div');
    let cardFooter = document.createElement('div');
    let buttonAdd = document.createElement('button');
    let icones = document.createElement('div');
    let remove = document.createElement('i');
    let edit = document.createElement('i');

    // div qui correspond à la liste en elle-même
    container.className = "list mx-5 h-100"
    div.className = 'card';
    container.appendChild(div)
    listContainer.appendChild(container);

    // Titre de la liste et bouton qui permet de la supprimer

    spanTitre.textContent = texte;
    titre.className = "card-header w-100";
    div.appendChild(titre);
    titre.appendChild(spanTitre);
    titre.appendChild(inputTitre);
    inputTitre.className = 'form-control d-none';
    titre.appendChild(icones);
    remove.className = 'btn btn-danger fas fa-trash-alt';
    edit.className = 'btn btn-warning fas fa-pen mr-1';
    icones.appendChild(edit);
    icones.appendChild(remove);

    // Card body 

    cardBody.className = "card-body";
    cardBody.id = "list-" + (cpt + 1);
    container.id = 'list-card' + (cpt + 1);
    div.appendChild(cardBody);

    // cardFooter 

    cardFooter.className = 'card-footer';
    div.appendChild(cardFooter);

    // button add 

    buttonAdd.className = "btn btn-success";
    buttonAdd.textContent = "Add";
    cardFooter.appendChild(buttonAdd);
    lists.push('#' + cardBody.id);
    listsCard.push('#' + container.id);
    createItem(cardBody);

    buttonAdd.addEventListener('click', () => {
        createItem(cardBody);
    });

    titre.addEventListener('dblclick', () => {
        spanTitre.classList.toggle('d-none');
        inputTitre.classList.toggle('d-none');
        remove.classList.toggle('d-none');
        edit.classList.toggle('d-none');
        inputTitre.value = spanTitre.textContent;
    });
    edit.addEventListener('click', () => {
        spanTitre.classList.toggle('d-none');
        inputTitre.classList.toggle('d-none');
        remove.classList.toggle('d-none');
        edit.classList.toggle('d-none');
        inputTitre.value = spanTitre.textContent;
    });
    inputTitre.addEventListener('keypress', (event) => {
        if (event.key == 'Enter' && event.target.value != '') {
            spanTitre.classList.toggle('d-none');
            inputTitre.classList.toggle('d-none');
            remove.classList.toggle('d-none');
            edit.classList.toggle('d-none');
            spanTitre.textContent = inputTitre.value;
            inputTitre.value = '';

        }
    });
    remove.addEventListener('click', () => {
        listContainer.removeChild(container);
        lists.splice(lists.indexOf('#' + cardBody.id), 1);
        listsCard.splice(listsCard.indexOf('#' + container.id), 1);

        $(() => {
            $(lists.join(',')).sortable({
                connectWith: '.card-body',
                placeholder: "placeholder bg-light",
            }).disableSelection();
            $(listsCard.join(',')).sortable({
                connectWith: '.app',

                placeholder: "placeholder-card bg-light",
            }).disableSelection();

        });


    });

    // ajoute le sortable à la nouvelle liste

    $(() => {
        $(lists.join(',')).sortable({
            connectWith: '.card-body',
            placeholder: "placeholder bg-light",
        }).disableSelection();
        $(listsCard.join(',')).sortable({
            connectWith: '.app',
            placeholder: "placeholde-card bg-light",
        }).disableSelection();

    });


}

input.addEventListener('keypress', (event) => {
    if (event.key == "Enter" && event.target.value != '') {
        createList(event.target.value);
        input.value = '';
    }
});

createList('Template');

// fonction qui permet de créer une nouvelle liste

background.addEventListener('change', function () {
    var url = URL.createObjectURL(this.files[0]);
    document.body.style.backgroundImage = "url(" + url + ")";
});

// fonction qui permet de cacher la nav lorsqu'on descend et l'affiche lorsqu'on remonte

$(function () {
    var lastScrollTop = 0,
        delta = 5;

    nav.style.transition = '0.7s';
    $(window).scroll(function () {
        var nowScrollTop = $(this).scrollTop();
        if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
            if (nowScrollTop > lastScrollTop) {
                nav.style.top = "-100%";
            } else {
                nav.style.top = '0';
            }
            lastScrollTop = nowScrollTop;
        }
    });

    $("#ajout-liste").keypress(event => {
        if (event.key == "Enter") {
            $.ajax({
                url: 'store.php',
                method: 'post',
                data: event.target.value,
                success: function (response) {
                    console.log(response);
                },
                error : function(resultat, statut, erreur){
                        console.log(resultat);
                        console.log(statut);
                        console.log(erreur);
                }
            });
        }
    });

});