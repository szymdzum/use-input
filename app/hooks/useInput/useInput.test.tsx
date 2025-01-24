import { act, renderHook } from '@testing-library/react';
import type { ChangeEvent } from 'react';
import { describe, expect, it } from 'vitest';
import { useInput } from './useInput';

describe('useInput', () => {
  it('should handle input changes', () => {
    const { result } = renderHook(() => useInput({ initialValue: '' }));

    act(() => {
      result.current.onChange({
        target: { value: 'test' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('test');
  });
});