import Sound from "../utils/soundManager.js";

export function initProfileImageLoader() {
    return new Promise((resolve) => {
        const container = document.querySelector(".profile-image-container");
        const loader = document.getElementById("loading-profile-picture");
        const imageContainer = document.getElementById("my-image");
        // In your HTML this is a class .image-error, not an id
        const errorMessage = document.getElementById("image-error");

        if (!container || !loader) return resolve();

        // Start scale animation and play scale1 immediately (sounds are already ready)
        imageContainer?.classList.add("scale");
        Sound.play("scaleImageContainer", { volume: 0.6 });

        // Proceed with image loading
        setTimeout(() => {
            loader.classList.add("show");

            const img = new Image();
            img.src = "/profile/profile.gif";
            img.alt = "profile picture of hamza echcharqui";
            img.className = "show";

            img.onload = () => {
                setTimeout(() => {
                    loader.classList.add("hide");
                    container.appendChild(img);
                    Sound.play("showImage", { volume: 0.6 });
                    resolve();
                }, 1000);
            };

            img.onerror = () => {
                setTimeout(() => {
                    loader.classList.add("hide");
                    errorMessage?.classList.add("show");
                    resolve();
                }, 1000);
            };
        }, 300);
    });
}
