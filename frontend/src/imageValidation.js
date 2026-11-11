export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const SUPPORTED_IMAGE_TYPES = Object.freeze([
  'image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/avif',
]);

export function imageSelectionError(file) {
  if (!file) return '';
  if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) {
    return 'Choose a PNG, JPEG, WebP, GIF or AVIF image.';
  }
  if (file.size === 0) return 'Choose a nonempty image.';
  if (file.size > MAX_IMAGE_BYTES) return 'Choose an image no larger than 5 MiB.';
  return '';
}
