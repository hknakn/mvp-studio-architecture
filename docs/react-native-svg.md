# React Native SVG

React Native SVG is a library that provides SVG support for React Native applications. It allows you to use SVG files as components and even animate them.

## Usage in MVP Studio Boilerplate

### Basic SVG Rendering

Here's an example of rendering an SVG using React Native SVG:

```typescript
import React from "react";
import { View } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

const SvgExample = () => {
  return (
    <View>
      <Svg height="100" width="100">
        <Rect x="0" y="0" width="100" height="100" fill="black" />
        <Circle cx="50" cy="50" r="30" fill="yellow" />
      </Svg>
    </View>
  );
};
```

### SVG from File

You can also import SVG files and use them as components:

```typescript
import React from "react";
import { View } from "react-native";
import Logo from "./logo.svg";

const LogoExample = () => {
  return (
    <View>
      <Logo width={100} height={100} />
    </View>
  );
};
```
