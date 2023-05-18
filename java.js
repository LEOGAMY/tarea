function updateClock() {
    var date = new Date();

    var clock1 = document.getElementById("clock1");
    clock1.textContent = date.toLocaleTimeString();

    var clock2 = document.getElementById("clock2");
    clock2.textContent = date.toLocaleTimeString();

    var clock3 = document.getElementById("clock3");
    clock3.textContent = date.toLocaleTimeString();
  }

  setInterval(updateClock, 1000); // Actualizar el reloj cada segundo