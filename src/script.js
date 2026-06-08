/* Cambia de página cuando se pulsa un botón del menú inferior */
function showPage(pageId, element) {
  let pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  
  let navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
}

/* Actualiza el reloj de la cabecera */
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  document.getElementById("clock").innerHTML = hours + ":" + minutes;
}

setInterval(updateClock, 1000);
updateClock();

// Guarda los goles conseguidos en el juego
let score = 0;

/* Función que se ejecuta cuando el usuario pulsa el balón */
function shootBall() {
  let ball = document.getElementById("ball");
  let keeper = document.getElementById("goalkeeper");
  let result = document.getElementById("resultText");
  let scoreText = document.getElementById("score");

  let keeperPos = Math.floor(Math.random() * 3);
  if (keeperPos == 0) {
    keeper.style.left = "20%";
  } else if (keeperPos == 1) {
    keeper.style.left = "50%";
  } else {
    keeper.style.left = "80%";
  }

  let shot = Math.floor(Math.random() * 3);
  let shotPos;
  if (shot == 0) {
    shotPos = "20%";
  } else if (shot == 1) {
    shotPos = "50%";
  } else {
    shotPos = "80%";
  }

  ball.style.bottom = "220px";
  ball.style.left = shotPos;

  setTimeout(() => {
    if (shotPos != keeper.style.left) {
      result.innerHTML = "⚽ GOOOOL!";
      score++;
      scoreText.innerHTML = score;
    } else {
      result.innerHTML = "🧤 PARADA!";
    }
    setTimeout(() => {
      ball.style.bottom = "20px";
      ball.style.left = "50%";
    }, 600);
  }, 500);
}
