---
sidebar_position: 2
---

# Screens

Our boilerplate comes with several prebuilt screens to speed up your development process. These screens are designed to be customizable and can be easily integrated into your app's flow. Here's an overview of the available prebuilt screens:

## Authentication Screens

### Login Screen

A fully functional login screen with email and password fields, social login options, and "Forgot Password" link.

```jsx
import { LoginScreen } from "@/screens/auth/LoginScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
}
```

### Signup Screen

A comprehensive signup screen with fields for name, email, password, and terms acceptance.

```jsx
import { SignupScreen } from "@/screens/auth/SignupScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Signup" component={SignupScreen} />
    </Navigator>
  );
}
```

## Checkout Screen

A customizable checkout screen with support for multiple payment methods, shipping address input, and order summary.

```jsx
import { CheckoutScreen } from "@/screens/commerce/CheckoutScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Checkout" component={CheckoutScreen} />
    </Navigator>
  );
}
```

## Profile Screen

A user profile screen with editable fields, profile picture upload, and account settings.

```jsx
import { ProfileScreen } from "@/screens/user/ProfileScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
}
```

## Settings Screen

A comprehensive settings screen with options for notifications, privacy, theme selection, and more.

```jsx
import { SettingsScreen } from "@/screens/user/SettingsScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}
```

## Messaging Screen

A messaging screen with a chat interface, message input, and support for media attachments.

```jsx
import { MessagingScreen } from "@/screens/communication/MessagingScreen";

function App() {
  return (
    <Navigator>
      <Screen name="Messaging" component={MessagingScreen} />
    </Navigator>
  );
}
```

## Onboarding Screens

A set of onboarding screens to introduce users to your app's key features.

```jsx
import { OnboardingScreens } from "@/screens/onboarding/OnboardingScreens";

function App() {
  return (
    <Navigator>
      <Screen name="Onboarding" component={OnboardingScreens} />
    </Navigator>
  );
}
```

## Customizing Prebuilt Screens

All prebuilt screens are designed to be easily customizable. You can modify the appearance and behavior of these screens by passing props or overriding default styles.

Example of customizing the LoginScreen:

```jsx
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
```

## Creating New Screens

While these prebuilt screens cover many common use cases, you can easily create new screens or modify existing ones to fit your specific needs. Use the provided screens as references for structure and best practices when creating your own custom screens.
