# useInput

A minimalist approach to input handling in React.

## Key Features

- ⚡ React 19 optimized
- 🧩 React Router compatible

## Example Usage
```jsx
function emailValidator(value) {
  return value.includes('@') ? null : 'Invalid email address';
}

function EmailField() {
  const { value, validate, error, clear } = useInput(emailValidator);

  return (
    <div>
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
      {error &&
        <span id="email-error" role="alert">{error}</span>
      }
    </div>
  );
}
```

## Why useInput?
While libraries like `react-hook-form` are excellent for complex forms, sometimes you dont need to `useForm`.
- Simple validation for a few fields
- Basic error handling
- Clean state management
- Accessibility-ready components


Cheers!
Szymon
