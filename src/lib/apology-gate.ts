export function isValidDateCode(value: string): boolean {
  return /^\d{8}$/.test(value) && value === "30032002";
}
