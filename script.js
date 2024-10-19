document.addEventListener('DOMContentLoaded', () => {
    const fireworksContainer = document.getElementById('fireworks-container');

    function createFirework() {
        for (let i = 0; i < 5; i++) { // Creating multiple fireworks
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.animationDelay = Math.random() * 2 + 's';
            const color = getRandomColor(); // Set color once per firework

            for (let j = 0; j < 20; j++) { // More rays for fuller effect
                const ray = document.createElement('div');
                ray.className = 'ray';
                ray.style.backgroundColor = color; // Apply the same color to each ray
                ray.style.setProperty('--x-dir', `${Math.cos((j / 20) * 2 * Math.PI) * 100}px`); /* Spread in circle */
                ray.style.setProperty('--y-dir', `${Math.sin((j / 20) * 2 * Math.PI) * 100}px`); /* Spread in circle */
                firework.appendChild(ray);
            }

            fireworksContainer.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 4000); // Match the duration of the CSS animation
        }
    }

    function getRandomColor() {
        const colors = ['#ff0', '#ff5733', '#33ff57', '#3357ff', '#ff33a8', '#ff00ff', '#00ffff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createFirework, 1500); // Slower interval for a more relaxed effect
});
