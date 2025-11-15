import Sound from "../utils/soundManager.js";

export function linkerAnimation() {
    return new Promise(async (resolve) => {
        const relationLinker = document.getElementById("relation-linker");

        if (!relationLinker) return resolve();

        relationLinker.classList.add("show");
        Sound.play("linker", { volume: 0.6 });
        setTimeout(() => {
            Sound.play("linker2", { volume: 0.6 });
        }, 1000);

        resolve();
    });
}