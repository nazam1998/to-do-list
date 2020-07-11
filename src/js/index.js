let lists = [];
// Section qui contient toutes les listes
let listContainer = document.querySelector('.list');
// input qui permet d'ajouter une nouvelle liste
let input = document.getElementById('input-ajout');
// bouton qui permet d'ajouter la liste
let add = document.getElementById('add');
// permet de changer le background du site
let background = document.getElementById('background');
let cpt = 0;

// fonction qui permet de créer une nouvelle liste
background.addEventListener('change', function () {
    var url = URL.createObjectURL(this.files[0]);
    document.body.style.backgroundImage = "url(" + url + ")";
});


$(()=>{
    $(lists.join(',')).sortable({
        connectWith: '.list'
    }).disableSelection();
});