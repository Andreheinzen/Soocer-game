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