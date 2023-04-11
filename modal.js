// Sélectionnez le bouton et la fenêtre modale
var modalBtn = document.getElementById("modal-btn");
var modal = document.getElementById("modal");

// Sélectionnez le bouton pour fermer la fenêtre modale
var closeBtn = document.getElementsByClassName("close")[0];

// Lorsqu'on clique sur le bouton, ouvrez la fenêtre modale
modalBtn.onclick = function() {
    modal.style.display = "block";
}

// Lorsqu'on clique sur le bouton pour fermer la fenêtre modale, fermez la fenêtre modale
closeBtn.onclick = function() {
    modal.style.display = "none";
}
