// soundManager.js
import { Howl, Howler } from "howler";

const manifest = {
    scaleImageContainer: ["/sounds/scaleImageContainer.mp3"],
    showImage: ["/sounds/showImage.mp3"],
    typoBip: ["/sounds/typoBip.mp3"],

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
function play(name, opts = {}, options = { requireUnlocked: true }) {
    const s = sounds[name];
    if (!s) return false;

    if (options.requireUnlocked !== false && !isAudioUnlocked()) {
        // audio locked -> skip; prevents late playback
        return false;
    }

    if (opts.volume != null) s.volume(opts.volume);

    s.play();
    return true;
}

export default {
    loadAll,
    onReady,
    play,
    isReady: () => ready,
    sounds,
};
