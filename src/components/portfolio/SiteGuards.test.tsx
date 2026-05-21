import { describe, it, expect, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { SiteGuards } from "./SiteGuards";

describe("SiteGuards component", () => {
  afterEach(() => {
    document.documentElement.classList.remove("site-guards-active");
  });

  it("adds site-guards-active class on mount", () => {
    render(<SiteGuards />);
    expect(document.documentElement.classList.contains("site-guards-active")).toBe(true);
  });

  it("blocks context menu on document", () => {
    render(<SiteGuards />);
    const event = new MouseEvent("contextmenu", { bubbles: true, cancelable: true });
    const prevented = !document.dispatchEvent(event);
    expect(prevented).toBe(true);
  });

  it("removes class on unmount", () => {
    const { unmount } = render(<SiteGuards />);
    unmount();
    expect(document.documentElement.classList.contains("site-guards-active")).toBe(false);
  });
});
