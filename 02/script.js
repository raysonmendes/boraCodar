function trocarVisualizacao() {
  console.log("Funçao trocarVisualização foi disparada");
  if (document.getElementById("estatico").style.display == "none") {
    document.getElementById("movendo").style.display = "none";
    document.getElementById("estatico").style.display = "block";
    document.getElementById("encerrar").style.display = "none";
    document.getElementById("iniciar").style.display = "block";
    console.log("Estatico");
  } else {
    document.getElementById("estatico").style.display = "none";
    document.getElementById("movendo").style.display = "block";
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("encerrar").style.display = "block";
    console.log("Movendo");
  }
}
