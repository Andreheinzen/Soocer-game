document.addEventListener('DOMContentLoaded', () => {
    // "Pegando" os elementos HTML pelo ID
    const menuScreen = document.querySelector('.menu-screen');
    const playButton = document.getElementById('play-button');

    // A gente vai criar a tela do jogo mais tarde. Por agora, vamos criar uma div para ela.
    const gameScreen = document.createElement('div');
    gameScreen.className = 'game-screen';
    gameScreen.style.display = 'none'; // A tela do jogo começa escondida
    document.querySelector('.game-container').appendChild(gameScreen);
});
document.addEventListener('DOMContentLoaded', () => {
    // "Pegando" os elementos HTML pelo ID
    const menuScreen = document.querySelector('.menu-screen');
    const playButton = document.getElementById('play-button');

    // Criando a tela do jogo
    const gameScreen = document.createElement('div');
    gameScreen.className = 'game-screen';
    gameScreen.style.display = 'none'; // A tela do jogo começa escondida
    document.querySelector('.game-container').appendChild(gameScreen);

    // Adicionando um "ouvinte" de clique no botão "JOGAR"
    playButton.addEventListener('click', () => {
        // Esconde a tela do menu
        menuScreen.style.display = 'none';
        
        // Mostra a tela do jogo
        gameScreen.style.display = 'block';

        // Aqui é onde a gente vai iniciar a lógica do jogo
        console.log("Iniciando o jogo...");
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // "Pegando" os elementos HTML pelo ID
    const menuScreen = document.querySelector('.menu-screen');
    const playButton = document.getElementById('play-button');

    // Criando a tela do jogo
    const gameScreen = document.createElement('div');
    gameScreen.className = 'game-screen';
    gameScreen.style.display = 'none'; // A tela do jogo começa escondida
    document.querySelector('.game-container').appendChild(gameScreen);

    // Adicionando um "ouvinte" de clique no botão "JOGAR"
    playButton.addEventListener('click', () => {
        // Esconde a tela do menu
        menuScreen.style.display = 'none';
        
        // Mostra a tela do jogo
        gameScreen.style.display = 'block';

        // Aqui é onde a gente vai iniciar a lógica do jogo
        console.log("Iniciando o jogo...");
    });
});

// Pegando os elementos do jogo
    const player1 = document.querySelector('.player-1');
    const player2 = document.querySelector('.player-2');
    const ball = document.querySelector('.ball');
    const gameScreen = document.querySelector('.game-screen');

    // Variáveis de controle
    let player1Y = 50;
    let player2Y = 50;
    let ballX = 50;
    let ballY = 50;
    let ballSpeedX = 2; // Velocidade da bola no eixo X
    let ballSpeedY = 2; // Velocidade da bola no eixo Y
    const playerSpeed = 5; // Velocidade dos jogadores

    // Variáveis de controle do teclado (para múltiplos botões)
    const keys = {
        w: false,
        s: false,
        ArrowUp: false,
        ArrowDown: false
    };

    // Função que atualiza a posição dos elementos na tela
    function updatePositions() {
        player1.style.top = `${player1Y}%`;
        player2.style.top = `${player2Y}%`;
        ball.style.left = `${ballX}%`;
        ball.style.top = `${ballY}%`;
    }

    // Eventos de teclado
    document.addEventListener('keydown', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = false;
        }
    });

    // Loop principal do jogo
    function gameLoop() {
        // Movimento dos jogadores
        if (keys.w && player1Y > 0) {
            player1Y -= playerSpeed * 0.1;
        }
        if (keys.s && player1Y < 100) {
            player1Y += playerSpeed * 0.1;
        }
        if (keys.ArrowUp && player2Y > 0) {
            player2Y -= playerSpeed * 0.1;
        }
        if (keys.ArrowDown && player2Y < 100) {
            player2Y += playerSpeed * 0.1;
        }
        
        // Movimento da bola
        ballX += ballSpeedX * 0.1;
        ballY += ballSpeedY * 0.1;

        // Colisões da bola com as paredes
        if (ballY <= 0 || ballY >= 100) {
            ballSpeedY *= -1; // Inverte a direção no eixo Y
        }
        if (ballX <= 0 || ballX >= 100) {
            ballSpeedX *= -1; // Inverte a direção no eixo X
        }

        // Atualiza a posição dos elementos na tela
        updatePositions();

        // Faz o loop se repetir
        requestAnimationFrame(gameLoop);
    }

    // Inicia o loop do jogo
        gameLoop();