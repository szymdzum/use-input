import { renderHook, act } from '@testing-library/react';
import { useInput } from './useInput';
import { describe, it, expect } from 'vitest';

describe('useInput', () => {
  it('should handle input changes', () => {
    const { result } = renderHook(() => useInput({ initialValue: '' }));
    
    act(() => {
      result.current.onChange({ target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>);
    });
    
    expect(result.current.value).toBe('test');
  });
});