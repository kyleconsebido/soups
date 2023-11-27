export function cn(...strings: (string | unknown)[]): string {
  return strings
    .filter((string) => string)
    .join(" ")
    .trim();
}
