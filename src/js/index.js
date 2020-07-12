let lists = [];
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

// fonction qui permet de créer une nouvelle liste
background.addEventListener('change', function () {
    var url = URL.createObjectURL(this.files[0]);
    document.body.style.backgroundImage = "url(" + url + ")";
});

const createList = (texte) => {
    let div = document.createElement('div');
    let titre = document.createElement('h5');
    let cardBody = document.createElement('div');
    let cardFooter = document.createElement('div');
    let buttonAdd = document.createElement('button');

    // div qui correspond à la liste en elle-même

    div.className = 'list card mx-5';
    listContainer.appendChild(div);

    // Titre de la liste

    titre.textContent = texte;
    titre.className = "card-header w-100";
    div.appendChild(titre);

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
    
    // ajoute le sortable à la nouvelle liste

    $(() => {
        $(lists.join(',')).sortable({
            connectWith: '.card-body'
        }).disableSelection();
    });

}

input.addEventListener('keypress', (event) => {
    if (event.key == "Enter" && event.target.value != '') {
        createList(event.target.value);
    }
});

$(() => {
    $(lists.join(',')).sortable({
        connectWith: '.card-body'
    }).disableSelection();
});