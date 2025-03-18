declare module "maath/random/dist/maath-random.esm" {
  export function inSphere(
    positions: Float32Array,
    options: { radius: number; randomize: boolean }
  ): Float32Array;
}

declare module "maath" {
  export namespace easing {
    export function damp3(
      current: THREE.Vector3,
      target: THREE.Vector3,
      smoothing: number,
      delta: number
    ): void;

    export function dampE(
      current: THREE.Euler,
      target: [number, number, number],
      smoothing: number,
      delta: number
    ): void;
  }
}
