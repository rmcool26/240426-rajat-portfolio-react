import { describe, it, expect } from "vitest";
import {
  shouldBlockClipboard,
  shouldBlockDrag,
  shouldBlockKeyboard,
  shouldBlockSelection,
} from "./siteGuards";

describe("siteGuards", () => {
  describe("shouldBlockKeyboard", () => {
    it("blocks F12 and PrintScreen", () => {
      expect(shouldBlockKeyboard({ key: "F12", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false, target: null })).toBe(true);
      expect(shouldBlockKeyboard({ key: "PrintScreen", ctrlKey: false, metaKey: false, shiftKey: false, altKey: false, target: null })).toBe(true);
    });

    it("blocks devtools shortcuts", () => {
      expect(
        shouldBlockKeyboard({ key: "I", ctrlKey: true, metaKey: false, shiftKey: true, altKey: false, target: document.body }),
      ).toBe(true);
      expect(
        shouldBlockKeyboard({ key: "j", ctrlKey: false, metaKey: true, shiftKey: true, altKey: false, target: document.body }),
      ).toBe(true);
    });

    it("blocks copy/select/view-source outside inputs", () => {
      expect(
        shouldBlockKeyboard({ key: "c", ctrlKey: true, metaKey: false, shiftKey: false, altKey: false, target: document.body }),
      ).toBe(true);
      expect(
        shouldBlockKeyboard({ key: "a", ctrlKey: true, metaKey: false, shiftKey: false, altKey: false, target: document.body }),
      ).toBe(true);
      expect(
        shouldBlockKeyboard({ key: "u", ctrlKey: true, metaKey: false, shiftKey: false, altKey: false, target: document.body }),
      ).toBe(true);
    });

    it("allows normal typing keys in inputs", () => {
      const input = document.createElement("input");
      document.body.appendChild(input);
      expect(
        shouldBlockKeyboard({ key: "c", ctrlKey: true, metaKey: false, shiftKey: false, altKey: false, target: input }),
      ).toBe(false);
      document.body.removeChild(input);
    });
  });

  describe("clipboard and selection", () => {
    it("blocks copy on page content", () => {
      expect(shouldBlockClipboard(document.body)).toBe(true);
    });

    it("allows copy in marked fields", () => {
      const el = document.createElement("div");
      el.setAttribute("data-allow-copy", "");
      document.body.appendChild(el);
      expect(shouldBlockClipboard(el)).toBe(false);
      document.body.removeChild(el);
    });

    it("blocks text selection on page", () => {
      expect(shouldBlockSelection(document.body)).toBe(true);
    });
  });

  describe("drag", () => {
    it("blocks dragging images", () => {
      const img = document.createElement("img");
      expect(shouldBlockDrag(img)).toBe(true);
    });

    it("allows dragging non-media elements", () => {
      const div = document.createElement("div");
      expect(shouldBlockDrag(div)).toBe(false);
    });
  });
});
