import { gsap } from 'gsap';

import { CustomEase } from 'gsap/CustomEase';

let registered = false;

export function getGsap() {
  if (!registered) {
    gsap.registerPlugin(CustomEase);
    registered = true;
  }

  return { gsap, CustomEase };
}
export { CustomEase, gsap };
