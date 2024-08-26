---
sidebar_position: 4
---

# Styling

Our boilerplate uses React Native Unistyles for styling, which provides a powerful and flexible way to style your components while maintaining type safety and enabling easy theming.

## Basic Usage

To create styles for a component:

```typescript
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
```

## Responsive Styles

Unistyles provides a way to create responsive styles based on the device's screen size:

```typescript
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
```

## Dynamic Styles

You can create dynamic styles based on props or state:

```typescript
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
```

## Extending Styles

You can extend existing styles to create new variations:

```typescript
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
```

## Best Practices

1. Use the theme values for colors, spacing, and typography to provide consistency.
2. Create reusable style objects for common patterns in your app.
3. Keep your style definitions close to the components that use them for better organization.
4. Use dynamic styles for interactive elements that change appearance based on state.
