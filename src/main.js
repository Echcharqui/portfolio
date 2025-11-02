import './assets/style.css'
import './assets/custom.css'

import { createIcons, TriangleAlert } from 'lucide';
import Sound from "./modules/soundManger.js";
import { initProfileImageLoader } from "./modules/profileImageLoader.js";

// start preloading ASAP
Sound.loadAll();

window.onload = function () {
    // wait for sounds before removing preloader (and keep your 2s delay)
    Sound.onReady(() => {
        setTimeout(() => {
            const element = document.getElementById("preloader");
            element.classList.add("hide");

            initProfileImageLoader();
        }, 2000);
    });

    createIcons({ icons: { TriangleAlert } });
};