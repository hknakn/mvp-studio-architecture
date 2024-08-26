# Reanimated

React Native Reanimated is a powerful animation library that allows for creating smooth, high-performance animations in React Native applications. This document outlines how Reanimated is integrated and used in the MVP Studio Boilerplate.

## Comparison with Animated API

Reanimated provides a more flexible and performant way to create animations compared to the core Animated API. It runs animations on the native thread, resulting in smoother performance, especially for complex animations.

## Usage in MVP Studio Boilerplate

### Basic Animation

Here's an example of a simple fade-in animation using Reanimated:

```typescript
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const FadeInView = ({ children }) => {
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};
```

### Gesture-based Animation

Here's an example of a draggable component:

```typescript
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const DraggableBox = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.translateX + event.translationX;
      translateY.value = context.translateY + event.translationY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={[styles.box, rStyle]} />
    </PanGestureHandler>
  );
};
```
