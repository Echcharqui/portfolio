// /src/modules/profileImageLoader.js
import Sound from "./soundManger.js";

export function initProfileImageLoader() {
    const container = document.querySelector(".profile-image-container");
    const loader = document.getElementById("loading-profile-picture");
    const imageContainer = document.getElementById("my-image");
    // In your HTML this is a class .image-error, not an id
    const errorMessage = document.querySelector(".image-error");

    if (!container || !loader) return;

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

                // Play when the image is actually visible
                Sound.play("showImage", { volume: 0.6 });
            }, 1000);
        };

        img.onerror = () => {
            loader.classList.add("hide");
            errorMessage?.classList.add("show");
        };
    }, 300);
}
