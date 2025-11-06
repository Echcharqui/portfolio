import { typeText } from "../utils/typeText.js";

export function nameAndStatusTyping() {
    return new Promise(async (resolve) => {
        const root = document.getElementById("me");
        if (!root) return resolve();

        const nameTarget = root.querySelector(".name");
        const statusTarget = root.querySelector(".status");
        if (!nameTarget || !statusTarget) return resolve();

        // Read strings from attributes
        const nameText = root.getAttribute("data-name")?.trim() || "";
        const statusText = root.getAttribute("data-status")?.trim() || "";

        // Clear any previous content
        nameTarget.textContent = "";
        statusTarget.textContent = "";

        root.classList.add("show");


        // Type name (cursor hides after)
        await typeText(nameTarget, nameText, { delay: 30, keepCursor: false, soundKey: "typoBip" });

        // Type status (cursor stays visible)
        setTimeout(async () => {
            await typeText(statusTarget, statusText, { delay: 30, keepCursor: true, soundKey: "typoBip" });
        }, 200)

        resolve();
    });
}