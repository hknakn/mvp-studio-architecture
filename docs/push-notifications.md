---
sidebar_position: 3
---

# Push Notifications

Our boilerplate includes **Firebase Cloud Messaging (FCM)** for handling push notifications. This allows you to send targeted notifications to your app users.

## Usage

Here's how to handle push notifications in your app:

```typescript
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
```
