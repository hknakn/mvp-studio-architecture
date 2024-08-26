---
sidebar_position: 2
---

# Database

Our boilerplate integrates **Firebase Realtime Database** for efficient data storage and real-time synchronization. This allows you to build reactive apps with ease.

## Usage

Here's an example of how to use Firebase Realtime Database:

```typescript
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
```
