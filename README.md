# @datatr-ux/uxlib

`@datatr-ux/uxlib` is a library of prebuilt UI components themed using the [OVHcloud Design System](https://github.com/ovh/design-system). It leverages [shadcn components](https://ui.shadcn.com/docs) to provide a flexible and modern UI toolkit tailored for OVHcloud applications.

## Features

- **Themed Components**: All components follow the OVHcloud design guidelines, ensuring consistency across applications.
- **Based on shadcn UI**: Extensible and well-documented components inspired by shadcn.
- **Customizable**: Modify and extend components to fit your specific needs.
- **Storybook Integration**: Explore components interactively through our hosted Storybook.

## Documentation

- **Storybook**: Explore the components and their usage interactively in our Storybook:
  [https://datatr-ux.github.io/uxlib/](https://datatr-ux.github.io/uxlib/)

- **shadcn Components**: For detailed documentation of the base components:
  [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)

- **OVHcloud Design System**: Learn more about the design principles:
  [https://github.com/ovh/design-system](https://github.com/ovh/design-system)

## Installation

To use this library in your project, install it via npm:

```bash
npm install @datatr-ux/ods-tailwind-config @datatr-ux/uxlib
```

Or with Yarn:

```bash
yarn add @datatr-ux/ods-tailwind-config @datatr-ux/uxlib
```

Add the odsPlugin to your tailwind.config.mjs file:

```js
import odsPlugin from '@datatr-ux/ods-tailwind-config';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../../../node_modules/@datatr-ux/uxlib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: { // Extend the theme if you need
      colors: {
        // Override colors for ODS17 theme
        'primary-50': '#f5feff',
        heading: '#4d5693',
      },
      borderRadius: {
        // Override radiuses for ODS17 theme
        sm: '0.25rem',
        DEFAULT: '0.25rem',
        md: '0.5rem',
        lg: '0.5rem',
      },
    },
  },
  plugins: [odsPlugin],
};
```

Add the imports in your global css file:

```css
@import '@datatr-ux/ods-tailwind-config/style.css';
@import '@datatr-ux/uxlib/style.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 
* Override headers colors and heights
* to match ODS17
*/
h1, h2, h3, h4, h5 {
  @apply text-heading;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2.25rem;
  line-height: 2.8125rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  line-height: 1.75rem;
}
h5 {
  font-size: 1rem;
}
```

And import your css file in you main.tsx file:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ShellProvider,
  initShellContext,
} from '@ovh-ux/manager-react-shell-client';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ShellProvider client={context}>
        <LoadingIndicatorProvider>
          <App />
        </LoadingIndicatorProvider>
      </ShellProvider>
    </React.StrictMode>,
  );
```

## Usage

Import and use the components in your React application:

```tsx
import { Button } from "@datatr-ux/uxlib";

export default function App() {
  return <Button>Click me</Button>;
}
```

### Customization

Components are designed to be easily customizable. You can apply your own styles or extend the default ones to match your specific needs.

## Development

To contribute to the library or explore the components locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/datatr-ux/uxlib.git
   cd uxlib
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Storybook:

   ```bash
   npm run storybook
   ```

4. Open Storybook in your browser:
   `http://localhost:6006`

## Contributing

Contributions are welcome! Please submit issues or pull requests to help improve the library.

Before submitting a pull request:
- Follow the code style guidelines.
- Ensure all components are documented in Storybook.
- Verify compatibility with the OVHcloud design system.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or support, please contact the maintainers through the GitHub repository.

