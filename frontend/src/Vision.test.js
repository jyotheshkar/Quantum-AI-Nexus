import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Vision from './Vision';

test('rejects an invalid replacement, removes the old preview and reports why', () => {
  const previousCreate = URL.createObjectURL;
  const previousRevoke = URL.revokeObjectURL;
  URL.createObjectURL = jest.fn().mockReturnValue('blob:valid-image');
  URL.revokeObjectURL = jest.fn();
  try {
    render(<MemoryRouter><Vision /></MemoryRouter>);
    const input = screen.getByLabelText('Upload Image');
    fireEvent.change(input, {
      target: { files: [new File(['pixels'], 'valid.png', { type: 'image/png' })] },
    });
    expect(screen.getByAltText('Preview').getAttribute('src')).toBe('blob:valid-image');
    fireEvent.change(input, {
      target: { files: [new File(['plain text'], 'invalid.txt', { type: 'text/plain' })] },
    });
    expect(screen.queryByAltText('Preview')).toBe(null);
    expect(screen.getByRole('alert').textContent).toMatch(/PNG, JPEG/);
    expect(URL.createObjectURL).toHaveBeenCalledTimes(1);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:valid-image');
  } finally {
    URL.createObjectURL = previousCreate;
    URL.revokeObjectURL = previousRevoke;
  }
});
