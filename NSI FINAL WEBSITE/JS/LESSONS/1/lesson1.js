//-------------------------------------------------------Changer le titre de la fenêtre---------------------------------------
// Fonction pour changer le titre de l'onglet
function changeTitle(newTitle) {
  document.title = newTitle;
}

// Fonction pour détecter si la fenêtre est active ou non
function handleVisibilityChange() {
  if (document.hidden) {
    changeTitle("👨‍💻Revenez coder !👨‍💻");
  } else {
    changeTitle("Python4Noob");
  }
}

// Ajout d'un écouteur d'événements pour détecter les changements de visibilité de la page
document.addEventListener("visibilitychange", handleVisibilityChange);
//-------------------------------------------------------------------------------------------------------------------------------

function setIframeSrc(key) {
  fetch('../../../../link.json') // Chemin relatif vers le fichier JSON
    .then(response => response.json())
    .then(data => {
      const iframe = document.querySelector('iframe');
      iframe.src = data[key]; // Utilise la valeur de "key" du fichier JSON
    });
}

function changeIframeSrc() {
  setIframeSrc("l1_correction");
  document.querySelector('.correction-btn').style.display = 'none';
  document.querySelector('.reset-btn').style.display = 'inline-block';
}

function resetIframeSrc() {
  setIframeSrc("l1_user");
  document.querySelector('.correction-btn').style.display = 'inline-block';
  document.querySelector('.reset-btn').style.display = 'none';
}

// Charger l'attribut src initial de l'iframe
setIframeSrc("l1_user");
