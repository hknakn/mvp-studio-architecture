# Haptics

Expo Haptics provides haptic feedback for iOS and Android devices. It allows you to add haptic feedback to app to improve the user experience.

## Usage in MVP Studio Boilerplate

### Basic Haptic Feedback

Here's an example of using different types of haptic feedback:

```typescript
import React from "react";
import { View, Button } from "react-native";
import * as Haptics from "expo-haptics";

const HapticExample = () => {
  const triggerSelection = () => {
    Haptics.selectionAsync();
  };

  const triggerImpact = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const triggerNotification = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  return (
    <View>
      <Button title="Selection" onPress={triggerSelection} />
      <Button title="Impact" onPress={triggerImpact} />
      <Button title="Notification" onPress={triggerNotification} />
    </View>
  );
};
```
