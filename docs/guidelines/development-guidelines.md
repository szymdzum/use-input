# Development Guidelines

## Component Architecture

- Follow atomic design principles
- Use PascalCase for component names (e.g., Input.Field)
- Prefer composition via children props
- Avoid redundant prop drilling

## Styling Standards

- Use REM units for spacing
- PX units for borders
- Semantic HTML elements first
- Natural HTML cascade over CSS specificity
- Avoid theme-specific styles in components

## TypeScript Practices

- Use `type` over `interface` for props
- Require accessibility attributes:
  ```tsx
  type InputProps = {
    "aria-describedby": string;
    "aria-required"?: boolean;
  };
  ```
- External validation functions pattern:
  ```ts
  const validateEmail = (value: string) =>
    /@/.test(value) ? null : "Invalid email";
  ```

## Accessibility Requirements

- Implement ARIA attributes for all interactive elements
- Manual screen reader testing required
- Focus management for form workflows
- ID generation pattern: `\${name}-\${purpose}` (e.g., "email-error")

## CSS Modules

- File naming: \*.module.css
- Functional class names (e.g., .input-error vs .red-text)
- Avoid semantic class names
- Prefer native HTML element styling

## Hook Development

- Single responsibility per hook
- Lightweight validation middleware
- Reusable state management patterns
- Type-safe return values

## Input Components

Required composition:

- Field (container)
- Label (accessible association)
- Control (input element)
- Error (validation feedback)

Optional:

- Description (contextual helper text)
- Validation middleware integration

## Changelog Process

- Mandatory entry for each merge request
- Follow reverse chronological order
- Include date, changes, affected files, and purpose
- Reference changelog.md in commit messages

## Testing

- Ensure all tests pass before pushing:

```sh
pnpm test
```

## Prettier

- Prettier will automatically handle code formatting.
