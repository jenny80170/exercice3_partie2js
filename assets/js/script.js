// Fonction pour l'événement de la touche entrée 
function enter(event) {
  // Variable qui renvoie l'ID, et qui ne s'enregistre pas
  const lastname = document.getElementById('lastname').value;
  // indication du code touche "entrée" dans la condition
  if(event.keyCode == 13) {
    // alert pour afficher la valeur du champ par le biai de l'ID
    window.alert(lastname);
  }
}
