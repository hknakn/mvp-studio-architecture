---
sidebar_position: 14
---

# React Native MMKV

Our boilerplate uses React Native MMKV for efficient local data storage. MMKV provides a significant performance boost over AsyncStorage, making it ideal for storing app settings, user preferences, and other local data.

## Using MMKV Storage

We've created a `StorageService` that wraps MMKV functionality:

```typescript
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
```

## Typed Storage Hooks

For even better type safety and ease of use, we've created typed storage hooks:

```typescript
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
```
