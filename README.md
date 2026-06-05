<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Permite que se vean bien las tildes, la ñ, el símbolo € y los emojis -->
  <meta charset="UTF-8">

  <!-- Hace que la web se adapte bien a móviles -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Título que aparece en la pestaña del navegador -->
  <title>FUT COIN</title>

  <style>
    /* Quita márgenes por defecto y hace que los tamaños sean más fáciles de controlar */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }

    /* Color de fondo general de la página */
    body {
      background: #f2f2f2;
    }

    /* Contenedor principal de la app */
    .app {
      max-width: 430px;
      margin: auto;
      min-height: 100vh;
      background: white;
      overflow: hidden;
      position: relative;
    }

    /* Barra superior con el logo y el reloj */
    .header {
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
      background: white;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    /* Nombre de la aplicación */
    .logo {
      font-size: 30px;
      font-weight: bold;
      color: #00c853;
    }

    /* Reloj que se actualiza con JavaScript */
    .clock {
      color: #666;
      font-size: 18px;
      font-weight: bold;
    }

    /* Todas las páginas están ocultas por defecto */
    .page {
      display: none;
      padding: 20px;
      padding-bottom: 110px;
    }

    /* Solo la página activa se muestra */
    .page.active {
      display: block;
    }

    /* Títulos de cada sección */
    .section-title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #111;
    }

    /* Tarjetas donde aparecen partidos, tienda o juegos */
    .match-card {
      background: white;
      border-radius: 24px;
      padding: 20px;
      margin-bottom: 18px;
      border: 1px solid #ddd;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }

    /* Texto pequeño que indica la liga o la hora */
    .league {
      color: #00c853;
      font-size: 13px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    /* Coloca los dos equipos y el VS en una misma fila */
    .match-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* Cada equipo ocupa una parte de la tarjeta */
    .team {
      width: 35%;
      text-align: center;
    }

    /* Escudos de los equipos */
    .team img {
      width: 65px;
      height: 65px;
      object-fit: contain;
      margin-bottom: 10px;
    }

    /* Nombre del equipo */
    .team-name {
      font-size: 14px;
      font-weight: bold;
    }

    /* Texto VS del centro */
    .vs {
      font-size: 22px;
      font-weight: bold;
      color: #777;
    }

    /* Hora del partido */
    .match-time {
      text-align: center;
      margin-top: 15px;
      color: #666;
      font-size: 15px;
    }

    /* Caja de la clasificación */
    .table {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #ddd;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }

    /* Cabecera de la tabla */
    .table-header {
      background: #00c853;
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 15px;
      font-weight: bold;
    }

    /* Cada fila de la clasificación */
    .table-row {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      border-top: 1px solid #eee;
    }

    /* Imagen del producto de la tienda */
    .store-img {
      width: 150px;
      border-radius: 20px;
      margin-bottom: 15px;
    }

    /* Precio del producto */
    .price {
      color: #00c853;
      font-size: 20px;
      font-weight: bold;
      margin-top: 10px;
    }

    /* Botón de compra */
    .buy-btn {
      width: 100%;
      margin-top: 15px;
      padding: 14px;
      border: none;
      border-radius: 15px;
      background: #00c853;
      color: white;
      font-weight: bold;
      cursor: pointer;
      font-size: 16px;
    }

    /* Menú inferior fijo */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 430px;
      background: white;
      border-top: 1px solid #ddd;
      display: flex;
      justify-content: space-around;
      padding: 15px 0;
    }

    /* Cada botón del menú inferior */
    .nav-item {
      color: #777;
      font-size: 12px;
      cursor: pointer;
      text-align: center;
    }

    /* Botón del menú que está seleccionado */
    .nav-item.active {
      color: #00c853;
      font-weight: bold;
    }

    /* Campo del minijuego */
    #goalGame {
      width: 100%;
      height: 320px;
      background: linear-gradient(to bottom, #4caf50, #2e7d32);
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      margin-top: 20px;
    }

    /* Portero del juego */
    #goalkeeper {
      width: 80px;
      height: 80px;
      background: red;
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
      transition: 0.3s;
    }

    /* Balón del juego */
    #ball {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 55px;
      cursor: pointer;
      transition: 0.5s;
    }
  </style>
</head>

<body>
  <!-- Contenedor principal de toda la app -->
  <div class="app">

    <!-- Cabecera superior -->
    <div class="header">
      <div class="logo">FUT COIN</div>
      <div class="clock" id="clock">00:00</div>
    </div>

    <!-- Página de inicio -->
    <div class="page active" id="home">
      <div class="section-title">PARTIDOS DESTACADOS</div>

      <div class="match-card">
        <div class="league">LA LIGA</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/an/f/f1/Real_Betis.png" alt="Escudo Betis">
            <div class="team-name">BETIS</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://a.espncdn.com/i/teamlogos/soccer/500/1538.png" alt="Escudo Levante">
            <div class="team-name">LEVANTE</div>
          </div>
        </div>

        <div class="match-time">21:00</div>
      </div>

      <div class="match-card">
        <div class="league">LA LIGA</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/9/92/RCD_Espanyol_crest.svg" alt="Escudo Espanyol">
            <div class="team-name">ESPANYOL</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1280px-Real_Sociedad_logo.svg.png" alt="Escudo Real Sociedad">
            <div class="team-name">REAL SOCIEDAD</div>
          </div>
        </div>

        <div class="match-time">21:00</div>
      </div>

      <div class="match-card">
        <div class="league">PREMIER LEAGUE</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg" alt="Escudo Chelsea">
            <div class="team-name">CHELSEA</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg" alt="Escudo Newcastle">
            <div class="team-name">NEWCASTLE</div>
          </div>
        </div>

        <div class="match-time">21:00</div>
      </div>
    </div>

    <!-- Página de partidos -->
    <div class="page" id="matches">
      <div class="section-title">PARTIDOS DE HOY</div>

      <div class="match-card">
        <div class="league">HOY · 21:00</div>

        <div class="match-content">
          <div class="team">
            <img src="https://yt3.googleusercontent.com/l2lnAO3cEsqPVFmjmNtpo2r-pkfWhp2jdA9q29PVvEJN9Ql_poJwe6y0LaTq_J6VPv4hcHlQ5A=s900-c-k-c0x00ffffff-no-rj" alt="Escudo Alavés">
            <div class="team-name">ALAVÉS</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Rayo_Vallecano_logo.svg/1280px-Rayo_Vallecano_logo.svg.png" alt="Escudo Rayo">
            <div class="team-name">RAYO</div>
          </div>
        </div>
      </div>

      <div class="match-card">
        <div class="league">HOY · 21:00</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Escudo_RC_Celta_de_Vigo.svg/960px-Escudo_RC_Celta_de_Vigo.svg.png" alt="Escudo Celta">
            <div class="team-name">CELTA</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg" alt="Escudo Sevilla">
            <div class="team-name">SEVILLA</div>
          </div>
        </div>
      </div>

      <div class="match-card">
        <div class="league">HOY · 21:00</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/9/92/RCD_Espanyol_crest.svg" alt="Escudo Espanyol">
            <div class="team-name">ESPANYOL</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1280px-Real_Sociedad_logo.svg.png" alt="Escudo Real Sociedad">
            <div class="team-name">REAL SOCIEDAD</div>
          </div>
        </div>
      </div>

      <div class="match-card">
        <div class="league">HOY · 21:00</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/1280px-Getafe_logo.svg.png" alt="Escudo Getafe">
            <div class="team-name">GETAFE</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/OSASUNA.jpg" alt="Escudo Osasuna">
            <div class="team-name">OSASUNA</div>
          </div>
        </div>
      </div>

      <div class="match-card">
        <div class="league">HOY · 21:00</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Escudo Real Madrid">
            <div class="team-name">REAL MADRID</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg" alt="Escudo Athletic">
            <div class="team-name">ATHLETIC</div>
          </div>
        </div>
      </div>

      <div class="match-card">
        <div class="league">HOY · 21:00</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg" alt="Escudo Valencia">
            <div class="team-name">VALENCIA</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" alt="Escudo Barcelona">
            <div class="team-name">BARÇA</div>
          </div>
        </div>
      </div>

      <div class="section-title" style="margin-top:35px;">PARTIDOS DE MAÑANA</div>

      <div class="match-card">
        <div class="league">MAÑANA · 21:00</div>

        <div class="match-content">
          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/1280px-Villarreal_CF_logo-en.svg.png" alt="Escudo Villarreal">
            <div class="team-name">VILLARREAL</div>
          </div>

          <div class="vs">VS</div>

          <div class="team">
            <img src="https://upload.wikimedia.org/wikipedia/an/4/4d/Atletico_Madrid.png" alt="Escudo Atlético">
            <div class="team-name">ATLÉTICO</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Página de clasificación -->
    <div class="page" id="table">
      <div class="section-title">CLASIFICACIÓN</div>

      <div class="table">
        <div class="table-header">
          <span>CLUB</span>
          <span>PTS</span>
        </div>

        <div class="table-row">
          <span>1. FC BARCELONA</span>
          <span>94</span>
        </div>

        <div class="table-row">
          <span>2. REAL MADRID</span>
          <span>84</span>
        </div>

        <div class="table-row">
          <span>3. ATL. MADRID</span>
          <span>73</span>
        </div>

        <div class="table-row">
          <span>4. VILLARREAL</span>
          <span>70</span>
        </div>

        <div class="table-row">
          <span>5. ATHLETIC CLUB</span>
          <span>67</span>
        </div>

        <div class="table-row">
          <span>6. BETIS</span>
          <span>59</span>
        </div>
      </div>
    </div>

    <!-- Página de tienda -->
    <div class="page" id="shop">
      <div class="section-title">TIENDA</div>

      <div class="match-card" style="text-align:center;">
        <img
          class="store-img"
          src="https://store.fcbarcelona.com/cdn/shop/files/HJ5287-456_431723912_D_A_1X1_c2d83b8f-43dc-4c1b-9010-e71897d5b623.jpg?v=1763716638&width=1200"
          alt="Camiseta Barça 25/26"
        >

        <h3>CAMISETA BARÇA 25/26</h3>

        <div class="price">89,99€</div>

        <button class="buy-btn">COMPRAR</button>
      </div>
    </div>

    <!-- Página de juegos -->
    <div class="page" id="games">
      <div class="section-title">JUEGOS</div>

      <div class="match-card">
        <h2 style="text-align:center;">⚽ CHUTA A PORTERÍA</h2>

        <div id="goalGame">
          <div id="goalkeeper"></div>

          <div id="ball" onclick="shootBall()">⚽</div>
        </div>

        <p id="resultText" style="text-align:center; margin-top:20px; font-size:22px;">
          Pulsa el balón para tirar
        </p>

        <p style="text-align:center; margin-top:10px;">
          Goles: <span id="score">0</span>
        </p>
      </div>
    </div>

    <!-- Menú inferior para cambiar entre páginas -->
    <div class="bottom-nav">
      <div class="nav-item active" onclick="showPage('home', this)">INICIO</div>
      <div class="nav-item" onclick="showPage('matches', this)">PARTIDOS</div>
      <div class="nav-item" onclick="showPage('table', this)">CLASIFICACIÓN</div>
      <div class="nav-item" onclick="showPage('shop', this)">TIENDA</div>
      <div class="nav-item" onclick="showPage('games', this)">JUEGOS</div>
    </div>
  </div>

  <script>
    /* Cambia de página cuando se pulsa un botón del menú inferior */
    function showPage(pageId, element) {
      // Busca todas las páginas de la app
      let pages = document.querySelectorAll('.page');

      // Oculta todas las páginas
      pages.forEach(page => {
        page.classList.remove('active');
      });

      // Muestra solo la página elegida
      document.getElementById(pageId).classList.add('active');

      // Busca todos los botones del menú
      let navItems = document.querySelectorAll('.nav-item');

      // Quita el color verde de todos los botones
      navItems.forEach(item => {
        item.classList.remove('active');
      });

      // Pone el color verde al botón que se ha pulsado
      element.classList.add('active');
    }

    /* Actualiza el reloj de la cabecera */
    function updateClock() {
      // Coge la hora actual del ordenador o móvil
      const now = new Date();

      // Guarda la hora y los minutos
      let hours = now.getHours();
      let minutes = now.getMinutes();

      // Si los minutos son menores que 10, añade un cero delante
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      // Escribe la hora dentro del elemento con id="clock"
      document.getElementById("clock").innerHTML = hours + ":" + minutes;
    }

    // Hace que el reloj se actualice cada segundo
    setInterval(updateClock, 1000);

    // Muestra la hora nada más abrir la página
    updateClock();

    // Guarda los goles conseguidos en el juego
    let score = 0;

    /* Función que se ejecuta cuando el usuario pulsa el balón */
    function shootBall() {
      // Busca el balón, el portero, el texto del resultado y el marcador
      let ball = document.getElementById("ball");
      let keeper = document.getElementById("goalkeeper");
      let result = document.getElementById("resultText");
      let scoreText = document.getElementById("score");

      // Elige una posición aleatoria para el portero: izquierda, centro o derecha
      let keeperPos = Math.floor(Math.random() * 3);

      // Mueve el portero según el número elegido
      if (keeperPos == 0) {
        keeper.style.left = "20%";
      } else if (keeperPos == 1) {
        keeper.style.left = "50%";
      } else {
        keeper.style.left = "80%";
      }

      // Elige una posición aleatoria para el disparo
      let shot = Math.floor(Math.random() * 3);

      // Aquí se guardará la posición final del disparo
      let shotPos;

      // Convierte el número aleatorio en una posición de pantalla
      if (shot == 0) {
        shotPos = "20%";
      } else if (shot == 1) {
        shotPos = "50%";
      } else {
        shotPos = "80%";
      }

      // Mueve el balón hacia la portería
      ball.style.bottom = "220px";
      ball.style.left = shotPos;

      // Espera medio segundo para comprobar si es gol o parada
      setTimeout(() => {
        // Si el balón y el portero no están en el mismo sitio, es gol
        if (shotPos != keeper.style.left) {
          result.innerHTML = "⚽ GOOOOL!";
          score++;
          scoreText.innerHTML = score;
        } else {
          result.innerHTML = "🧤 PARADA!";
        }

        // Después de un momento, el balón vuelve al punto inicial
        setTimeout(() => {
          ball.style.bottom = "20px";
          ball.style.left = "50%";
        }, 600);
      }, 500);
    }
  </script>
</body>
</html>
