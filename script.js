const pookieImage = document.getElementById('pookieImage');

function generateHearts() {
    const hearts = ['💛', '🖤'];
    const heartCount = 20;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.left = `${Math.random() * 100}%`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

pookieImage.addEventListener('click', generateHearts);
