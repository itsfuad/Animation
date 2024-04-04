/**
 * Animates the specified HTML element to fade in.
 * @param {HTMLElement} elem - The element to animate
 * @param {number} durationMs - The duration of the animation in milliseconds
 */
export function fadeIn(elem: HTMLElement, durationMs: number) {
    elem.style.opacity = "0";
    let startTime: number = 0;
    const display = elem.style.display;
    elem.style.display = 'flex';
    const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / durationMs, 1);
        elem.style.opacity = progress.toString();
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
        if (progress === 1){
            elem.style.display = display;
        }
    };
    requestAnimationFrame(animate);
}

/**
 * Animates the specified HTML element to fade out.
 * @param {HTMLElement} elem - The element to animate
 * @param {number} durationMs - The duration of the animation in milliseconds
 */
export function fadeOut(elem: HTMLElement, durationMs: number) {
    elem.style.opacity = "1";
    let startTime: number = 0;
    const display = elem.style.display;
    elem.style.display = 'flex';
    const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / durationMs, 1);
        elem.style.opacity = (1 - progress).toString();
        if (progress < 1) {
            requestAnimationFrame(animate);
        }

        if (progress === 1){
            elem.style.display = display;
        }
    };
    requestAnimationFrame(animate);
}

/**
 * Animates the specified HTML element to fly in from a given position.
 * @param {HTMLElement} elem - The HTML element to animate.
 * @param {{ x: number, y: number }} position - The position from which the element will fly in, specified as an object with 'x' and 'y' coordinates.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {boolean} fade - Indicates whether to apply fade effect during the animation.
 */
export function flyIn(elem: HTMLElement, position: { x: number, y: number }, duration: number, fade: boolean) {
    position.x = position.x || 0;
    position.y = position.y || 0;
    const display = elem.style.display;
    elem.style.display = 'flex';
    elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
    elem.style.opacity = "0";
    let startTime: number = 0;
    const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        elem.style.transform = `translate(${position.x * (1 - progress)}px, ${position.y * (1 - progress)}px)`;
        if (fade){
            elem.style.opacity = progress.toString();
        }
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
        if (progress === 1){
            elem.style.display = display;
        }
    };
    requestAnimationFrame(animate);
}

/**
 * Animates the specified HTML element to fly out to a given position.
 * @param {HTMLElement} elem - The HTML element to animate.
 * @param {{ x: number, y: number }} position - The position to which the element will fly out, specified as an object with 'x' and 'y' coordinates.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {boolean} fade - Indicates whether to apply fade effect during the animation. 
 */
export function flyOut(elem: HTMLElement, position: { x: number, y: number }, duration: number, fade: boolean) {
    position.x = position.x || 0;
    position.y = position.y || 0;
    const display = elem.style.display;
    elem.style.display = 'flex';
    elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
    elem.style.opacity = "1";
    let startTime: number = 0;
    const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        elem.style.transform = `translate(${position.x * progress}px, ${position.y * progress}px)`;
        if (fade){
            elem.style.opacity = (1 - progress).toString();
        }
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
        if (progress === 1){
            elem.style.display = display;
        }
    };
    requestAnimationFrame(animate);
}