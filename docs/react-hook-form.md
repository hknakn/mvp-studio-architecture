# React Hook Form

React Hook Form is a library for managing forms in React applications. It provides an efficient and flexible way to handle form state and validation.

## Usage in MVP Studio Boilerplate

### Basic Form

Here's an example of a basic form using React Hook Form:

```typescript
import React from "react";
import { View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";

const LoginForm = () => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && <Text>This field is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Password"
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: true, minLength: 6 }}
        defaultValue=""
      />
      {errors.password && <Text>Password must be at least 6 characters.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
```
