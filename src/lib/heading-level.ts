import { getContext, setContext } from 'svelte';

const KEY = 'adminkit-heading-level';

export function getHeadingLevel(): number {
  return getContext<number>(KEY) ?? 1;
}

export function setHeadingLevel(level: number) {
  setContext(KEY, level);
}
