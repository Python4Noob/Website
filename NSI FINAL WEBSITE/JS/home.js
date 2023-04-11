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

