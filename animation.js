/**
 * 
 * @param {number} durationMs Number of milliseconds to animate
 */

// Define methods on the object's prototype
HTMLElement.prototype.fadeIn = function (durationMs) {
	const elem = this;
	elem.style.opacity = 0;
	let startTime = null;
	const display = elem.style.display;
	elem.style.display = 'flex';
	const animate = (currentTime) => {
		if (!startTime) startTime = currentTime;
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / durationMs, 1);
		elem.style.opacity = progress;
		if (progress < 1) {
			requestAnimationFrame(animate);
		}

		if (progress === 1){
			elem.style.display = display;
		}
	};
	requestAnimationFrame(animate);
};

/**
 * 
 * @param {number} durationMs Number of milliseconds to animate
 */
HTMLElement.prototype.fadeOut = function (durationMs) {
	const elem = this;
	elem.style.opacity = 1;
	let startTime = null;
	const display = elem.style.display;
	elem.style.display = 'flex';
	const animate = (currentTime) => {
		if (!startTime) startTime = currentTime;
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / durationMs, 1);
		elem.style.opacity = 1 - progress;
		if (progress < 1) {
			requestAnimationFrame(animate);
		}

		if (progress === 1){
			elem.style.display = display;
		}
	};
	requestAnimationFrame(animate);
};

/**
 * 
 * @param {Object} position
 * @param {Number} position.x
 * @param {Number} position.y 
 * @param {number} duration 
 * @param {boolean} fade
 */
HTMLElement.prototype.flyIn = function (position, duration, fade = false){
	const elem = this;
	position.x = position.x || 0;
	position.y = position.y || 0;
	const display = elem.style.display;
	elem.style.display = 'flex';
	elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
	elem.style.opacity = 0;
	let startTime = null;
	const animate = (currentTime) => {
		if (!startTime) startTime = currentTime;
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / duration, 1);
		elem.style.transform = `translate(${position.x * (1 - progress)}px, ${position.y * (1 - progress)}px)`;
		if (fade){
			elem.style.opacity = progress;
		}
		if (progress < 1) {
			requestAnimationFrame(animate);
		}
		if (progress === 1){
			elem.style.display = display;
		}
	};
	requestAnimationFrame(animate);
};

/**
 * 
 * @param {Object} position
 * @param {Number} position.x
 * @param {Number} position.y 
 * @param {number} duration 
 * @param {boolean} fade
 */
HTMLElement.prototype.flyOut = function (position, duration, fade = false){
	const elem = this;
	position.x = position.x || 0;
	position.y = position.y || 0;
	const display = elem.style.display;
	elem.style.display = 'flex';
	elem.style.transform = `translate(${position.x}px, ${position.y}px)`;
	elem.style.opacity = 1;
	let startTime = null;
	const animate = (currentTime) => {
		if (!startTime) startTime = currentTime;
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / duration, 1);
		elem.style.transform = `translate(${position.x * progress}px, ${position.y * progress}px)`;
		if (fade){
			elem.style.opacity = 1 - progress;
		}
		if (progress < 1) {
			requestAnimationFrame(animate);
		}
		if (progress === 1){
			elem.style.display = display;
		}
	};
	requestAnimationFrame(animate);
};
