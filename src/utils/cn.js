import { clsx } from "clsx"; // Assuming clsx doesn't have TypeScript typings
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
