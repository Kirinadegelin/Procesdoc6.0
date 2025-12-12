document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.getElementById('cursorGlow');
    const container = document.querySelector('.container'); // jouw container

    document.addEventListener('mousemove', (e) => {
        // volg cursor
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';

        // check of de muis binnen de container zit
        const rect = container.getBoundingClientRect();
        if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        ) {
            // over container → van donker naar licht
            // gebruik progressie van y binnen container voor kleur
            const progress = (e.clientY - rect.top) / rect.height; // 0 boven, 1 onder
            // fade van donkerblauw (#4d87df) naar lichtblauw (#a6c8ff)
            const r = Math.round(77 + (166-77)*progress);
            const g = Math.round(135 + (200-135)*progress);
            const b = Math.round(223 + (255-223)*progress);

            const alpha = 0.35; // glow felheid
            cursorGlow.style.background = `radial-gradient(circle, rgba(${r},${g},${b},${alpha}) 0%, rgba(${r},${g},${b},0) 70%)`;
            cursorGlow.style.boxShadow = `0 0 40px rgba(${r},${g},${b},0.4), 0 0 80px rgba(${r},${g},${b},0.25), 0 0 120px rgba(${r},${g},${b},0.15)`;
        } else {
            // buiten container → standaard donkerblauw
            cursorGlow.style.background = 'radial-gradient(circle, rgba(77,135,223,0.35) 0%, rgba(77,135,223,0) 70%)';
            cursorGlow.style.boxShadow = '0 0 40px rgba(77,135,223,0.4), 0 0 80px rgba(77,135,223,0.25), 0 0 120px rgba(77,135,223,0.15)';
        }
    });
});
