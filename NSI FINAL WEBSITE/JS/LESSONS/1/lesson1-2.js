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
  
  function changeIframeSrc1() {
    setIframeSrc("l1-2_1");
    document.querySelector('.btn_exemple1').style.display = 'inline-block';
  }
  
  function changeIframeSrc2() {
    setIframeSrc("l1-2_2");
    document.querySelector('.btn_exemple2').style.display = 'inline-block';
  }

  function changeIframeSrc3() {
    setIframeSrc("l1-2_3");
    document.querySelector('.btn_exemple3').style.display = 'inline-block';
  }

  function changeIframeSrc4() {
    setIframeSrc("l1-2_4");
    document.querySelector('.btn_exemple4').style.display = 'inline-block';
  }
  
  
  // Charger l'attribut src initial de l'iframe
  setIframeSrc("l1-2_1");
  