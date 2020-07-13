let lists = [];
//
let listeNames = [];
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

    listItem.className = 'list-item';
    listItem.draggable = true;
    spanItem.textContent = 'Item';

    inputItem.value = spanItem.innerText;
    inputItem.className = "form-control d-none";
    removeItem.className = 'fas fa-times mt-1 mr-1';
    removeItem.style.cursor = "pointer";
    div.appendChild(listItem);
    listItem.appendChild(spanItem);
    listItem.appendChild(inputItem);
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


    let div = document.createElement('div');
    let titre = document.createElement('h5');
    let cardBody = document.createElement('div');
    let cardFooter = document.createElement('div');
    let buttonAdd = document.createElement('button');
    let remove = document.createElement('i');

    // div qui correspond à la liste en elle-même

    div.className = 'list card mx-5 h-100';
    listContainer.appendChild(div);

    // Titre de la liste et bouton qui permet de la supprimer

    titre.textContent = texte;
    titre.className = "card-header w-100";
    div.appendChild(titre);
    remove.className = 'btn btn-danger fas fa-trash-alt';
    titre.appendChild(remove);

    // Card body 

    cardBody.className = "card-body";
    cardBody.id = "list-" + (cpt + 1);
    div.appendChild(cardBody);

    // cardFooter 

    cardFooter.className = 'card-footer';
    div.appendChild(cardFooter);

    // button add 

    buttonAdd.className = "btn btn-success";
    buttonAdd.textContent = "Add";
    cardFooter.appendChild(buttonAdd);
    lists.push('#' + cardBody.id);

    createItem(cardBody);

    buttonAdd.addEventListener('click', () => {
        createItem(cardBody);
    });

    remove.addEventListener('click', () => {
        listContainer.removeChild(div);
        lists.splice(lists.indexOf('#' + cardBody.id), 1);

        $(() => {
            $(lists.join(',')).sortable({
                connectWith: '.card-body',
                placeholder: "placeholder bg-light",
            }).disableSelection();
        });
    });
    // ajoute le sortable à la nouvelle liste

    $(() => {
        $(lists.join(',')).sortable({
            connectWith: '.card-body',
            placeholder: "placeholder bg-light",
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

$(() => {
    $(lists.join(',')).sortable({
        connectWith: '.card-body',
        placeholder: "placeholder bg-light",
    }).disableSelection();
});