import { imageSelectionError, MAX_IMAGE_BYTES, SUPPORTED_IMAGE_TYPES } from './imageValidation';

test('accepts supported image types up to the exact byte limit', () => {
  for (const type of SUPPORTED_IMAGE_TYPES) {
    expect(imageSelectionError({ type, size: MAX_IMAGE_BYTES })).toBe('');
  }
  expect(imageSelectionError(null)).toBe('');
});

test('rejects oversized, empty and unsupported files before creating previews', () => {
  expect(imageSelectionError({ type: 'image/png', size: MAX_IMAGE_BYTES + 1 }))
    .toMatch(/5 MiB/);
  expect(imageSelectionError({ type: 'image/png', size: 0 })).toMatch(/nonempty/);
  for (const type of ['', 'text/plain', 'image/svg+xml']) {
    expect(imageSelectionError({ type, size: 1 })).toMatch(/PNG, JPEG/);
  }
});
