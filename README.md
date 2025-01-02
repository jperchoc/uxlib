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
npm install @datatr-ux/uxlib
```

Or with Yarn:

```bash
yarn add @datatr-ux/uxlib
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

