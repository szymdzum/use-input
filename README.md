# useInput

A minimalist approach to input handling in React. When you need just one input field managed properly without the overhead of full-form libraries - this is your solution.

## Key Features
- 🪶 Lightweight (under 2KB gzipped)
- 🎯 Single responsibility: Manage one input perfectly
- ⚡ React 19 optimized
- 🧩 Remix & React Router compatible
- Zero dependencies

## Example Usage
```jsx
import { useInput } from './app/hooks/useInputValue';

function emailValidator(value) {
  return value.includes('@') ? null : 'Invalid email address';
}

function EmailField() {
  const { value, validate, error, clear } = useInput(emailValidator);

  return (
    <div className="input-group">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={value}
        onChange={clear}
        onBlur={validate}
        aria-describedby="email-error"
      />
      {error && <span id="email-error" role="alert">{error}</span>}
    </div>
  );
}
```

## Why useInput?
While libraries like `react-hook-form` are excellent for complex forms, they bring unnecessary weight when you just need:
- Simple validation for a few fields
- Basic error handling
- Clean state management
- Accessibility-ready components

## Documentation
Full documentation available in [docs/](docs/):
- Project structure
- Development guidelines
- Changelog

## Contributing
1. Review [development guidelines](docs/guidelines/development-guidelines.md)
2. Update [changelog](docs/changelog/changelog.md) with changes
3. Submit PR with description of changes
