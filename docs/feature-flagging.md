---
sidebar_position: 4
---

# Feature Flagging

Our boilerplate uses **Firebase Remote Config** for implementing feature flags. This allows you to modify your app's behavior and appearance without publishing an app update.

## Usage

Here's how to use Firebase Remote Config for feature flags:

```typescript
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
```
