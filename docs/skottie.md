# React Native Skottie

React Native Skottie is a library that allows you to render Lottie animations in React Native using Skia. It provides high-performance animations with a small footprint.

## Comparison with Lottie React Native

React Native Skottie offers better performance compared to Lottie React Native, especially for complex animations. It uses Skia for rendering, which is more efficient than the default Lottie renderer.

## Usage in MVP Studio Boilerplate

### Basic Animation

Here's an example of how to use React Native Skottie to render a Lottie animation:

```typescript
import { SkottieView } from "@shopify/react-native-skottie";

const LottieAnimation = () => {
  return (
    <SkottieView
      source={require("./animation.json")}
      style={{ width: 200, height: 200 }}
      autoPlay
      loop
    />
  );
};
```

### Controlled Animation

You can also control the animation programmatically:

```typescript
import React, { useRef } from "react";
import { Button } from "react-native";
import { SkottieView } from "@shopify/react-native-skottie";

const ControlledAnimation = () => {
  const animationRef = useRef<SkottieView>(null);

  const playAnimation = () => {
    animationRef.current?.play();
  };

  const pauseAnimation = () => {
    animationRef.current?.pause();
  };

  return (
    <>
      <SkottieView
        ref={animationRef}
        source={require("./animation.json")}
        style={{ width: 200, height: 200 }}
      />
      <Button title="Play" onPress={playAnimation} />
      <Button title="Pause" onPress={pauseAnimation} />
    </>
  );
};
```
