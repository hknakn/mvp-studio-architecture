---
sidebar_position: 13
---

# UI and Styling

Our boilerplate uses a combination of custom components inspired by React Native Elements and React Native Unistyles for a consistent and easily customizable UI.

## Custom UI Components

We've created a set of custom components based on React Native Elements, which provide a solid foundation for building your app's UI:

```typescript
import { Button, Card, Input } from "@/components/ui";

function MyScreen() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button title="Submit" onPress={() => {}} />
    </Card>
  );
}
```

These components are designed to be consistent with your app's theme and can be easily customized.

## Theming with Unistyles

We use React Native Unistyles for theming and styling. This allows for easy customization and consistent styling across the app.

### Theme Configuration

The theme is defined in `src/styles/theme.ts`:

```typescript
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
```

### Using the Theme

You can access the theme in your components:

```typescript
import { useStyles } from "react-native-unistyles";

function MyComponent() {
  const { theme } = useStyles();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Hello, World!</Text>
    </View>
  );
}
```

### Creating Stylesheets

Use the `createStylesheet` function to create type-safe stylesheets:

```typescript
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
```

## Best Practices

1. Use the provided custom UI components whenever possible to maintain consistency.
2. Leverage the theme for colors, spacing, and other design tokens instead of hardcoding values.
3. Create reusable stylesheets for components that are used frequently.
4. Use the `responsiveSize` utility for creating responsive layouts.

By using this combination of custom UI components and Unistyles, our boilerplate provides a flexible and maintainable approach to styling your React Native app.
