# useAnotherFormHook (POC v0.07 alpha)

When working with forms in web applications, I often don’t need fully-fledged React form libraries. There’s no need to access a form context or even control inputs explicitly. Sometimes, all I need is a simple and lightweight way to manage a few inputs without dragging in a massive dependency.

To solve this, I created the yet another useInput hook. Designed with simplicity in mind, it manages the state, validation, and user interaction for a single input. It’s perfect for cases where you’re dealing with 3–4 inputs and want to avoid the overhead of a full form library.

### What Does `useInput` Do?

The hook attaches itself to an HTMLInputElement’s value and validates it on the blur (focus out) event using a provided validator function. If the criteria are met, it returns null; otherwise, it provides an error message.

Here’s an example:
```jsx
const Name = (props: InputProps) => {
// Validator
const validateName => (value: string): string | null  => {
  if (!/^[A-Za-z\s]+$/.test(value)) {
    return "Name can only contain letters"; // Sorry R2-D2 
  }
  return null;
}

const {
  value, // curent input value
  error, // current error message, null if no error exists
  validate, // validates value using the validator on blur
  clear, // updates the value and clears existing errors on change
} = useInput(validateName);

return (
  <div className={styles.field}>
    <Label />
    <input
      value={value}
      onBlur={validate}
      onChange={clear}
      className={`${error ? styles.error : ''}`}
    />
    <Message error={error} /> {/* Error message is displayed */}
  </div>
}
```

This hook provides all the tools you need to handle input state and validation logic seamlessly.

### Composition

When each input manages itself internally, it doesn’t need to be aware of its surroundings. This enables clean and elegant compositions, which was one of my primary goals. Its nice to look at.

```jsx
<Form>
  <Email />
  <Password />
  <Submit />
</Form>
```

### Web API Integration

Instead of relying on context or controlled inputs, let the Web API do what it does best: handle form submissions natively. As a wise man once said, “If it ain’t broke, don’t fix it." 

```html
<form action="POST">
  <input name="firstName" />
  <button type="submit">Send</button>
</form>
```
You can then access the form data on the action like this:

```js
const formData = await request.formData();
```

## ✨ Key Objectives

### Native Form Handling

Harness the power of Web APIs wherever possible. This library embraces web standards, ensuring forms are accessible, user-friendly, and dependency-light.

### Client & Server Validation

Validation should happen everywhere. Whether it’s the client or server, your data is getting a solid once-over.

### Minimal React Dependency

React is here to help—but only with the small stuff, like:
- Rendering error messages.
- Sprinkling on some UI enhancements.

React will NOT manage form state or submission logic. Web standards got this!

### Copy Paste

I'm on board with latest trend of just allowing code fragments to be CtrlC CtrlV into other projects. Take what you need, modify to your liking, 

### Preconfigured Inputs

Inputs should work out of the box. Default values? Pre-set attributes? Yes, please. Of course, you can tweak them all you want—just like the perfect pizza topping. 🍕

### Modern Tooling

This project is a playground for the coolest, shiniest toys:
-	React Router v7
- React 19
- Vanilla CSS (you can use Tailwind if you must)

## 🌟 Why Another Form Library?

Because sometimes, it’s not about solving a problem. Sometimes, it’s about chasing an idea that makes you smile. If you like forms that are simple, composable, and unapologetically biased toward looking good, might just be for you. Stay tuned!

Pull requests, ideas, and criticisms are welcome!
(It’s still a baby project.)

---

Cheers!
Szymon
