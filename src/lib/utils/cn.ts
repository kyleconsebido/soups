type Falsy = false | null | undefined;

export default function cn(...strings: (string | Falsy)[]): string {
  return strings
    .filter((string) => string)
    .join(" ")
    .trim();
}
