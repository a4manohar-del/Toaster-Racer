# Toaster-Racer
This game was inspired by the random idea generator but I actually like how it turned out. I love the subway surfers game so I chose that as the base idea of the game. 
The game is a single HTML file with 3 parts: HTML sets up the page, a fake formula bar, <canvas> for the game, a shop panel, and Race and Leaderboards tabs. 
CSS styles it like a spreadsheet and switches between light and dark mode. Javascript runs the game itself. A requestAnimationFrame loop calls an update() function that moves the 
obstacles, checks collisions, and adds score, then a draw() function that paints the toaster, the kitchen, and the Warden (storm clouds which is what a toaster is afraid of)
onto the canvas each frame. Arrow keys, A/D, or taps change the toasters lane. The shop items change how a run plays, and localStorage saves your bank, best score, and 
shop stock between sessions. I used Apps Script and set it so that the game runs automatically on open. Hope you enjoy.
