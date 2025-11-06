import './assets/style.css'
import './assets/custom.css'

import { createIcons, TriangleAlert } from 'lucide';
import Sound from "./utils/soundManager.js";
import { runSequence } from './utils/animationSequence.js';
import { initProfileImageLoader } from "./modules/profileImageLoader.js";
import { nameAndStatusTyping } from './modules/nameAndStatusTyping.js'

// start preloading ASAP
Sound.loadAll();

const homeTrigger = async () => {
    await runSequence([
        () => initProfileImageLoader(),
        "wait:500", // wait for half second
        () => nameAndStatusTyping()
    ]);
}

window.onload = function () {

    Sound.onReady(() => {
        setTimeout(async () => {
            const element = document.getElementById("preloader");
            element.classList.add("hide");

            await homeTrigger()

        }, 2000);
    });

    createIcons({ icons: { TriangleAlert } });
};