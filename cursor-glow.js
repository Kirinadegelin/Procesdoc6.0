document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.getElementById('cursorGlow');

    if (!cursorGlow) return; // check dat element bestaat

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
});
