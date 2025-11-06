import Sound from './soundManager.js'


// Simple typer function
export async function typeText(el, text, { delay = 35, keepCursor = false, soundKey = null } = {}) {
    return new Promise((res) => {
        if (!text) return res();
        let i = 0;
        el.classList.add("cursor");

        const tick = () => {
            el.textContent += text[i];

            // play per-character beep 
            if (soundKey) Sound.play(soundKey, { volume: 0.2 });

            i += 1;

            if (i < text.length) {
                setTimeout(tick, delay);
            } else {
                if (!keepCursor) el.classList.remove("cursor");
                res();
            }
        };

        setTimeout(tick, delay);
    });
}