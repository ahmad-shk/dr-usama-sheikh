// Utility function for className merging (like clsx)
export function cn(...args) {
  return args.filter(Boolean).join(' ');
}
