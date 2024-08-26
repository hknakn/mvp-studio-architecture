---
sidebar_position: 1
---

# Elements

Our boilerplate includes a set of reusable React Native elements that help maintain consistency and speed up development.

- [Avatar](#avatar)
- [Badge](#badge)
- [Button](#button)
- [Card](#card)
- [Checkbox](#checkbox)
- [Input](#input)
- [ProgressBar](#progressbar)
- [Image](#image)
- [Slider](#slider)
- [Toggle](#toggle)
- [Text](#text)
- [Alert](#alert)
- [DatePicker](#datepicker)
- [Picker](#picker)
- [SegmentedControl](#segmentedcontrol)

## Avatar

A circular image component for user profiles.

```jsx
import { Avatar } from "@/elements/ui";

<Avatar source={{ uri: "https://example.com/avatar.jpg" }} size="medium" />;
```

**Key Props:**

- `source`: Image source (required)
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `onPress`: Function to call when avatar is pressed

## Badge

A small status indicator component.

```jsx
import { Badge } from "@/elements/ui";

<Badge value={5} status="error" />;
```

**Key Props:**

- `value`: Number or string to display
- `status`: 'primary' | 'success' | 'warning' | 'error' (default: 'primary')
- `container`: Component to wrap the badge (optional)

## Button

A customizable button component.

```jsx
import { Button } from "@/elements/ui";

<Button
  title="Press me"
  onPress={() => console.log("Button pressed")}
  type="outline"
/>;
```

**Key Props:**

- `title`: Button text (required)
- `onPress`: Function to call when button is pressed (required)
- `type`: 'solid' | 'outline' | 'clear' (default: 'solid')
- `disabled`: Boolean to disable the button

## Card

A container component for grouping related content.

```jsx
import { Card } from "@/elements/ui";

<Card>
  <Card.Title>Card Title</Card.Title>
  <Card.Divider />
  <Card.Image source={{ uri: "https://example.com/image.jpg" }} />
  <Text>Card content goes here</Text>
</Card>;
```

**Key Props:**

- `containerStyle`: Style object for the card container
- `wrapperStyle`: Style object for the card wrapper

## Checkbox

A selectable checkbox component.

```jsx
import { Checkbox } from "@/elements/ui";

<Checkbox
  checked={isChecked}
  onPress={() => setIsChecked(!isChecked)}
  title="I agree to the terms"
/>;
```

**Key Props:**

- `checked`: Boolean for the checkbox state (required)
- `onPress`: Function to call when checkbox is pressed (required)
- `title`: Text to display next to the checkbox

## Input

A text input component with built-in styling and validation.

```jsx
import { Input } from "@/elements/ui";

<Input
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
/>;
```

**Key Props:**

- `value`: Current value of the input (required)
- `onChangeText`: Function to call when text changes (required)
- `placeholder`: Placeholder text
- `secureTextEntry`: Boolean for password input

## ProgressBar

A progress indicator component.

```jsx
import { ProgressBar } from "@/elements/ui";

<ProgressBar value={0.7} color="primary" />;
```

**Key Props:**

- `value`: Number between 0 and 1 indicating progress (required)
- `color`: Color of the progress bar

## Image

An enhanced image component with loading placeholder and error handling.

```jsx
import { Image } from "@/elements/ui";

<Image
  source={{ uri: "https://example.com/image.jpg" }}
  style={{ width: 200, height: 200 }}
/>;
```

**Key Props:**

- `source`: Image source (required)
- `PlaceholderContent`: Component to render while image is loading
- `onError`: Function to call if image fails to load

## Slider

A draggable slider component for selecting a value from a range.

```jsx
import { Slider } from "@/elements/ui";

<Slider
  value={sliderValue}
  onValueChange={setSliderValue}
  minimumValue={0}
  maximumValue={100}
/>;
```

**Key Props:**

- `value`: Current value of the slider (required)
- `onValueChange`: Function to call when value changes (required)
- `minimumValue`: Minimum value of the slider
- `maximumValue`: Maximum value of the slider

## Toggle

A toggle switch component.

```jsx
import { Toggle } from "@/elements/ui";

<Toggle isOn={isEnabled} onToggle={setIsEnabled} />;
```

**Key Props:**

- `isOn`: Boolean for the toggle state (required)
- `onToggle`: Function to call when toggle is pressed (required)
- `disabled`: Boolean to disable the toggle

## Text

A text component with built-in styling options.

```jsx
import { Text } from '@/elements/ui';

<Text h2>Heading 2</Text>
<Text>Regular text</Text>
```

**Key Props:**

- `h1`, `h2`, `h3`, `h4`: Boolean props for heading styles
- `style`: Additional style object

## Alert

A customizable alert component.

```jsx
import { Alert } from "@/elements/ui";

<Alert title="Success!" type="success" message="Your action was successful." />;
```

**Key Props:**

- `title`: Alert title (required)
- `type`: 'success' | 'warning' | 'error' | 'info'
- `message`: Alert message

## DatePicker

A date selection component.

```jsx
import { DatePicker } from "@/elements/ui";

<DatePicker value={date} onChange={setDate} mode="date" />;
```

**Key Props:**

- `value`: Selected date (required)
- `onChange`: Function to call when date changes (required)
- `mode`: 'date' | 'time' | 'datetime'

## Picker

A selection component for choosing from a list of options.

```jsx
import { Picker } from "@/elements/ui";

<Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>;
```

**Key Props:**

- `selectedValue`: Currently selected value (required)
- `onValueChange`: Function to call when selection changes (required)

## SegmentedControl

A segmented control component for selecting between multiple options.

```jsx
import { SegmentedControl } from "@/elements/ui";

<SegmentedControl
  values={["Daily", "Weekly", "Monthly"]}
  selectedIndex={selectedIndex}
  onChange={(index) => setSelectedIndex(index)}
/>;
```

**Key Props:**

- `values`: Array of segment labels (required)
- `selectedIndex`: Index of the selected segment (required)
- `onChange`: Function to call when selection changes (required)
