import { writable } from "svelte/store";

let click = writable(false);

export {click}