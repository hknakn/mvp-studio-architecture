---
sidebar_position: 3
---

# Theming

Our boilerplate uses a robust theming system to ensure consistent visual design across the app while allowing for easy customization and the implementation of features like ligth / dark mode support.

## Theme Structure

The theme is defined in `src/styles/theme.ts` and includes properties such as:

- Colors
- Typography
- Spacing
- Border radius
- Shadows

Here's an example of our theme structure:

```typescript
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
```

## Using the Theme

You can access the theme in your components using the `useStyles` hook:

```typescript
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
```

## Dark Mode

Our theming system supports dark mode out of the box. To implement dark mode:

1. Define dark mode colors in your theme:

```typescript
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
```

2. Use the `useColorScheme` hook to detect the user's preference:

```typescript
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
```

## Customizing the Theme

To customize the theme for your specific app:

1. Create a new file, e.g., `src/styles/customTheme.ts`
2. Import the base theme and extend it with your custom values:

```typescript
import { theme as baseTheme } from "./theme";

export const customTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "#FF0000", // Custom primary color
  },
  // Add or override other theme properties as needed
};
```

3. Use the custom theme in your app's root component:

```typescript
import { ThemeProvider } from "react-native-unistyles";
import { customTheme } from "./styles/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```
