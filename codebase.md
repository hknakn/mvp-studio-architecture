# tsconfig.json

```json
{
  // This file is not used in compilation. It is here just for a nice editor experience.
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": "."
  }
}

```

# sidebars.ts

```ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Project Setup',
      items: ['tech-stack', 'architecture', 'file-and-folder-structure'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: ['navigation', 'state-management', 'data-handling'],
    },
    {
      type: 'category',
      label: 'UI and UX',
      items: ['elements', 'screens', 'theming', 'styling', 'animations'],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'authentication',
        'database',
        'push-notifications',
        'feature-flagging',
        'in-app-purchases',
        'internationalization',
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: ['testing', 'ci-cd', 'error-tracking', 'versioning', 'development-workflow'],
    },
    {
      type: 'category',
      label: 'Best Practices',
      items: ['security', 'storage',],
    },
  ],
};

export default sidebars;
```

# package.json

```json
{
  "name": "mvp-studio-architecture",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@docusaurus/core": "^3.5.2",
    "@docusaurus/preset-classic": "^3.5.2",
    "@docusaurus/theme-mermaid": "^3.5.2",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "3.5.2",
    "@docusaurus/tsconfig": "3.5.2",
    "@docusaurus/types": "3.5.2",
    "typescript": "~5.5.2"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  "engines": {
    "node": ">=18.0"
  }
}

```

# docusaurus.config.ts

```ts
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MVP Studio Boilerplate',
  tagline: 'Scalable and Efficient Mobile App Development',
  url: 'https://your-docusaurus-url.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'mvp-studio-architecture',

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MVP Studio Boilerplate',
      logo: {
        alt: 'MVP Studio Boilerplate Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} MVP Studio Boilerplate. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/your-org/mvp-studio-architecture/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } as Preset.Options,
    ],
  ],
};

export default config;
```

# babel.config.js

```js
module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};

```

# .aidigestignore

```
// This is a list of files that are not to be digested by the AI system.
// Mostly used for large files that are not useful for the AI system.
// Can be used like .gitignore


.gitignore
README.md

.docusaurus/
static/
blog/
docs/tutorial-basics
docs/tutorial-extras

```

# docs/versioning.md

```md
---
sidebar_position: 11
---

# Versioning

Proper versioning is crucial for managing your app's lifecycle, tracking changes, and ensuring smooth updates. Our boilerplate follows Semantic Versioning (SemVer) and includes tools to automate the versioning process.

## Semantic Versioning

We follow the Semantic Versioning specification (SemVer). Each version number is in the format of MAJOR.MINOR.PATCH:

- MAJOR version for incompatible API changes
- MINOR version for adding functionality in a backward-compatible manner
- PATCH version for backward-compatible bug fixes

## Version Management

We use `react-native-version` to manage versions across both iOS and Android projects:

\`\`\`json
{
  "scripts": {
    "version": "react-native-version"
  }
}
\`\`\`

To bump the version:

\`\`\`bash
npm version patch  # or minor, or major
\`\`\`

This will update the version in `package.json`, `android/app/build.gradle`, and `ios/YourApp/Info.plist`.

## Changelog

We maintain a `CHANGELOG.md` file to document changes between versions. Here's an example structure:

\`\`\`markdown
# Changelog

## [Unreleased]

### Added

- New feature X

### Changed

- Improved performance of Y

### Fixed

- Bug in component Z

## [1.1.0] - 2023-08-01

### Added

- Feature A
- Feature B

### Changed

- Updated dependency X to version Y

### Fixed

- Issue with screen W

## [1.0.0] - 2023-07-15

Initial release
\`\`\`

## Git Tags

We use Git tags to mark release points in our repository:

\`\`\`bash
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin v1.1.0
\`\`\`

## Release Process

1. Ensure all changes for the release are merged into the main branch.
2. Update the `CHANGELOG.md` file.
3. Run `npm version [patch|minor|major]` to bump the version.
4. Push the changes and the new tag to the remote repository.
5. Create a new release on GitHub, using the tag and the changelog entry.
6. Trigger the CI/CD pipeline to build and deploy the new version.

## Handling Breaking Changes

When introducing breaking changes:

1. Increment the MAJOR version.
2. Clearly document the breaking changes in the changelog.
3. If possible, provide migration guides for users updating from the previous version.
4. Consider maintaining a separate branch for the previous major version for critical bug fixes.

## Best Practices

1. Always update the changelog before releasing a new version.
2. Use git tags consistently for all releases.
3. Follow SemVer strictly to avoid surprising users with unexpected breaking changes.
4. Communicate significant changes and new features to users through release notes.
5. For pre-releases, use labels like alpha, beta, or rc (e.g., v1.0.0-alpha.1).

By following these versioning practices, you can effectively manage your app's lifecycle, communicate changes to users, and maintain a clear history of your project's evolution.

```

# docs/ui-and-styling.md

```md
---
sidebar_position: 13
---

# UI and Styling

Our boilerplate uses a combination of custom components inspired by React Native Elements and React Native Unistyles for a consistent and easily customizable UI.

## Custom UI Components

We've created a set of custom components based on React Native Elements, which provide a solid foundation for building your app's UI:

\`\`\`typescript
import { Button, Card, Input } from "@/components/ui";

function MyScreen() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button title="Submit" onPress={() => {}} />
    </Card>
  );
}
\`\`\`

These components are designed to be consistent with your app's theme and can be easily customized.

## Theming with Unistyles

We use React Native Unistyles for theming and styling. This allows for easy customization and consistent styling across the app.

### Theme Configuration

The theme is defined in `src/styles/theme.ts`:

\`\`\`typescript
import { createTheme } from "react-native-unistyles";

export const theme = createTheme({
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    background: "#FFFFFF",
    text: "#000000",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  // Add more theme properties as needed
});
\`\`\`

### Using the Theme

You can access the theme in your components:

\`\`\`typescript
import { useStyles } from "react-native-unistyles";

function MyComponent() {
  const { theme } = useStyles();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Hello, World!</Text>
    </View>
  );
}
\`\`\`

### Creating Stylesheets

Use the `createStylesheet` function to create type-safe stylesheets:

\`\`\`typescript
import { createStylesheet } from "react-native-unistyles";

const useStyles = createStylesheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
  },
}));

function MyComponent() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled text</Text>
    </View>
  );
}
\`\`\`

## Best Practices

1. Use the provided custom UI components whenever possible to maintain consistency.
2. Leverage the theme for colors, spacing, and other design tokens instead of hardcoding values.
3. Create reusable stylesheets for components that are used frequently.
4. Use the `responsiveSize` utility for creating responsive layouts.

By using this combination of custom UI components and Unistyles, our boilerplate provides a flexible and maintainable approach to styling your React Native app.

```

# docs/theming.md

```md
---
sidebar_position: 3
---

# Theming

Our boilerplate uses a robust theming system to ensure consistent visual design across the app while allowing for easy customization and the implementation of features like dark mode.

## Theme Structure

The theme is defined in `src/styles/theme.ts` and includes properties such as:

- Colors
- Typography
- Spacing
- Border radius
- Shadows

Here's an example of our theme structure:

\`\`\`typescript
import { createTheme } from "react-native-unistyles";

export const theme = createTheme({
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    background: "#FFFFFF",
    text: "#000000",
    // ... other colors
  },
  typography: {
    fontFamily: "System",
    fontSize: {
      small: 12,
      medium: 16,
      large: 20,
      // ... other sizes
    },
    fontWeight: {
      regular: "400",
      bold: "700",
      // ... other weights
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
  shadows: {
    small: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    // ... other shadow definitions
  },
});
\`\`\`

## Using the Theme

You can access the theme in your components using the `useStyles` hook:

\`\`\`typescript
import { useStyles } from "react-native-unistyles";

function MyComponent() {
  const { theme } = useStyles();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.typography.fontSize.medium,
        }}
      >
        Hello, World!
      </Text>
    </View>
  );
}
\`\`\`

## Dark Mode

Our theming system supports dark mode out of the box. To implement dark mode:

1. Define dark mode colors in your theme:

\`\`\`typescript
const theme = createTheme({
  colors: {
    light: {
      background: "#FFFFFF",
      text: "#000000",
      // ... other light mode colors
    },
    dark: {
      background: "#000000",
      text: "#FFFFFF",
      // ... other dark mode colors
    },
  },
  // ... rest of the theme
});
\`\`\`

2. Use the `useColorScheme` hook to detect the user's preference:

\`\`\`typescript
import { useColorScheme } from "react-native";
import { useStyles } from "react-native-unistyles";

function MyComponent() {
  const colorScheme = useColorScheme();
  const { theme } = useStyles();

  const backgroundColor =
    colorScheme === "dark"
      ? theme.colors.dark.background
      : theme.colors.light.background;
  const textColor =
    colorScheme === "dark" ? theme.colors.dark.text : theme.colors.light.text;

  return (
    <View style={{ backgroundColor }}>
      <Text style={{ color: textColor }}>Hello, World!</Text>
    </View>
  );
}
\`\`\`

## Customizing the Theme

To customize the theme for your specific app:

1. Create a new file, e.g., `src/styles/customTheme.ts`
2. Import the base theme and extend it with your custom values:

\`\`\`typescript
import { theme as baseTheme } from "./theme";

export const customTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "#FF0000", // Custom primary color
  },
  // Add or override other theme properties as needed
};
\`\`\`

3. Use the custom theme in your app's root component:

\`\`\`typescript
import { ThemeProvider } from "react-native-unistyles";
import { customTheme } from "./styles/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
\`\`\`

By leveraging this theming system, you can ensure a consistent look and feel across your app while maintaining the flexibility to easily customize and adapt the design as needed.

```

# docs/testing.md

```md
---
sidebar_position: 7
---

# Testing

Our boilerplate comes with a robust testing setup to ensure code quality and reliability. We use Jest as our test runner, React Native Testing Library for component testing, and Detox for end-to-end testing.

## Unit Testing with Jest

Jest is configured to run unit tests for your JavaScript/TypeScript code.

### Running Tests

To run all tests:

\`\`\`bash
npm run test
\`\`\`

To run tests in watch mode:

\`\`\`bash
npm run test:watch
\`\`\`

### Writing Unit Tests

Here's an example of a unit test for a utility function:

\`\`\`typescript
// src/utils/math.ts
export const add = (a: number, b: number) => a + b;

// src/utils/__tests__/math.test.ts
import { add } from "../math";

describe("Math utils", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });
});
\`\`\`

## Component Testing with React Native Testing Library

We use React Native Testing Library to test React components in a way that resembles how users interact with your app.

### Writing Component Tests

Here's an example of a component test:

\`\`\`typescript
// src/components/Button.tsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

// src/components/__tests__/Button.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../Button";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Button title="Press me" onPress={() => {}} />
    );
    expect(getByText("Press me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button title="Press me" onPress={onPress} />);
    fireEvent.press(getByText("Press me"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
\`\`\`

## End-to-End Testing with Detox

Detox is used for writing and running end-to-end tests on actual devices or simulators.

### Setting Up Detox

Detox is pre-configured in the boilerplate. To run Detox tests:

1. Build the app for testing:

   \`\`\`bash
   detox build --configuration ios.sim.debug
   \`\`\`

2. Run the tests:
   \`\`\`bash
   detox test --configuration ios.sim.debug
   \`\`\`

### Writing E2E Tests

Here's an example of a Detox test:

\`\`\`typescript
// e2e/firstTest.e2e.js
describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.text("Welcome"))).toBeVisible();
  });

  it("should show hello screen after tap", async () => {
    await element(by.text("Hello")).tap();
    await expect(element(by.text("Hello!!!"))).toBeVisible();
  });
});
\`\`\`

## Best Practices

1. Aim for high test coverage, especially for critical business logic.
2. Write tests that are resilient to implementation changes.
3. Use snapshots sparingly and review them carefully on each change.
4. Mock external dependencies and API calls in unit and component tests.
5. Use data-testid attributes for selecting elements in component tests.
6. Keep end-to-end tests focused on critical user flows.
7. Run tests as part of your CI/CD pipeline.

By following these testing practices, you can ensure that your app remains stable and reliable as it grows and evolves.

```

# docs/tech-stack.md

```md
---
sidebar_position: 2
---

# Tech Stack

Our MVP Studio Boilerplate utilizes a carefully selected tech stack for efficient and scalable mobile app development. Here's an overview of our key technologies:

## React Native

- Used for cross-platform mobile app development
- Allows writing code once for both iOS and Android
- Chosen for its efficiency and large community support
- [**Documentation**](https://reactnative.dev/docs/getting-started)

## Expo

- Simplifies React Native development process
- Provides tools for building, deploying, and iterating on apps
- Selected to speed up development and simplify the build process
- [**Documentation**](https://docs.expo.dev/)

## TypeScript

- Adds static typing to JavaScript
- Enhances code quality, readability, and maintainability
- Catches potential bugs at compile-time
- [**Documentation**](https://www.typescriptlang.org/docs/)

## Redux Toolkit

- Simplifies Redux setup and usage
- Provides utilities for efficient Redux development
- Chosen for its opinionated approach to reduce boilerplate code
- [**Documentation**](https://redux-toolkit.js.org/introduction/getting-started)

## RTK Query

- Efficient data fetching and caching tool
- Simplifies API interactions and state management
- Integrated with Redux for a seamless data flow
- [**Documentation**](https://redux-toolkit.js.org/rtk-query/overview)

## React Navigation

- Handles in-app navigation
- Supports various navigation patterns (stack, tab, drawer)
- Provides a customizable and performant navigation solution
- [**Documentation**](https://reactnavigation.org/docs/getting-started)

## Firebase

- Used for various backend services:
  - **Authentication**: Manages user sign-up and login
  - **Real-time database**: Stores and syncs data in real-time
  - **Cloud functions**: Runs backend code in response to events
  - **Push notifications**: Sends targeted messages to users
  - **Remote config**: Modifies app behavior without deploying updates
- [**Documentation**](https://rnfirebase.io/)

## Jest & Detox

- Jest: JavaScript testing framework for unit and integration tests
- Detox: End-to-end testing framework for mobile apps
- Ensures code reliability and facilitates test-driven development
- [**Jest Documentation**](https://jestjs.io/docs/getting-started)
- [**Detox Documentation**](https://wix.github.io/Detox/docs/introduction/getting-started/)

## GitHub Actions

- Automates CI/CD processes
- Ensures consistent builds and deployments
- Improves team productivity and code quality
- [**Documentation**](https://docs.github.com/en/actions)

## Sentry

- Provides real-time error tracking
- Offers performance monitoring
- Helps identify and fix issues quickly in production
- [**Documentation**](https://docs.sentry.io/platforms/react-native/)

## i18n & Expo Localization

- Enables app internationalization
- Supports multiple languages and locales
- Improves app accessibility for global users
- [**i18n Documentation**](https://www.i18next.com/overview/getting-started)
- [**Expo Localization Documentation**](https://docs.expo.dev/versions/latest/sdk/localization/)

## RevenueCat

- Manages in-app purchases and subscriptions
- Simplifies monetization across platforms
- Provides analytics and insights for subscription businesses
- [**Documentation**](https://docs.revenuecat.com/docs)

## Unistyles

- Provides a theming solution for React Native apps
- Supports light and dark themes
- Simplifies theming setup and customization
- [**Documentation**](https://reactnativeunistyles.vercel.app/start/introduction/)

## Husky

- Implements Git hooks
- Improves code quality and commit consistency
- Automates pre-commit and pre-push checks
- [**Documentation**](https://typicode.github.io/husky/#/)

```

# docs/styling.md

```md
---
sidebar_position: 4
---

# Styling

Our boilerplate uses React Native Unistyles for styling, which provides a powerful and flexible way to style your components while maintaining type safety and enabling easy theming.

## Basic Usage

To create styles for a component:

\`\`\`typescript
import { createStyleSheet, useStyles } from "react-native-unistyles";

const useStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.medium,
    fontWeight: theme.typography.fontWeight.regular,
  },
}));

function MyComponent() {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
}
\`\`\`

## Responsive Styles

Unistyles provides a way to create responsive styles based on the device's screen size:

\`\`\`typescript
import { createStyleSheet, useStyles } from "react-native-unistyles";

const useStyles = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: {
      xs: theme.spacing.sm,
      md: theme.spacing.md,
      lg: theme.spacing.lg,
    },
  },
  text: {
    fontSize: {
      xs: theme.typography.fontSize.small,
      md: theme.typography.fontSize.medium,
      lg: theme.typography.fontSize.large,
    },
  },
}));
\`\`\`

## Dynamic Styles

You can create dynamic styles based on props or state:

\`\`\`typescript
const useStyles = createStyleSheet((theme) => ({
  button: (isActive: boolean) => ({
    backgroundColor: isActive ? theme.colors.primary : theme.colors.secondary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.medium,
  }),
}));

function MyButton({ isActive, onPress, title }) {
  const { styles } = useStyles();

  return (
    <TouchableOpacity style={styles.button(isActive)} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
\`\`\`

## Extending Styles

You can extend existing styles to create new variations:

\`\`\`typescript
const baseStyles = createStyleSheet((theme) => ({
  text: {
    fontSize: theme.typography.fontSize.medium,
    color: theme.colors.text,
  },
}));

const extendedStyles = createStyleSheet((theme) => ({
  highlightedText: {
    ...baseStyles.text,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
}));
\`\`\`

## Best Practices

1. Use the theme values for colors, spacing, and typography to maintain consistency.
2. Create reusable style objects for common patterns in your app.
3. Utilize responsive styles to ensure your app looks good on different screen sizes.
4. Keep your style definitions close to the components that use them for better organization.
5. Use dynamic styles for interactive elements that change appearance based on state.

By following these practices and leveraging React Native Unistyles, you can create a maintainable and consistent styling system for your app that's easy to customize and extend.

```

# docs/storage.md

```md
---
sidebar_position: 14
---

# Data Storage

Our boilerplate uses React Native MMKV for efficient local data storage. MMKV provides a significant performance boost over AsyncStorage, making it ideal for storing app settings, user preferences, and other local data.

## Benefits of MMKV in Our Boilerplate

1. **Performance**: MMKV is much faster than AsyncStorage, especially for large datasets.
2. **Type Safety**: Our implementation provides type-safe storage operations.
3. **Encryption**: MMKV supports data encryption out of the box.

## Using MMKV Storage

We've created a `StorageService` that wraps MMKV functionality:

\`\`\`typescript
import { StorageService } from "@/services/StorageService";

// Store a value
StorageService.set("user_id", "12345");

// Retrieve a value
const userId = StorageService.get("user_id");

// Store an object
StorageService.setObject("user_preferences", {
  theme: "dark",
  notifications: true,
});

// Retrieve an object
const preferences = StorageService.getObject("user_preferences");

// Remove a value
StorageService.remove("user_id");
\`\`\`

## Typed Storage Hooks

For even better type safety and ease of use, we've created typed storage hooks:

\`\`\`typescript
import { createTypedStorageHooks } from "@/utils/storage";

interface UserPreferences {
  theme: "light" | "dark";
  notifications: boolean;
}

const { useStorageItem, useStorageObject } = createTypedStorageHooks<{
  userId: string;
  preferences: UserPreferences;
}>();

function MyComponent() {
  const [userId, setUserId] = useStorageItem("userId");
  const [preferences, setPreferences] = useStorageObject("preferences");

  // Use userId and preferences in your component
  // setUserId and setPreferences will automatically update storage
}
\`\`\`

## Best Practices

1. Use the `StorageService` for simple key-value storage operations.
2. Leverage typed storage hooks for complex objects and better type safety.
3. Don't store sensitive information (like passwords) without encryption.
4. Use MMKV for local app data, but rely on a backend database for data that needs to be synced across devices.

By using React Native MMKV through our `StorageService` and typed hooks, you can efficiently manage local data in your app while maintaining type safety and good performance.

```

# docs/state-management.md

```md
---
sidebar_position: 2
---

# State Management

Our boilerplate uses Redux Toolkit for efficient state management, combined with RTK Query for API calls and caching, and Redux Persist for state persistence. This setup provides a powerful and flexible way to manage your app's state and handle data fetching.

## Redux Toolkit Setup

Redux Toolkit is configured in `src/store/index.ts`:

\`\`\`typescript
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "@/services/api";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "user"], // Persist only these reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
\`\`\`

## Redux Toolkit Slices

We use Redux Toolkit's `createSlice` to define our reducers and actions:

\`\`\`typescript
// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
\`\`\`

## RTK Query Setup

RTK Query is configured in `src/services/api.ts`:

\`\`\`typescript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.example.com",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } =
  api;
\`\`\`

## Using Redux and RTK Query in Components

We've included custom hooks for easy access to the Redux store and RTK Query:

\`\`\`typescript
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { setToken } from "@/store/slices/authSlice";
import { useGetUsersQuery, useCreateUserMutation } from "@/services/api";

function UserComponent() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();

  const handleLogin = async () => {
    // Perform login logic
    const token = "example_token";
    dispatch(setToken(token));
  };

  const handleCreateUser = async () => {
    try {
      await createUser({ name: "New User" });
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  if (!isAuthenticated) {
    return <LoginButton onPress={handleLogin} />;
  }

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <View>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      <Button title="Add User" onPress={handleCreateUser} />
    </View>
  );
}
\`\`\`

## Best Practices

1. Use Redux Toolkit's `createSlice` for all your reducers to minimize boilerplate.
2. Leverage RTK Query for all API calls to benefit from automatic caching and refetching.
3. Use the `useAppSelector` and `useAppDispatch` hooks for type-safe Redux usage.
4. Implement proper error handling and loading states in your components when using RTK Query.
5. Use Redux Persist thoughtfully, only persisting necessary state to avoid performance issues.
6. Utilize Redux Toolkit's `createAsyncThunk` for complex async logic that doesn't fit into RTK Query.
7. Use the Redux DevTools for debugging (already configured in the boilerplate).

By following these patterns and leveraging the pre-configured Redux Toolkit and RTK Query setup, you can efficiently manage your app's state and API interactions while keeping your codebase clean and maintainable.

```

# docs/security.md

```md
---
sidebar_position: 10
---

# Security

Security is a critical aspect of mobile app development. We need to ensure that our app protects user data, prevents unauthorized access, and follows best practices for secure communication and storage.

## Secure Storage

Sensitive data, such as user credentials, access tokens, and personal information, should be stored securely on the device. We can use libraries like `react-native-keychain` or `react-native-secure-storage` to store data in a secure manner.

Here's an example of how to store and retrieve data using `react-native-keychain`:

\`\`\`typescript
import * as Keychain from "react-native-keychain";

// Store data securely
await Keychain.setGenericPassword("username", "password");

// Retrieve data
const credentials = await Keychain.getGenericPassword();
if (credentials) {
  console.log("Username:", credentials.username);
  console.log("Password:", credentials.password);
} else {
  console.log("No credentials stored");
}
\`\`\`

In this example, we use `Keychain.setGenericPassword()` to securely store a username and password. We can retrieve the stored credentials using `Keychain.getGenericPassword()`.

## Authentication and Authorization

To protect sensitive parts of our app and ensure that only authorized users can access them, we need to implement authentication and authorization mechanisms.

We can use services like Firebase Authentication or Auth0 to handle user authentication. These services provide secure user registration, login, and token-based authentication.

Here's an example of how to authenticate a user using Firebase Authentication:

\`\`\`typescript
import firebase from "firebase/app";
import "firebase/auth";

// Login with email and password
const handleLogin = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("User logged in successfully");
  } catch (error) {
    console.error("Login error:", error);
  }
};
\`\`\`

In this example, we use Firebase Authentication's `signInWithEmailAndPassword()` method to authenticate a user with their email and password.

For authorization, we can use role-based access control (RBAC) or attribute-based access control (ABAC) to define and enforce access policies based on user roles or attributes.

## Secure Communication

When communicating with backend servers or external APIs, it's crucial to use secure communication protocols like HTTPS. HTTPS encrypts the data transmitted between the app and the server, preventing eavesdropping and tampering.

We should also validate and sanitize any user input to prevent attacks like SQL injection or cross-site scripting (XSS).

## Code Obfuscation

To protect our app's source code from reverse engineering and tampering, we can apply code obfuscation techniques. Obfuscation makes the code harder to understand and modify by renaming variables, classes, and methods, and by adding dummy code.

We can use tools like ProGuard (for Android) or iXGuard (for iOS) to automatically obfuscate our app's code during the build process.

## Regular Security Audits

Regularly conducting security audits helps identify and address potential vulnerabilities in our app. We should perform security testing, code reviews, and penetration testing to uncover and fix any security issues.

It's also important to keep our dependencies up to date and promptly address any security patches or updates released by the libraries and frameworks we use.

By implementing secure storage, authentication, authorization, secure communication, code obfuscation, and conducting regular security audits, we can enhance the security of our mobile app and protect our users' data and privacy.

```

# docs/screens.md

```md
---
sidebar_position: 2
---

# Screens

Our boilerplate comes with several prebuilt screens to accelerate your development process. These screens are designed to be customizable and can be easily integrated into your app's flow. Here's an overview of the available prebuilt screens:

## Authentication Screens

### Login Screen

A fully functional login screen with email and password fields, social login options, and "Forgot Password" link.

\`\`\`jsx
import { LoginScreen } from "@/screens/auth/LoginScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
}
\`\`\`

### Signup Screen

A comprehensive signup screen with fields for name, email, password, and terms acceptance.

\`\`\`jsx
import { SignupScreen } from "@/screens/auth/SignupScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Signup" component={SignupScreen} />
    </Navigator>
  );
}
\`\`\`

## Checkout Screen

A customizable checkout screen with support for multiple payment methods, shipping address input, and order summary.

\`\`\`jsx
import { CheckoutScreen } from "@/screens/commerce/CheckoutScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Checkout" component={CheckoutScreen} />
    </Navigator>
  );
}
\`\`\`

## Profile Screen

A user profile screen with editable fields, profile picture upload, and account settings.

\`\`\`jsx
import { ProfileScreen } from "@/screens/user/ProfileScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
}
\`\`\`

## Settings Screen

A comprehensive settings screen with options for notifications, privacy, theme selection, and more.

\`\`\`jsx
import { SettingsScreen } from "@/screens/user/SettingsScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}
\`\`\`

## Messaging Screen

A messaging screen with a chat interface, message input, and support for media attachments.

\`\`\`jsx
import { MessagingScreen } from "@/screens/communication/MessagingScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Messaging" component={MessagingScreen} />
    </Navigator>
  );
}
\`\`\`

## Onboarding Screens

A set of onboarding screens to introduce users to your app's key features.

\`\`\`jsx
import { OnboardingScreens } from "@/screens/onboarding/OnboardingScreens";

function App() {
  return (
    <Navigator>
      <Screen name="Onboarding" component={OnboardingScreens} />
    </Navigator>
  );
}
\`\`\`

## Customizing Prebuilt Screens

All prebuilt screens are designed to be easily customizable. You can modify the appearance and behavior of these screens by passing props or overriding default styles.

Example of customizing the LoginScreen:

\`\`\`jsx
import { LoginScreen } from "@/screens/auth/LoginScreen";

function CustomLoginScreen() {
  return (
    <LoginScreen
      logoSource={require("./assets/logo.png")}
      primaryColor="#FF5722"
      onLogin={handleLogin}
      socialLoginProviders={["google", "apple"]}
    />
  );
}
\`\`\`

## Creating New Screens

While these prebuilt screens cover many common use cases, you can easily create new screens or modify existing ones to fit your specific needs. Use the provided screens as references for structure and best practices when creating your own custom screens.

By leveraging these prebuilt screens, you can significantly speed up your development process and ensure a consistent user experience across your app. Feel free to customize and extend these screens to match your app's unique requirements and branding.

```

# docs/push-notifications.md

```md
---
sidebar_position: 3
---

# Push Notifications

Our boilerplate includes Firebase Cloud Messaging (FCM) for handling push notifications. This allows you to send targeted notifications to your app users.

## Usage

Here's how to handle push notifications in your app:

\`\`\`typescript
import messaging from "@react-native-firebase/messaging";

// Request permission (iOS)
const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
};

// Get FCM token
const getFCMToken = async () => {
  const token = await messaging().getToken();
  console.log("FCM Token:", token);
  // Send this token to your server to target this device for notifications
};

// Handle incoming messages
messaging().onMessage(async (remoteMessage) => {
  console.log("A new FCM message arrived!", JSON.stringify(remoteMessage));
  // Handle the message (e.g., show a local notification)
});

// Handle notification opened app
messaging().onNotificationOpenedApp((remoteMessage) => {
  console.log(
    "Notification caused app to open from background state:",
    JSON.stringify(remoteMessage)
  );
  // Navigate to appropriate screen based on the notification
});
\`\`\`

## Best Practices

1. Always request user permission before sending notifications (especially on iOS).
2. Handle both foreground and background notifications appropriately.
3. Use notification channels on Android for better user control.
4. Implement proper deep linking to navigate users to the right screen when a notification is tapped.

```

# docs/navigation.md

```md
---
sidebar_position: 1
---

# Navigation

Our boilerplate uses React Navigation to handle navigation flows and provide a seamless navigation experience. The navigation structure is pre-configured to support common app layouts and can be easily customized to fit your specific needs.

## Navigation Structure

The navigation in our boilerplate is structured as follows:

1. Root Navigator (Stack Navigator)
   - Auth Navigator (Stack Navigator)
     - Login Screen
     - Sign Up Screen
     - Forgot Password Screen
   - Main Navigator (Bottom Tab Navigator)
     - Home Stack (Stack Navigator)
       - Home Screen
       - Detail Screen
     - Profile Stack (Stack Navigator)
       - Profile Screen
       - Settings Screen
   - Modal Stack (Stack Navigator)
     - Various modal screens

## Usage

Here's how you can use the pre-configured navigation in your app:

\`\`\`typescript
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "@/navigation/RootNavigator";
import { linking } from "@/navigation/linking";

function App() {
  return (
    <NavigationContainer linking={linking}>
      <RootNavigator />
    </NavigationContainer>
  );
}
\`\`\`

## Deep Linking

Deep linking is pre-configured in the boilerplate. The configuration is in `src/navigation/linking.ts`:

\`\`\`typescript
export const linking = {
  prefixes: ["myapp://", "https://myapp.com"],
  config: {
    screens: {
      Home: "home",
      Profile: "user/:id",
      NotFound: "*",
    },
  },
};
\`\`\`

To handle deep links:

1. Update the `linking` configuration in `src/navigation/linking.ts`.
2. Handle the deep link in the appropriate screen component using `useRoute` hook.

\`\`\`typescript
import { useRoute } from "@react-navigation/native";

function ProfileScreen() {
  const route = useRoute();
  const { id } = route.params;

  // Use the id to fetch user data
}
\`\`\`

## Routing

Routing is handled automatically by React Navigation based on the navigator structure. To navigate between screens:

\`\`\`typescript
import { useNavigation } from "@react-navigation/native";

function MyComponent() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Profile", { id: "123" });
  };

  return <Button title="Go to Profile" onPress={handlePress} />;
}
\`\`\`

## Navigation Guards

Navigation guards are implemented using custom navigators that wrap the built-in React Navigation navigators. Here's an example of an authenticated navigator:

\`\`\`typescript
// src/navigation/AuthenticatedNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LoginScreen from "@/screens/LoginScreen";
import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

export function AuthenticatedNavigator() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
\`\`\`

This navigator checks the authentication state and renders either the main app screens or the login screen accordingly.

## Custom Navigation Hooks

We've included several custom navigation hooks to make common navigation tasks easier:

\`\`\`typescript
import { useAppNavigation } from "@/hooks/useAppNavigation";

function MyComponent() {
  const { navigateToHome, navigateToProfile, openModal } = useAppNavigation();

  return (
    <>
      <Button title="Go to Home" onPress={() => navigateToHome()} />
      <Button title="Go to Profile" onPress={() => navigateToProfile()} />
      <Button title="Open Modal" onPress={() => openModal("ModalName")} />
    </>
  );
}
\`\`\`

## Best Practices

1. Use typed navigation props for type-safe navigation.
2. Implement proper authentication flows using navigation guards.
3. Use screen options for consistent header styling across the app.
4. Leverage React Navigation's built-in transitions for smooth navigation experiences.
5. Handle deep links appropriately to provide a seamless user experience.
6. Use the linking configuration to define clear and consistent deep link structures.

By using this pre-configured navigation setup, you can quickly build complex navigation flows while maintaining a clean and organized codebase, handle deep links effectively, and implement robust navigation guards for your app's security.

```

# docs/intro.md

```md
---
sidebar_position: 1
---

# Introduction

Welcome to the Architecture Design Document for our mobile app studio's template/boilerplate project. This document outlines the architecture, tech stack, and best practices we will follow to ensure scalability, maintainability, and efficiency in our mobile app development process.

Throughout this document, we will cover various aspects of the architecture, including:

- Tech Stack
- Architecture Overview
- Navigation
- State Management
- Data Handling
- Testing
- CI/CD
- Internationalization
- Security
- Versioning

By following the guidelines and decisions outlined in this document, we aim to streamline our development process, maintain high code quality, and deliver exceptional mobile applications.

```

# docs/internationalization.md

```md
---
sidebar_position: 6
---

# Internationalization

Our boilerplate comes pre-configured with internationalization (i18n) support using the `i18n-js` library and `react-native-localize`. This setup allows you to easily create a multi-language app and adapt to different locales.

## Why Use Internationalization?

1. **Reach a global audience**: Support multiple languages to make your app accessible to users worldwide.
2. **Improve user experience**: Provide content in the user's preferred language.
3. **Easier maintenance**: Centralize all translatable content, making it easier to update and manage.

## How It Works

The internationalization system in our boilerplate works as follows:

1. Translations are stored in JSON files (one for each supported language).
2. The app detects the user's preferred language using `react-native-localize`.
3. The appropriate translation file is loaded and used throughout the app.

## Usage

Here's how to use internationalization in your components:

\`\`\`typescript
import i18n from "@/localization/i18n";

function MyComponent() {
  return (
    <View>
      <Text>{i18n.t("welcome")}</Text>
      <Text>{i18n.t("greeting", { name: "John" })}</Text>
    </View>
  );
}
\`\`\`

## Adding New Translations

To add a new language:

1. Create a new JSON file in the `src/localization/translations` folder (e.g., `fr.json` for French).
2. Add your translations to this file:

\`\`\`json
{
  "welcome": "Bienvenue dans notre application !",
  "greeting": "Bonjour, {{name}} !"
}
\`\`\`

3. Update the `src/localization/i18n.ts` file to include the new language:

\`\`\`typescript
import en from "./translations/en.json";
import fr from "./translations/fr.json";

i18n.translations = { en, fr };
\`\`\`

## Changing the Language

To change the app's language programmatically:

\`\`\`typescript
import i18n from "@/localization/i18n";

function changeLanguage(languageCode: string) {
  i18n.locale = languageCode;
}
\`\`\`

## Best Practices

1. Use placeholders for dynamic content (e.g., `{{name}}`) instead of string concatenation.
2. Keep translation keys descriptive and organized.
3. Consider using a translation management system for larger projects.
4. Test your app thoroughly in all supported languages.

```

# docs/in-app-purchases.md

```md
---
sidebar_position: 12
---

# In-App Purchases and Subscriptions

Our boilerplate integrates RevenueCat to handle in-app purchases and subscriptions, providing a robust and easy-to-use system for monetization.

## Benefits of RevenueCat in Our Boilerplate

1. **Cross-platform consistency**: RevenueCat provides a unified API for both iOS and Android, simplifying our codebase.
2. **Subscription management**: Easily handle complex subscription logic, including upgrades, downgrades, and renewals.
3. **Analytics and insights**: Get detailed reports on revenue, churn, and other key metrics out of the box.
4. **Server-side receipt validation**: Improve security and reduce fraud without additional backend work.

## Using In-App Purchases

We've set up a `PurchaseManager` module that encapsulates RevenueCat functionality:

\`\`\`typescript
import { PurchaseManager } from "@/services/PurchaseManager";

// Check if a user has an active subscription
const hasSubscription = await PurchaseManager.hasActiveSubscription();

// Get available products
const products = await PurchaseManager.getProducts();

// Make a purchase
try {
  await PurchaseManager.purchaseProduct("premium_monthly");
  // Handle successful purchase
} catch (error) {
  // Handle purchase error
}
\`\`\`

## Implementing a Paywall

We've created a reusable `Paywall` component that you can easily customize:

\`\`\`typescript
import { Paywall } from "@/components/Paywall";

function MyScreen() {
  return (
    <View>
      <Text>Upgrade to Premium!</Text>
      <Paywall
        products={["monthly", "yearly"]}
        onPurchase={(productId) => {
          // Handle successful purchase
        }}
      />
    </View>
  );
}
\`\`\`

## Best Practices

1. Always verify the subscription status on the server-side before granting access to premium features.
2. Use the `PurchaseManager.restorePurchases()` method to handle restore purchases requests from users.
3. Implement proper error handling for purchase failures and network issues.

By leveraging RevenueCat in our boilerplate, we provide a solid foundation for implementing in-app purchases and subscriptions, allowing you to focus on creating value for your users rather than dealing with complex purchase logic.

```

# docs/file-and-folder-structure.md

```md
---
sidebar_position: 16
---

# File and Folder Structure

Our boilerplate follows a carefully designed folder structure to ensure scalability, maintainability, and ease of navigation. This document outlines the structure and explains the reasoning behind our decisions.

## Root Structure

\`\`\`
/
├── src/
├── __tests__/
├── android/
├── ios/
├── .github/
├── .husky/
├── .vscode/
├── assets/
├── App.tsx
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

- `src/`: Contains the main source code of the application.
- `__tests__/`: Houses all test files.
- `android/` and `ios/`: Native code for respective platforms.
- `.github/`: GitHub-specific files, including CI/CD workflows.
- `.husky/`: Git hooks for maintaining code quality.
- `.vscode/`: VS Code configuration for consistent developer experience.
- `assets/`: Static assets like images and fonts.
- `App.tsx`: The root component of the React Native app.
- Configuration files: `app.json`, `babel.config.js`, `metro.config.js`, `tsconfig.json`.

## Source Directory Structure

The `src/` directory is organized as follows:

\`\`\`
src/
├── components/
│   ├── ui/
│   └── animations/
├── screens/
├── navigation/
├── services/
├── hooks/
├── utils/
├── store/
├── styles/
└── types/
\`\`\`

### Components (`src/components/`)

Contains reusable React components.

- `ui/`: Basic UI components like buttons, inputs, cards.
- `animations/`: Reusable animated components.

**Decision**: Separating UI and animation components allows for better organization and makes it easier to maintain and update the design system.

### Screens (`src/screens/`)

Contains components that represent entire screens in the app.

**Decision**: Keeping screens separate from components helps in quickly identifying the main views of the app and their corresponding routes.

### Navigation (`src/navigation/`)

Houses navigation-related files, including route definitions and navigation utilities.

**Decision**: Centralizing navigation logic makes it easier to manage and modify the app's navigation structure.

### Services (`src/services/`)

Contains modules for interacting with external services, APIs, or device features.

**Decision**: This separation allows for better abstraction of external dependencies and makes it easier to mock these services for testing.

### Hooks (`src/hooks/`)

Custom React hooks that can be shared across components.

**Decision**: Centralizing hooks promotes reusability and helps avoid code duplication.

### Utils (`src/utils/`)

Utility functions and helper modules.

**Decision**: Keeping utility functions separate makes them easy to find, test, and reuse across the application.

### Store (`src/store/`)

State management files, including Redux slices, actions, and the store configuration.

**Decision**: Centralizing state management logic helps in maintaining a clear data flow throughout the app.

### Styles (`src/styles/`)

Global styles, themes, and styling utilities.

**Decision**: Having a dedicated styles directory ensures consistency in the app's look and feel.

### Types (`src/types/`)

TypeScript type definitions shared across the application.

**Decision**: Centralizing types improves type consistency and makes it easier to maintain and update type definitions.

## Best Practices

1. Keep components small and focused. If a component file grows too large, consider breaking it into smaller components.
2. Use index files in directories to simplify imports.
3. Maintain a flat structure within directories when possible. Only create subdirectories when there's a clear organizational benefit.
4. Keep related files close to each other. For example, place component-specific styles and types in the same directory as the component.
5. Use absolute imports to improve readability and avoid deep nesting in import statements.

## Conclusion

This folder structure is designed to scale with your project, providing clear organization as the application grows. It separates concerns, promotes reusability, and makes it easy for developers to find and work with the code they need. As your project evolves, you may need to adapt this structure, but it should serve as a solid foundation for most React Native applications.

```

# docs/feature-flagging.md

```md
---
sidebar_position: 4
---

# Feature Flagging

Our boilerplate uses Firebase Remote Config for implementing feature flags. This allows you to modify your app's behavior and appearance without publishing an app update.

## Usage

Here's how to use Firebase Remote Config for feature flags:

\`\`\`typescript
import remoteConfig from "@react-native-firebase/remote-config";

// Set up remote config
const setupRemoteConfig = async () => {
  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: 300000, // 5 minutes
  });

  await remoteConfig().setDefaults({
    new_feature_enabled: false,
    welcome_message: "Welcome to our app!",
  });

  await remoteConfig().fetchAndActivate();
};

// Get a boolean value
const isNewFeatureEnabled = () => {
  return remoteConfig().getBoolean("new_feature_enabled");
};

// Get a string value
const getWelcomeMessage = () => {
  return remoteConfig().getString("welcome_message");
};

// Listen for config changes
remoteConfig().onConfigUpdated(async () => {
  await remoteConfig().activate();
  console.log("Remote config updated and activated");
});
\`\`\`

## Best Practices

1. Set appropriate default values for all remote config parameters.
2. Use a reasonable minimum fetch interval to balance between freshness and network usage.
3. Handle fetching and activation errors gracefully.
4. Use feature flags for A/B testing and gradual feature rollouts.

```

# docs/error-tracking.md

```md
---
sidebar_position: 9
---

# Error Tracking

Our boilerplate integrates Sentry for robust error tracking and performance monitoring. This integration helps you identify, diagnose, and fix issues in real-time, ensuring a smooth user experience for your app.

## Sentry Integration

Sentry is pre-configured in our boilerplate, so you can start tracking errors and monitoring performance right away. Here's how it's set up:

\`\`\`javascript
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  enableAutoSessionTracking: true,
  sessionTrackingIntervalMillis: 10000,
  tracesSampleRate: 1.0,
});
\`\`\`

This configuration enables automatic error reporting and performance monitoring.

## Key Features

1. **Automatic Error Reporting**: Unhandled exceptions are automatically captured and sent to Sentry.

2. **Performance Monitoring**: Track the performance of your app, including API calls and screen load times.

3. **Release Tracking**: Sentry is configured to track releases, helping you identify which version of your app is experiencing issues.

4. **User Context**: Automatically captures user information to help you understand which users are affected by issues.

5. **Breadcrumbs**: Sentry captures a trail of events leading up to an error, making debugging easier.

## Usage in the Boilerplate

### Manual Error Logging

While unhandled exceptions are automatically reported, you can also manually log errors:

\`\`\`javascript
import * as Sentry from "@sentry/react-native";

try {
  // Your code here
} catch (error) {
  Sentry.captureException(error);
}
\`\`\`

### Adding Context

Enhance your error reports with additional context:

\`\`\`javascript
Sentry.setTag("page_locale", "en-US");
Sentry.setUser({ id: "12345", email: "user@example.com" });
\`\`\`

### Performance Monitoring

Track the performance of specific operations:

\`\`\`javascript
import * as Sentry from "@sentry/react-native";

const transaction = Sentry.startTransaction({ name: "Processing Data" });
Sentry.getCurrentHub().configureScope((scope) => scope.setSpan(transaction));

// Your code here

transaction.finish();
\`\`\`

### React Navigation Integration

The boilerplate includes Sentry integration with React Navigation for automatic breadcrumb tracking:

\`\`\`javascript
import * as Sentry from "@sentry/react-native";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer
      onReady={() => {
        Sentry.addBreadcrumb({
          category: "navigation",
          message: "App ready",
          level: Sentry.Severity.Info,
        });
      }}
    >
      {/* Your app content */}
    </NavigationContainer>
  );
}
\`\`\`

## Best Practices

1. **Use Error Boundaries**: Implement React error boundaries to catch and report errors in component trees.

2. **Custom Fingerprinting**: Use custom fingerprinting for more accurate grouping of errors.

3. **Environment-based Configuration**: Adjust Sentry settings based on the environment (development, staging, production).

4. **Performance Monitoring**: Use transactions and spans to monitor the performance of critical paths in your app.

5. **Release Management**: Ensure you're updating the release version in your builds to take full advantage of Sentry's release tracking features.

## Customizing Sentry

You can customize the Sentry configuration in `src/config/sentry.ts`:

\`\`\`javascript
import * as Sentry from "@sentry/react-native";

export const initSentry = () => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.ENVIRONMENT,
    enableAutoSessionTracking: true,
    sessionTrackingIntervalMillis: 10000,
    tracesSampleRate: process.env.ENVIRONMENT === "production" ? 0.2 : 1.0,
    beforeSend: (event) => {
      // You can modify or discard events here
      return event;
    },
  });
};
\`\`\`

## Viewing and Managing Errors

Access your Sentry dashboard to view and manage reported errors. The dashboard provides features like:

- Error grouping and prioritization
- Release tracking
- Performance monitoring
- User feedback collection

By leveraging Sentry in our boilerplate, you can proactively monitor your app's health, quickly identify and resolve issues, and ensure a high-quality experience for your users.

```

# docs/elements.md

```md
---
sidebar_position: 1
---

# Elements

Our boilerplate includes a set of reusable React Native elements that help maintain consistency and speed up development. These elements form the building blocks of our UI and ensure a cohesive user experience across the app.

## Avatar

A circular image component for user profiles.

\`\`\`jsx
import { Avatar } from "@/elements/ui";

<Avatar source={{ uri: "https://example.com/avatar.jpg" }} size="medium" />;
\`\`\`

**Key Props:**

- `source`: Image source (required)
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `onPress`: Function to call when avatar is pressed

**Styling:**
Use the `style` prop to override default styles. The `size` prop affects the diameter of the avatar.

## Badge

A small status indicator component.

\`\`\`jsx
import { Badge } from "@/elements/ui";

<Badge value={5} status="error" />;
\`\`\`

**Key Props:**

- `value`: Number or string to display
- `status`: 'primary' | 'success' | 'warning' | 'error' (default: 'primary')
- `container`: Component to wrap the badge (optional)

**Styling:**
The `status` prop affects the background color. Use `badgeStyle` and `textStyle` props for custom styling.

## Button

A customizable button component.

\`\`\`jsx
import { Button } from "@/elements/ui";

<Button
  title="Press me"
  onPress={() => console.log("Button pressed")}
  type="outline"
/>;
\`\`\`

**Key Props:**

- `title`: Button text (required)
- `onPress`: Function to call when button is pressed (required)
- `type`: 'solid' | 'outline' | 'clear' (default: 'solid')
- `disabled`: Boolean to disable the button

**Styling:**
Use `buttonStyle` and `titleStyle` props for custom styling. The `type` prop affects the overall appearance.

## Card

A container component for grouping related content.

\`\`\`jsx
import { Card } from "@/elements/ui";

<Card>
  <Card.Title>Card Title</Card.Title>
  <Card.Divider />
  <Card.Image source={{ uri: "https://example.com/image.jpg" }} />
  <Text>Card content goes here</Text>
</Card>;
\`\`\`

**Key Props:**

- `containerStyle`: Style object for the card container
- `wrapperStyle`: Style object for the card wrapper

**Styling:**
Use `containerStyle` for styling the outer container and `wrapperStyle` for the inner wrapper.

## Checkbox

A selectable checkbox component.

\`\`\`jsx
import { Checkbox } from "@/elements/ui";

<Checkbox
  checked={isChecked}
  onPress={() => setIsChecked(!isChecked)}
  title="I agree to the terms"
/>;
\`\`\`

**Key Props:**

- `checked`: Boolean for the checkbox state (required)
- `onPress`: Function to call when checkbox is pressed (required)
- `title`: Text to display next to the checkbox

**Styling:**
Use `containerStyle`, `textStyle`, and `checkedColor` props for custom styling.

## Input

A text input component with built-in styling and validation.

\`\`\`jsx
import { Input } from "@/elements/ui";

<Input
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
/>;
\`\`\`

**Key Props:**

- `value`: Current value of the input (required)
- `onChangeText`: Function to call when text changes (required)
- `placeholder`: Placeholder text
- `secureTextEntry`: Boolean for password input

**Styling:**
Use `inputStyle`, `inputContainerStyle`, and `labelStyle` props for custom styling.

## ProgressBar

A progress indicator component.

\`\`\`jsx
import { ProgressBar } from "@/elements/ui";

<ProgressBar value={0.7} color="primary" />;
\`\`\`

**Key Props:**

- `value`: Number between 0 and 1 indicating progress (required)
- `color`: Color of the progress bar

**Styling:**
Use `style` prop for container styling and `color` prop for the progress color.

## Image

An enhanced image component with loading placeholder and error handling.

\`\`\`jsx
import { Image } from "@/elements/ui";

<Image
  source={{ uri: "https://example.com/image.jpg" }}
  style={{ width: 200, height: 200 }}
/>;
\`\`\`

**Key Props:**

- `source`: Image source (required)
- `PlaceholderContent`: Component to render while image is loading
- `onError`: Function to call if image fails to load

**Styling:**
Use `style` prop for image styling. `placeholderStyle` can be used for placeholder styling.

## Slider

A draggable slider component for selecting a value from a range.

\`\`\`jsx
import { Slider } from "@/elements/ui";

<Slider
  value={sliderValue}
  onValueChange={setSliderValue}
  minimumValue={0}
  maximumValue={100}
/>;
\`\`\`

**Key Props:**

- `value`: Current value of the slider (required)
- `onValueChange`: Function to call when value changes (required)
- `minimumValue`: Minimum value of the slider
- `maximumValue`: Maximum value of the slider

**Styling:**
Use `thumbStyle`, `trackStyle`, and `thumbTintColor` props for custom styling.

## Toggle

A toggle switch component.

\`\`\`jsx
import { Toggle } from "@/elements/ui";

<Toggle isOn={isEnabled} onToggle={setIsEnabled} />;
\`\`\`

**Key Props:**

- `isOn`: Boolean for the toggle state (required)
- `onToggle`: Function to call when toggle is pressed (required)
- `disabled`: Boolean to disable the toggle

**Styling:**
Use `trackColor` and `thumbColor` props to customize colors for on/off states.

## Text

A text component with built-in styling options.

\`\`\`jsx
import { Text } from '@/elements/ui';

<Text h2>Heading 2</Text>
<Text>Regular text</Text>
\`\`\`

**Key Props:**

- `h1`, `h2`, `h3`, `h4`: Boolean props for heading styles
- `style`: Additional style object

**Styling:**
Use the `style` prop for custom styling. Heading props (`h1`, `h2`, etc.) apply predefined styles.

## Alert

A customizable alert component.

\`\`\`jsx
import { Alert } from "@/elements/ui";

<Alert title="Success!" type="success" message="Your action was successful." />;
\`\`\`

**Key Props:**

- `title`: Alert title (required)
- `type`: 'success' | 'warning' | 'error' | 'info'
- `message`: Alert message

**Styling:**
The `type` prop affects the color scheme. Use `containerStyle` for custom container styling.

## DatePicker

A date selection component.

\`\`\`jsx
import { DatePicker } from "@/elements/ui";

<DatePicker value={date} onChange={setDate} mode="date" />;
\`\`\`

**Key Props:**

- `value`: Selected date (required)
- `onChange`: Function to call when date changes (required)
- `mode`: 'date' | 'time' | 'datetime'

**Styling:**
Styling options depend on the underlying implementation (native or custom). Refer to the component's documentation for specific styling props.

## Picker

A selection component for choosing from a list of options.

\`\`\`jsx
import { Picker } from "@/elements/ui";

<Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>;
\`\`\`

**Key Props:**

- `selectedValue`: Currently selected value (required)
- `onValueChange`: Function to call when selection changes (required)

**Styling:**
Use `style` prop for container styling. Item styling may vary based on platform.

## SegmentedControl

A segmented control component for selecting between multiple options.

\`\`\`jsx
import { SegmentedControl } from "@/elements/ui";

<SegmentedControl
  values={["Daily", "Weekly", "Monthly"]}
  selectedIndex={selectedIndex}
  onChange={(index) => setSelectedIndex(index)}
/>;
\`\`\`

**Key Props:**

- `values`: Array of segment labels (required)
- `selectedIndex`: Index of the selected segment (required)
- `onChange`: Function to call when selection changes (required)

**Styling:**
Use `tintColor` for the main color, `backgroundColor` for the background, and `fontStyle` for text styling.

These elements are designed to work seamlessly with our theming and styling system. You can easily customize their appearance using the provided styling props or by overriding styles at the theme level for app-wide consistency.

```

# docs/development-workflow.md

```md
---
sidebar_position: 15
---

# Development Workflow

Our boilerplate includes several tools and configurations to improve the development workflow, making it easier to maintain code quality and consistency across the project.

## Husky for Git Hooks

We use Husky to manage Git hooks, ensuring that certain checks are run before commits and pushes.

### Pre-commit Hook

Our pre-commit hook runs the following checks:

1. Linting with ESLint
2. Type checking with TypeScript
3. Formatting with Prettier

This is configured in `.husky/pre-commit`:

\`\`\`bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run type-check
npm run format
\`\`\`

### Pre-push Hook

The pre-push hook runs our test suite:

\`\`\`bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm test
\`\`\`

## Absolute Imports

We've configured absolute imports to make it easier to import modules without needing to use long relative paths. This is set up in `tsconfig.json`:

\`\`\`json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
\`\`\`

Now you can import modules like this:

\`\`\`typescript
import { Button } from "@/components/ui";
import { useUser } from "@/hooks/useUser";
\`\`\`

## VS Code Configuration

We've included a `.vscode` folder with recommended settings and extensions to ensure a consistent development experience across the team.

### Recommended Extensions

- ESLint
- Prettier
- React Native Tools
- TypeScript React code snippets

### Workspace Settings

We've preconfigured some VS Code settings in `.vscode/settings.json`:

\`\`\`json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
\`\`\`

## Best Practices

1. Always run `npm install` after pulling changes to ensure you have the latest dependencies.
2. Use the provided npm scripts (e.g., `npm run lint`, `npm run test`) to run checks locally before committing.
3. Leverage absolute imports to keep import statements clean and maintainable.
4. Use the recommended VS Code extensions for the best development experience.

By following these practices and utilizing the tools we've set up in the boilerplate, you can maintain a high level of code quality and consistency throughout your project's development lifecycle.

```

# docs/database.md

```md
---
sidebar_position: 2
---

# Database

Our boilerplate integrates Firebase Realtime Database for efficient data storage and real-time synchronization. This allows you to build reactive apps with ease.

## Usage

Here's an example of how to use Firebase Realtime Database:

\`\`\`typescript
import database from "@react-native-firebase/database";

// Read data
const readData = async (path: string) => {
  try {
    const snapshot = await database().ref(path).once("value");
    return snapshot.val();
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
  }
};

// Write data
const writeData = async (path: string, data: any) => {
  try {
    await database().ref(path).set(data);
    console.log("Data written successfully");
  } catch (error) {
    console.error("Error writing data:", error);
  }
};

// Listen for real-time updates
const listenForUpdates = (path: string, callback: (data: any) => void) => {
  const onValueChange = database()
    .ref(path)
    .on("value", (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });

  // Return a function to unsubscribe from updates
  return () => database().ref(path).off("value", onValueChange);
};
\`\`\`

## Best Practices

1. Structure your data efficiently to optimize read/write operations.
2. Use security rules to protect your database from unauthorized access.
3. Implement offline persistence for a better user experience.
4. Be mindful of the data you store and comply with privacy regulations.

```

# docs/data-handling.md

```md
---
sidebar_position: 3
---

# Data Handling

Our boilerplate uses a combination of RTK Query for API calls and data caching, and Redux Persist for local data persistence. This setup provides a robust solution for handling data in your React Native app.

## RTK Query Setup

RTK Query is pre-configured in `src/services/api.ts`:

\`\`\`typescript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.example.com",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define your endpoints here
  }),
});
\`\`\`

## Defining API Endpoints

To add a new API endpoint:

\`\`\`typescript
export const api = createApi({
  // ... base configuration
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } =
  api;
\`\`\`

## Using RTK Query in Components

\`\`\`typescript
import { useGetUsersQuery, useCreateUserMutation } from "@/services/api";

function UserList() {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <View>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      <Button
        title="Add User"
        onPress={() => createUser({ name: "New User" })}
      />
    </View>
  );
}
\`\`\`

## Data Persistence

Redux Persist is used for local data persistence. It's configured in `src/store/index.ts`:

\`\`\`typescript
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "user"], // Only persist these reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
\`\`\`

## Offline Support

For offline support, we use a combination of Redux Persist and custom middleware:

1. Store API responses in Redux state.
2. Use Redux Persist to save this state to AsyncStorage.
3. Implement custom middleware to queue actions when offline:

\`\`\`typescript
const offlineMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (!navigator.onLine) {
      return dispatch(addToOfflineQueue(action));
    }
    return next(action);
  };
\`\`\`

4. Process the queue when coming back online.

## Data Transformation

For complex data transformations, we use the `reselect` library:

\`\`\`typescript
import { createSelector } from "reselect";

const selectUsers = (state) => state.users;
const selectProjects = (state) => state.projects;

export const selectUserProjects = createSelector(
  [selectUsers, selectProjects],
  (users, projects) => {
    // Perform complex data transformation here
  }
);
\`\`\`

## Best Practices

1. Use RTK Query for all API calls to benefit from automatic caching and refetching.
2. Implement proper error handling and loading states in your components.
3. Use selectors for derived state to improve performance.
4. Be mindful of what data you persist locally and ensure sensitive data is properly secured.
5. Implement proper data validation both on the client and server side.

By following these patterns and leveraging the pre-configured data handling setup, you can efficiently manage data fetching, caching, and persistence in your React Native app while keeping your codebase clean and maintainable.

```

# docs/ci-cd.md

```md
---
sidebar_position: 8
---

# CI/CD

Our boilerplate includes a robust Continuous Integration and Continuous Deployment (CI/CD) setup using GitHub Actions. This ensures that your code is automatically tested, built, and deployed whenever changes are pushed to your repository.

## GitHub Actions Workflow

The CI/CD pipeline is defined in `.github/workflows/ci-cd.yml`:

\`\`\`yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14.x"
      - run: npm ci
      - run: npm run test

  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14.x"
      - run: npm ci
      - run: npm run lint

  build-android:
    needs: [test, lint]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 11
        uses: actions/setup-java@v2
        with:
          java-version: "11"
          distribution: "adopt"
      - name: Build Android Release
        run: |
          cd android
          ./gradlew assembleRelease

  build-ios:
    needs: [test, lint]
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14.x"
      - name: Build iOS Release
        run: |
          cd ios
          pod install
          xcodebuild -workspace MyApp.xcworkspace -scheme MyApp archive -archivePath MyApp.xcarchive -allowProvisioningUpdates

  deploy:
    needs: [build-android, build-ios]
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to App Store
        run: echo "Deploy to App Store"
      - name: Deploy to Google Play
        run: echo "Deploy to Google Play"
\`\`\`

This workflow does the following:

1. Runs tests and linting on every push and pull request.
2. If tests and linting pass, it builds both Android and iOS versions of the app.
3. If both builds are successful, it deploys the app to the App Store and Google Play (you would need to add the specific deployment steps).

## Environment Variables

Sensitive information like API keys should be stored as GitHub Secrets and accessed in the workflow as environment variables:

\`\`\`yaml
steps:
  - name: Build Android Release
    env:
      ANDROID_KEYSTORE_PASSWORD: ${{ secrets.ANDROID_KEYSTORE_PASSWORD }}
    run: ./gradlew assembleRelease
\`\`\`

## Customizing the CI/CD Pipeline

To customize the CI/CD pipeline:

1. Modify the `.github/workflows/ci-cd.yml` file.
2. Add or remove jobs as needed.
3. Adjust the triggers in the `on` section to run the workflow on different events.

## Best Practices

1. Keep secrets and credentials secure by using GitHub Secrets.
2. Run tests and linting before building to catch errors early.
3. Use caching to speed up builds by caching dependencies and build artifacts.
4. Use matrix builds to test on multiple Node.js versions or platforms simultaneously.
5. Add status checks to protect your main branch and ensure CI passes before merging.
6. Monitor your CI/CD pipeline and optimize it for faster builds.

By leveraging this CI/CD setup, you can automate your testing, building, and deployment processes, saving time and reducing the risk of human error.

```

# docs/authentication.md

```md
---
sidebar_position: 1
---

# Authentication

Firebase Authentication provides easy-to-use SDKs and ready-made UI libraries to authenticate users to your app. Our boilerplate includes Firebase Authentication setup, allowing you to easily implement various authentication methods.

## Usage

Here's an example of how to use Firebase Authentication for email/password sign-in:

\`\`\`typescript
import auth from "@react-native-firebase/auth";

// Sign in
const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password
    );
    console.log("User signed in:", userCredential.user.uid);
  } catch (error) {
    console.error("Sign-in error:", error);
  }
};

// Sign out
const signOut = async () => {
  try {
    await auth().signOut();
    console.log("User signed out");
  } catch (error) {
    console.error("Sign-out error:", error);
  }
};

// Get current user
const getCurrentUser = () => {
  const user = auth().currentUser;
  return user ? user : null;
};
\`\`\`

## Available Authentication Methods

Our boilerplate supports the following authentication methods:

- Email/Password
- Google Sign-In
- Apple Sign-In
- Phone Number Authentication

To use these methods, refer to the `AuthService` in the `services` folder.

## Best Practices

1. Always handle authentication errors gracefully and provide meaningful feedback to users.
2. Use async/await for better readability when dealing with Firebase Authentication promises.
3. Implement proper navigation flows for authenticated and non-authenticated users.
4. Store sensitive user information securely using appropriate storage methods.

```

# docs/architecture.md

```md
---
sidebar_position: 3
---

# Architecture Overview

The MVP Studio Boilerplate follows a modular, scalable, and maintainable architecture designed to accommodate various types of mobile applications. This document outlines the key components and design principles that form the foundation of our architecture.

## High-Level Architecture

Our architecture is built on the following key principles:

- **Modularity**: Easy to add, remove, or modify features
- **Scalability**: Capable of growing with your application's needs
- **Maintainability**: Designed for long-term ease of maintenance
- **Testability**: Structured to facilitate comprehensive testing

\`\`\`mermaid
graph TD
    A[App Entry Point] --> B[Navigation]
    B --> C[Screens]
    C --> D[Components]
    C --> E[State Management]
    E --> F[API Layer]
    F --> G[External Services]
    C --> H[Utilities]
    C --> I[Hooks]
\`\`\`

## Core Components

### 1. Screens

- Represent full-page components
- Compose smaller components
- Handle screen-level logic

### 2. Components

- Reusable UI elements
- Follow atomic design principles
- Styled using Unistyles

### 3. Navigation

- Utilizes React Navigation
- Defines app's navigation structure
- Handles deep linking

### 4. State Management

- Powered by Redux Toolkit
- Centralized app state
- RTK Query for API state management

### 5. API Layer

- RTK Query for data fetching and caching
- Axios for custom API calls
- Error handling and request/response interceptors

### 6. Services

- Firebase integration
- RevenueCat for in-app purchases
- Other third-party service integrations

### 7. Utilities

- Helper functions
- Constants
- Type definitions

### 8. Hooks

- Custom React hooks for reusable logic

## Detailed Architecture Breakdown

### 1. App Entry Point (App.tsx)

- Sets up providers (Redux, Navigation, Theme)
- Initializes services (Firebase, Sentry)
- Renders the root navigation structure

### 2. Navigation Structure

\`\`\`mermaid
graph TD
    A[Root Navigator] --> B[Auth Navigator]
    A --> C[Main Navigator]
    C --> D[Home Stack]
    C --> E[Profile Stack]
    C --> F[Settings Stack]
\`\`\`

### 3. State Management Flow

\`\`\`mermaid
graph LR
    A[User Action] --> B[Dispatch Action]
    B --> C[Reducer]
    C --> D[State Update]
    D --> E[Re-render Components]
\`\`\`

### 4. Data Flow

\`\`\`mermaid
graph TD
    A[Component] --> B[RTK Query Hook]
    B --> C[API Call]
    C --> D[Cache]
    D --> B
    B --> A
\`\`\`

## Key Architectural Decisions

### Separation of Concerns

- Clear distinction between UI components and business logic
- Use of custom hooks for reusable logic

### Centralized State Management

- Redux for global app state
- Context API for localized component state

### API Layer Abstraction

- RTK Query for standardized API interactions
- Centralized error handling and request/response interceptors

### Modular Component Structure

- Atomic design principles for UI components
- Composition over inheritance

### Type Safety

- Extensive use of TypeScript for type checking
- Defined interfaces for API responses and app state

### Performance Optimization

- Memoization of expensive computations
- Lazy loading of screens and components

### Cross-Platform Consistency

- Platform-specific code isolated in separate files
- Use of React Native's platform-specific extensions

## Testing Strategy

- Unit Tests: For individual functions and components
- Integration Tests: For testing component interactions
- E2E Tests: Using Detox for full user flow testing

## Security Considerations

- Secure storage for sensitive data
- API request encryption
- Input validation and sanitization

## Scalability and Performance

- Code splitting and lazy loading
- Optimized re-renders using React's memo and useMemo
- Efficient list rendering with FlashList

## Best Practices

- Consistent naming conventions
- Code documentation and comments
- Regular code reviews and pair programming

```

# docs/animations.md

```md
---
sidebar_position: 2
---

# Animations

In our boilerplate, we use React Native Reanimated to create smooth, high-performance animations that enhance the user experience of our mobile app.

## Why React Native Reanimated?

React Native Reanimated is integrated into our boilerplate for several reasons:

1. **Performance**: It runs animations on the native thread, resulting in smoother animations even on lower-end devices.
2. **Flexibility**: It allows for complex animation logic that would be difficult to achieve with other animation libraries.
3. **Integration**: It works seamlessly with other parts of our React Native setup, including gesture handling.

## Pre-configured Animations

We've set up several pre-configured animations that you can easily use in your elements:

### Fade In Animation

\`\`\`typescript
import { FadeInView } from "@/animations/FadeInView";

function MyComponent() {
  return (
    <FadeInView>
      <Text>This text will fade in</Text>
    </FadeInView>
  );
}
\`\`\`

### Scale Animation

\`\`\`typescript
import { ScaleView } from "@/animations/ScaleView";

function MyComponent() {
  return (
    <ScaleView>
      <Button title="Click me!" />
    </ScaleView>
  );
}
\`\`\`

### Slide Animation

\`\`\`typescript
import { SlideView } from "@/animations/SlideView";

function MyComponent() {
  return (
    <SlideView direction="left">
      <Text>This content will slide in from the left</Text>
    </SlideView>
  );
}
\`\`\`

## Creating Custom Animations

To create a custom animation, use the `useAnimatedStyle` hook:

\`\`\`typescript
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

function MyCustomAnimation() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  function handlePress() {
    offset.value = withSpring(Math.random() * 255);
  }

  return (
    <Animated.View style={[styles.box, animatedStyles]}>
      <Button onPress={handlePress} title="Move" />
    </Animated.View>
  );
}
\`\`\`

## Animation Composition

You can compose multiple animations to create more complex effects:

\`\`\`typescript
import { FadeInView, ScaleView } from "@/animations";

function ComposedAnimation() {
  return (
    <FadeInView>
      <ScaleView>
        <Text>This text will fade in and scale up</Text>
      </ScaleView>
    </FadeInView>
  );
}
\`\`\`

## Best Practices

1. Use the pre-configured animations whenever possible to maintain consistency across the app.
2. For custom animations, make sure to use `useSharedValue` for values that will be animated.
3. Leverage the `worklet` function for complex animation logic that needs to run on the UI thread.
4. Consider performance implications when creating complex animations, especially on lower-end devices.
5. Use composition to create more complex animations from simpler building blocks.

By utilizing React Native Reanimated in our boilerplate, we ensure that our app feels responsive and engaging, providing a polished user experience right from the start.

```

# src/pages/markdown-page.md

```md
---
title: Markdown page example
---

# Markdown page example

You don't need React to write simple standalone pages.

```

# src/pages/index.tsx

```tsx
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

const features = [
  {
    title: "Scalable Architecture",
    description:
      "Built with modular and maintainable design patterns to support various types of mobile applications.",
    icon: "🏗️",
  },
  {
    title: "Ready-to-Use Components",
    description:
      "Includes pre-built UI components and screens to accelerate your development process.",
    icon: "🧩",
  },
  {
    title: "Comprehensive Documentation",
    description:
      "Detailed guides and best practices to help you make the most of the boilerplate.",
    icon: "📚",
  },
  {
    title: "State Management",
    description:
      "Integrated Redux Toolkit for efficient and predictable state management.",
    icon: "🔄",
  },
  {
    title: "API Integration",
    description: "Built-in support for RESTful and GraphQL API integrations.",
    icon: "🌐",
  },
  {
    title: "Testing Framework",
    description:
      "Preconfigured testing setup with Jest and React Testing Library.",
    icon: "🧪",
  },
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.title}>MVP Studio Boilerplate</h1>
        <p className={styles.subtitle}>
          A scalable and efficient mobile app development boilerplate
        </p>
        <div className={styles.buttons}>
          <Link className={styles.button} to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={`${styles.button} ${styles.buttonOutline}`}
            to="https://github.com/your-org/mvp-studio-architecture"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description, icon }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.features}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </section>
      </main>
    </Layout>
  );
}

```

# src/pages/index.module.css

```css
.heroBanner {
  padding: 8rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
  color: #333;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.75rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.button {
  border-radius: 30px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: #4a90e2;
  color: white;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.buttonOutline {
  background-color: transparent;
  border: 2px solid #4a90e2;
  color: #4a90e2;
}

.main {
  padding: 4rem 0;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature {
  padding: 2rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  border: 2px solid #f1f3f5;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.feature:hover {
  border-color: #dee2e6;
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.featureIcon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.feature p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 4rem 2rem;
  }

  .title {
    font-size: 3rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }
}

```

# src/css/custom.css

```css
/* custom.css */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

:root {
  --ifm-color-primary: #4a90e2;
  --ifm-color-primary-dark: #2f7ad9;
  --ifm-color-primary-darker: #2672cd;
  --ifm-color-primary-darkest: #1f5ea9;
  --ifm-color-primary-light: #62a1e6;
  --ifm-color-primary-lighter: #70a9e8;
  --ifm-color-primary-lightest: #97c1ef;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
  --ifm-font-family-base: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --ifm-heading-font-family: "Inter", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --ifm-background-color: #ffffff;
  --ifm-navbar-background-color: rgba(255, 255, 255, 0.8);
  --ifm-navbar-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] {
  --ifm-color-primary: #81a4c8; /* Adjusted for dark mode */
  --ifm-color-primary-dark: #6992bd;
  --ifm-color-primary-darker: #5e89b7;
  --ifm-color-primary-darkest: #456d99;
  --ifm-color-primary-light: #99b6d3;
  --ifm-color-primary-lighter: #a5bfd9;
  --ifm-color-primary-lightest: #c6d7e8;
  --ifm-background-color: #1a1a1a;
  --ifm-navbar-background-color: rgba(26, 26, 26, 0.8);
}

/* Increase font size for all sidebar items */
.theme-doc-sidebar-item-link .menu__link,
.theme-doc-sidebar-item-category .menu__list-item-collapsible {
  font-size: 1rem;
}

.pagination-nav__link {
  background-color: transparent;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.pagination-nav__sublabel {
  color: #666;
  font-size: 0.8rem;
}

.pagination-nav__label {
  color: var(--ifm-color-primary);
  font-weight: 600;
  font-size: 1rem;
}

body {
  font-family: var(--ifm-font-family-base);
  background-color: var(--ifm-background-color);
  color: #333;
  line-height: 1.6;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--ifm-heading-font-family);
  font-weight: 600;
}

.navbar {
  background: var(--ifm-navbar-background-color);
  backdrop-filter: blur(10px);
  box-shadow: var(--ifm-navbar-shadow);
}

.navbar__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ifm-color-primary);
}

.navbar__link {
  font-weight: 500;
  color: var(--ifm-color-primary);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--ifm-color-primary-darker);
}

.main-wrapper {
  background-color: var(--ifm-background-color);
}

article {
  max-width: none;
  margin: 0;
  padding: 2rem;
  background-color: transparent;
  box-shadow: none;
}

article header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--ifm-color-primary);
  margin-bottom: 1rem;
}

article header h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--ifm-color-primary-dark);
}

.features_src-components-HomepageFeatures-styles-module {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
}

.featureSvg_src-components-HomepageFeatures-styles-module {
  height: 200px;
  width: 200px;
}

.feature {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Button styles */
.button {
  border: 1px solid var(--ifm-color-primary);
  transition: background-color 0.3s ease;
}

.button:hover {
  text-decoration: none !important;
  color: inherit !important;
  background-color: rgba(58, 95, 135, 0.1);
}

/* Sidebar styles */
.theme-doc-sidebar-container {
  background-color: #f8f9fa;
  border-right: 1px solid #e0e0e0;
}

.theme-doc-sidebar-menu {
  padding: 0.5rem;
}

.theme-doc-sidebar-item-link-level-1 > a,
.theme-doc-sidebar-item-category-level-1 > .menu__list-item-collapsible > a {
  font-weight: 600;
  color: var(--ifm-color-primary);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}

.theme-doc-sidebar-item-link-level-2 > a,
.theme-doc-sidebar-item-category-level-2 > .menu__list-item-collapsible > a {
  padding: 0.25rem 0.75rem 0.25rem 1.5rem;
  font-size: 0.9rem;
}

.menu__link:hover,
.menu__link--active {
  background-color: rgba(58, 95, 135, 0.1);
}

.table-of-contents__link {
  color: #666;
}

.table-of-contents__link:hover,
.table-of-contents__link--active {
  color: var(--ifm-color-primary);
}

.docusaurus-highlight-code-line {
  background-color: rgba(0, 0, 0, 0.05);
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
}

html {
  scroll-behavior: smooth;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  z-index: -1;
}

[data-theme="dark"] body::before {
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
}

```

# src/components/HomepageFeatures/styles.module.css

```css
.features {
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
}

.featureSvg {
  height: 200px;
  width: 200px;
}

```

# src/components/HomepageFeatures/index.tsx

```tsx
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

```

