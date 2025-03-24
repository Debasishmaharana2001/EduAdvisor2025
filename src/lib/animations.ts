
// Animation utility functions for consistent animations across the application

/**
 * Creates CSS animation keyframes string for custom animations
 * @param name Animation name
 * @param keyframes Keyframes object
 * @returns CSS keyframes string
 */
export const createKeyframes = (name: string, keyframes: Record<string, Record<string, string>>) => {
  let keyframesStr = `@keyframes ${name} {`;
  
  for (const [key, value] of Object.entries(keyframes)) {
    keyframesStr += `${key} {`;
    for (const [prop, val] of Object.entries(value)) {
      keyframesStr += `${prop}: ${val};`;
    }
    keyframesStr += '}';
  }
  
  keyframesStr += '}';
  return keyframesStr;
};

/**
 * Applies staggered animation to multiple elements
 * @param elements HTML elements to animate
 * @param animation Animation class to apply
 * @param delay Delay in ms between each element
 * @param initialDelay Initial delay before starting animations
 */
export const applyStaggeredAnimation = (
  elements: HTMLElement[],
  animation: string,
  delay = 100,
  initialDelay = 0
) => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add(animation);
    }, initialDelay + index * delay);
  });
};

/**
 * Trigger animations when an element enters the viewport
 * @param elementId The ID of the element to observe
 * @param animationClass The CSS animation class to apply
 */
export const animateOnScroll = (elementId: string, animationClass: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const element = document.getElementById(elementId);
  if (element) {
    observer.observe(element);
  }
};

/**
 * Trigger animations on all elements with a specific class when they enter the viewport
 * @param selector The class selector for elements to observe
 * @param animationClass The CSS animation class to apply
 */
export const animateAllOnScroll = (selector: string, animationClass: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  );

  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    observer.observe(element);
  });
};

/**
 * Apply a continuous wave animation to a group of elements
 * @param selector CSS selector for the elements
 * @param animationClass CSS animation class
 * @param delayBetweenItems Delay between items in ms
 */
export const applyWaveAnimation = (
  selector: string,
  animationClass: string,
  delayBetweenItems = 200
) => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element, index) => {
    (element as HTMLElement).style.animationDelay = `${index * delayBetweenItems}ms`;
    element.classList.add(animationClass);
  });
};

export default {
  createKeyframes,
  applyStaggeredAnimation,
  animateOnScroll,
  animateAllOnScroll,
  applyWaveAnimation
};
