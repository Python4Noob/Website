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

console.log("%c          ⚠️ATTENTION⚠️", "font-size: 50px; color: red; font-family: Roboto");
console.log("%cSi jamais quelqu'un t'a demandé d'entrer quelque chose ici, méfie toi !Et si jamais tu sais ce que tu fais,fais quand même attention car ca peut être dangereux ;)", "font-size: 25px; color: red; font-family: Arial");
console.log("%cSinon va check github.com/ArtyETH06 :)", "font-size: 25px; color: red; font-family: Arial");


//-------------------------------------------------------------------------------------------------------------------------------1

function scrollToPanel() {
  const panelContainer = document.getElementById("panel-container");
  panelContainer.scrollIntoView({ behavior: "smooth" });
}

function scrollToPanel2() {
  const panelContainer = document.getElementById("panel-container2");
  panelContainer.scrollIntoView({ behavior: "smooth" });
}