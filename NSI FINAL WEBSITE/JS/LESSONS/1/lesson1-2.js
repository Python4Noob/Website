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
  