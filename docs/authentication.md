---
sidebar_position: 1
---

# Authentication

**Firebase Authentication** provides easy-to-use SDKs authenticate users to your app. Our boilerplate includes **Firebase Authentication** setup, allowing you to easily implement various authentication methods.

## Usage

Here's an example of how to use Firebase Authentication for email/password sign-in:

```typescript
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
```

## Available Authentication Methods

Our boilerplate supports the following authentication methods:

- Email/Password
- Google Sign-In
- Apple Sign-In
- Phone Number Authentication

To use these methods, refer to the `AuthService` in the `services` folder.
