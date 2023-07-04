function procurar() {
    var temperatura = Number(document.getElementById("inTemperatura").value);
  
    if (temperatura >= -15 && temperatura <= 5) {
      location.href = "pag_Rainha_do_gelo.html";
    }
    else if (temperatura >= 6 && temperatura <= 15) {
      location.href = "pag_Alucinogena.html";
    }
    else if (temperatura >= 16 && temperatura <= 34) {
      location.href = "pag_Fantaminha_camarada.html";
    }
    else if (temperatura >= 35 && temperatura <= 45) {
      location.href = "pag_Cavaleiro_da_danacao.html";
    } 
    else {
      alert(`${temperatura} inexistente`);
    }
  }