// soundManager.js
import { Howl, Howler } from "howler";

const manifest = {
    scaleImageContainer: ["/sounds/scaleImageContainer.mp3"],
    showImage: ["/sounds/showImage.mp3"],
    typoBip: ["/sounds/typoBip.mp3"],
    linker: ["/sounds/linker.mp3"],
    linker2: ["/sounds/linker2.mp3"],
    reactStatus: ["/sounds/reactStatus.mp3"],
};

const sounds = {};
let readyCount = 0;
const total = Object.keys(manifest).length;
let ready = false;
const waiters = [];

function loadAll() {
    Object.entries(manifest).forEach(([key, src]) => {
        sounds[key] = new Howl({
            src,
            preload: true,
            onload: handleReady,
            onloaderror: handleReady,
        });
    });
}

function handleReady() {
    readyCount += 1;
    if (readyCount >= total) {
        ready = true;
        while (waiters.length) waiters.shift()();
    }
}

function onReady(cb) {
    ready ? cb() : waiters.push(cb);
}

// ✅ Only play if audio is currently unlocked. Do NOT queue.
function isAudioUnlocked() {
    try {
        return Howler.ctx && Howler.ctx.state === "running";
    } catch {
        return false;
    }
}

/**
 * play(name, opts, options)
 * options.requireUnlocked (default true): if audio is locked, skip.
 * returns true if played, false if skipped/not found.
 */
function play(name, opts = { volume: null, delay: 0 }, options = { requireUnlocked: true }) {
    const s = sounds[name];
    if (!s) return false;

    const { volume = null, delay = 0 } = opts;

    if (options.requireUnlocked !== false && !isAudioUnlocked()) {
        return false; // prevent late playback
    }

    const executePlay = () => {
        if (volume != null) s.volume(volume);
        s.play();
    };

    if (delay > 0) setTimeout(executePlay, delay);
    else executePlay();

    return true;
}


export default {
    loadAll,
    onReady,
    play,
    isReady: () => ready,
    sounds,
};
