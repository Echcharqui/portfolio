import './assets/style.css'
import './assets/custom.css'

import { createIcons, TriangleAlert } from 'lucide';
import Sound from "./utils/soundManager.js";
import { runSequence } from './utils/animationSequence.js';
import { initProfileImageLoader } from "./modules/profileImageLoader.js";
import { nameAndStatusTyping } from './modules/nameAndStatusTyping.js';
import { linkerAnimation } from './modules/linkerAnimation.js'


// start preloading ASAP
Sound.loadAll();

const homeTrigger = async () => {
    await runSequence([
        () => linkerAnimation(),
        "wait:1500",
        () => nameAndStatusTyping(),
        () => initProfileImageLoader(),
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