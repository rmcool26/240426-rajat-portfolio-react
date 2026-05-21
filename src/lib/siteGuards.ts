/** Elements where typing / native selection must still work */
export const ALLOW_INTERACTION_SELECTOR =
  'input, textarea, select, [contenteditable="true"], [data-allow-copy]';

export function isAllowedInteractionTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return target.closest(ALLOW_INTERACTION_SELECTOR) !== null;
}

export type KeyboardGuardInput = {
  key: string;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  target: EventTarget | null;
};

/** Returns true when the key combo should be blocked */
export function shouldBlockKeyboard(input: KeyboardGuardInput): boolean {
  const k = input.key.toLowerCase();
  const mod = input.ctrlKey || input.metaKey;
  const inField = isAllowedInteractionTarget(input.target);

  if (input.key === "F12" || input.key === "PrintScreen") return true;

  if (mod && input.shiftKey && ["i", "j", "c", "k"].includes(k)) return true;

  if (mod && ["u", "s", "p"].includes(k)) return true;

  if (mod && !inField && ["c", "x", "a"].includes(k)) return true;

  return false;
}

export function shouldBlockClipboard(target: EventTarget | null): boolean {
  return !isAllowedInteractionTarget(target);
}

export function shouldBlockSelection(target: EventTarget | null): boolean {
  return !isAllowedInteractionTarget(target);
}

export function shouldBlockDrag(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return target.closest("img, picture, svg") !== null;
}
