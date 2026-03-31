import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function loadFonts() {
  const [youngSerif, bitter] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/YoungSerif-Regular.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/Bitter-Regular.ttf")),
  ]);

  return [
    { name: "Young Serif", data: youngSerif, weight: 400 as const },
    { name: "Bitter", data: bitter, weight: 400 as const },
  ];
}

export async function loadIcon(filename: string) {
  const data = await readFile(join(process.cwd(), "public", filename));
  return `data:image/png;base64,${data.toString("base64")}`;
}
