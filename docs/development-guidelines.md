# Development Guidelines

## Component Architecture

- Follow atomic design principles
- Use PascalCase for component names
- Prefer composition via children props
- Avoid redundant prop drilling

## Styling Standards

- Use CSS modules for styling
- Prefer global styles over component-specific styles
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
- Implementing Standarisation to Schema Validation.

```ts
/* https://github.com/standard-schema/standard-schema */
export interface StandardSchemaV1<Input = unknown, Output = Input> {
  /** The Standard Schema properties. */
  readonly "~standard": StandardSchemaV1.Props<Input, Output>;
}
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

## Biome

- Biome will automatically handle code formatting.

## Semantic HTML

- Use semantic HTML elements first.
- Use `title` attribute for all elements.
- Use `aria-label` for all elements.
- Use `aria-describedby` for all elements.
- Use `aria-hidden` for all elements.
- Use `aria-expanded` for all elements.
- Use `aria-haspopup` for all elements.
- Use `aria-controls` for all elements.
- Use `aria-selected` for all elements.
- Use `aria-sort` for all elements.
- Use `aria-live` for all elements.

# HTML Sectioning Implementation Guide

## 1. Core Sectioning Elements

### `<nav>`

- Use for major navigation blocks only
- Appropriate for:
  - Primary navigation
  - Secondary navigation
  - In-page navigation
  - Breadcrumbs
- Don't use for:
  - Pagination controls
  - Social links (unless they're primary navigation)
  - Tags/categories on blog posts
  - Fat footers

### `<aside>`

- For content tangentially related to main content
- Examples:
  - Sidebars
  - Pull quotes
  - Related article lists
- Best Practice: Avoid nesting `<aside>` elements

### `<article>`

- For self-contained content that makes sense independently
- Examples:
  - Blog posts
  - News articles
  - Comments
  - Widgets
  - Social media posts
- Think of it like a "Block" in BEM methodology

### `<section>`

- Generic sectioning element
- Use when other sectioning elements don't fit
- Must have a label (heading or ARIA)
- Think of it like an "Element" in BEM methodology

## 2. Labeling Sectioning Elements

### Method 1: aria-label

```html
<section aria-label="Section name">
  <p>Content</p>
</section>
```

Pros:

- Quick to implement
- Doesn't affect heading structure
- Easy component portability
- Invisible to sighted users

Cons:

- Limited translation support in some browsers
- Limited support in page structure tools

### Method 2: Heading Elements

```html
<section>
  <h2>Section name</h2>
  <p>Content</p>
</section>
```

Pros:

- Well-supported by analysis tools
- Good translation support
- Clear heading hierarchy

Cons:

- Affects document heading structure
- Requires proper heading level management
- Visible by default (needs CSS to hide)

### Method 3: aria-labelledby

```html
<section aria-labelledby="section-id">
  <div id="section-id" hidden>Section name</div>
  <p>Content</p>
</section>
```

Pros:

- Good translation support
- Can use existing elements as labels
- Label can be placed anywhere

Cons:

- Requires unique IDs
- More complex implementation
- Poor component portability

## 3. Best Practices

### Document Structure

1. Use semantic elements appropriately
2. Maintain logical heading hierarchy
3. Label all sectioning elements
4. Keep `<main>` content focused
5. Use `<header>` and `<footer>` appropriately

### Accessibility

1. Place headings at start of sections
2. Don't skip heading levels
3. Use unique labels for sections
4. Test with screen readers
5. Validate document outline

### Headers and Footers

- One `<header>` and one `<footer>` per section
- Headers contain:
  - Headings
  - Introductory content
  - Navigation
  - Search forms
  - Logos

## 4. Implementation Example

```html
<body>
  <header>
    <nav aria-label="Primary">
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h1>Main Content</h1>
      <section>
        <h2>Section Title</h2>
        <p>Content</p>
      </section>
    </article>
  </main>

  <aside aria-label="Related content">
    <section>
      <h2>Related Articles</h2>
      <ul>
        <li><a href="#">Article 1</a></li>
      </ul>
    </section>
  </aside>

  <footer>
    <nav aria-label="Footer">
      <ul>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </footer>
</body>
```

## 5. Testing and Validation

1. Use browser extensions like "Headings Map"
2. Test with screen readers (e.g., NVDA)
3. Validate document outline
4. Check heading hierarchy
5. Verify section labels

## 6. Common Pitfalls to Avoid

1. Don't replace `<div>` with `<section>` for styling
2. Don't nest `<aside>` elements
3. Don't skip heading levels
4. Don't duplicate navigation in nested `<nav>` elements
5. Don't use multiple labeling methods on the same section

Remember: The goal is to create a clear, logical document structure that enhances accessibility and maintainability while future-proofing your HTML.

Use links for navigation, buttons for actions
Ensure proper semantic markup
Provide clear visual feedback for all states
Make interactive elements adequately sized
Include proper ARIA attributes
Maintain keyboard accessibility
Use meaningful text/labels
Consider mobile/touch interactions
Test with assistive technologies
Follow progressive enhancement principles
