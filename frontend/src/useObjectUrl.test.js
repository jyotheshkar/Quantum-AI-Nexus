import { renderHook } from '@testing-library/react';
import useObjectUrl from './useObjectUrl';

test('reuses the preview and releases it when replaced or unmounted', () => {
  const create = jest.fn().mockReturnValueOnce('blob:first').mockReturnValueOnce('blob:second');
  const revoke = jest.fn();
  const previousCreate = URL.createObjectURL;
  const previousRevoke = URL.revokeObjectURL;
  URL.createObjectURL = create;
  URL.revokeObjectURL = revoke;
  try {
    const first = new File(['first'], 'first.png', { type: 'image/png' });
    const second = new File(['second'], 'second.png', { type: 'image/png' });
    const { result, rerender, unmount } = renderHook(({ file }) => useObjectUrl(file), {
      initialProps: { file: first },
    });
    expect(result.current).toBe('blob:first');
    rerender({ file: first });
    expect(create).toHaveBeenCalledTimes(1);
    rerender({ file: second });
    expect(revoke).toHaveBeenCalledWith('blob:first');
    expect(result.current).toBe('blob:second');
    unmount();
    expect(revoke).toHaveBeenCalledWith('blob:second');
    expect(revoke).toHaveBeenCalledTimes(2);
  } finally {
    URL.createObjectURL = previousCreate;
    URL.revokeObjectURL = previousRevoke;
  }
});

test('clears and releases the preview when a selection is removed', () => {
  const previousCreate = URL.createObjectURL;
  const previousRevoke = URL.revokeObjectURL;
  URL.createObjectURL = jest.fn().mockReturnValue('blob:selected');
  URL.revokeObjectURL = jest.fn();
  try {
    const { result, rerender } = renderHook(({ file }) => useObjectUrl(file), {
      initialProps: { file: new File(['x'], 'image.png') },
    });
    rerender({ file: null });
    expect(result.current).toBe(null);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:selected');
  } finally {
    URL.createObjectURL = previousCreate;
    URL.revokeObjectURL = previousRevoke;
  }
});
