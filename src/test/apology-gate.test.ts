import { describe, expect, it } from "vitest";

import { isValidDateCode } from "@/lib/apology-gate";

describe("the private welcome code", () => {
  it("accepts only the exact eight-digit date code", () => {
    expect(isValidDateCode("30032002")).toBe(true);
    expect(isValidDateCode("30032001")).toBe(false);
    expect(isValidDateCode("3003200")).toBe(false);
    expect(isValidDateCode("300320020")).toBe(false);
    expect(isValidDateCode("3003O002")).toBe(false);
  });
});
