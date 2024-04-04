/**
 * Animates the specified HTML element to fade in.
 * @param {HTMLElement} elem - The element to animate
 * @param {number} durationMs - The duration of the animation in milliseconds
 */
export declare function fadeIn(elem: HTMLElement, durationMs: number): void;
/**
 * Animates the specified HTML element to fade out.
 * @param {HTMLElement} elem - The element to animate
 * @param {number} durationMs - The duration of the animation in milliseconds
 */
export declare function fadeOut(elem: HTMLElement, durationMs: number): void;
/**
 * Animates the specified HTML element to fly in from a given position.
 * @param {HTMLElement} elem - The HTML element to animate.
 * @param {{ x: number, y: number }} position - The position from which the element will fly in, specified as an object with 'x' and 'y' coordinates.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {boolean} fade - Indicates whether to apply fade effect during the animation.
 */
export declare function flyIn(elem: HTMLElement, position: {
    x: number;
    y: number;
}, duration: number, fade: boolean): void;
/**
 * Animates the specified HTML element to fly out to a given position.
 * @param {HTMLElement} elem - The HTML element to animate.
 * @param {{ x: number, y: number }} position - The position to which the element will fly out, specified as an object with 'x' and 'y' coordinates.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @param {boolean} fade - Indicates whether to apply fade effect during the animation.
 */
export declare function flyOut(elem: HTMLElement, position: {
    x: number;
    y: number;
}, duration: number, fade: boolean): void;
