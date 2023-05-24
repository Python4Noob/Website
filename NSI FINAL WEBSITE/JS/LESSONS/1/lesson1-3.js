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

window.onload =  function () {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: {y: 1, x:0.9}
  
    })

    confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 1, x:0.7}
    
      })

      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 1, x:0.5}
    
      })
      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 1, x:0.3}
    
      })
      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 1, x:0.1}
    
      })

      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 0.5, x:0.9}
    
      })

      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 0.5, x:0.7}
    
      })
      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 0.5, x:0.5}
    
      })
      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 0.5, x:0.3}
    
      })
      confetti({
        particleCount: 200,
        spread: 80,
        origin: {y: 0.5, x:0.1}
    
      })
  }