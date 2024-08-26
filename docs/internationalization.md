---
sidebar_position: 6
---

# Internationalization

Our boilerplate comes pre-configured with internationalization (**i18n**) support using the `i18n-js` library and `react-native-localize`. This setup allows you to easily create a multi-language app and adapt to different locales.

## How It Works

The internationalization system in our boilerplate works as follows:

1. Translations are stored in JSON files (one for each supported language).
2. The app detects the user's preferred language using `react-native-localize`.
3. The appropriate translation file is loaded and used throughout the app.

## Usage

Here's how to use internationalization in your components:

```typescript
import i18n from "@/localization/i18n";

function MyComponent() {
  return (
    <View>
      <Text>{i18n.t("welcome")}</Text>
      <Text>{i18n.t("greeting", { name: "John" })}</Text>
    </View>
  );
}
```

## Adding New Translations

To add a new language:

1. Create a new JSON file in the `src/localization/translations` folder (e.g., `fr.json` for French).
2. Add your translations to this file:

```json
{
  "welcome": "Bienvenue dans notre application !",
  "greeting": "Bonjour, {{name}} !"
}
```

3. Update the `src/localization/i18n.ts` file to include the new language:

```typescript
import en from "./translations/en.json";
import fr from "./translations/fr.json";

i18n.translations = { en, fr };
```

## Changing the Language

To change the app's language programmatically:

```typescript
import i18n from "@/localization/i18n";

function changeLanguage(languageCode: string) {
  i18n.locale = languageCode;
}
```
