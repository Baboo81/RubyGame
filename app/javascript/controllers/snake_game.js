document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("snakeCanvas");
    let ctx = canvas.getContext("2d");
    let snake = [{x: 5, y: 5}];
    let direction = {x: 1, y: 0};  // Début du jeu avec mouvement vers la droite
    let food = {x: 8, y: 8};
    let gameInterval;

    const moveSnake = () => {
        // Calculer la position suivante de la tête du serpent
        let newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(newHead); // Ajouter la nouvelle tête du serpent

        if (newHead.x === food.x && newHead.y === food.y) {
            food = {x: Math.floor(Math.random() * canvas.width / 10), y: Math.floor(Math.random() * canvas.height / 10)};
        } else {
            snake.pop(); // Supprimer la queue du serpent si pas de nourriture
        }

        // Dessiner le serpent et la nourriture
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.forEach((segment) => {
            ctx.fillStyle = "green";
            ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
        });

        ctx.fillStyle = "red";
        ctx.fillRect(food.x * 10, food.y * 10, 10, 10);
    };

    const startGame = () => {
        gameInterval = setInterval(moveSnake, 100); // Met à jour le serpent toutes les 100ms
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowUp") direction = {x: 0, y: -1};
        if (event.key === "ArrowDown") direction = {x: 0, y: 1};
        if (event.key === "ArrowLeft") direction = {x: -1, y: 0};
        if (event.key === "ArrowRight") direction = {x: 1, y: 0};
    });

    startGame(); // Démarrer le jeu
});
