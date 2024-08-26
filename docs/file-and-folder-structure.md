# File and Folder Structure

This document outlines the file and folder structure of our MVP Studio Boilerplate. It provides an overview of the key directories and files in the project, along with their purposes and organization.

## Root Structure

```
/
├── src/
├── __tests__/
├── android/
├── ios/
├── .github/
├── .husky/
├── .vscode/
├── assets/
├── App.tsx
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── tsconfig.json
└── README.md
```

### Key Directories and Files

- `src/`: Contains the main source code of the application.
- `__tests__/`: Houses all test files.
- `android/` and `ios/`: Native code for respective platforms.
- `.github/`: GitHub-specific files, including CI/CD workflows.
- `.husky/`: Git hooks for maintaining code quality.
- `.vscode/`: VS Code configuration for consistent developer experience.
- `assets/`: Static assets like images and fonts.
- `App.tsx`: The root component of the React Native app.
- Configuration files: `app.json`, `babel.config.js`, `metro.config.js`, `tsconfig.json`.

## Source Directory Structure

The `src/` directory is organized as follows:

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   └── ProjectComponent.tsx
├── screens/
├── navigation/
├── services/
├── hooks/
├── utils/
├── store/
├── styles/
├── types/
└── localization/
```

### Components (`src/components/`)

Contains reusable components.

- `ui/`: Basic UI components like buttons, inputs, cards.
- Other reusable components for project like `ProjectComponent.tsx`.

### Screens (`src/screens/`)

Contains components that represent entire screens in the app. Organized by feature or flow:

```
screens/
├── auth/
│   ├── LoginScreen.tsx
│   ├── SignupScreen.tsx
│   └── ForgotPasswordScreen.tsx
├── home/
│   ├── HomeScreen.tsx
│   └── DetailScreen.tsx
├── profile/
│   ├── ProfileScreen.tsx
│   └── SettingsScreen.tsx
└── onboarding/
    └── OnboardingScreens.tsx
```

### Navigation (`src/navigation/`)

Houses navigation-related files, including route definitions and navigation utilities:

```
navigation/
├── RootNavigator.tsx
├── AuthNavigator.tsx
├── MainNavigator.tsx
├── linking.ts
└── types.ts
```

### Services (`src/services/`)

Contains modules for interacting with external services, APIs, or device features:

```
services/
├── api.ts
├── AuthService.ts
├── StorageService.ts
└── PurchaseManager.ts
```

### Hooks (`src/hooks/`)

Custom React hooks that can be shared across components:

```
hooks/
├── useAppNavigation.ts
├── useAppSelector.ts
├── useAppDispatch.ts
└── useStorageItem.ts
```

### Utils (`src/utils/`)

Utility functions and helper modules:

```
utils/
├── formatting.ts
├── validation.ts
├── permissions.ts
└── errorHandling.ts
```

### Store (`src/store/`)

State management files, including Redux slices, actions, and the store configuration:

```
store/
├── index.ts
├── rootReducer.ts
├── slices/
│   ├── authSlice.ts
│   └── userSlice.ts
└── middleware/
    └── apiErrorMiddleware.ts
```

### Styles (`src/styles/`)

Global styles, themes, and styling utilities:

```
styles/
├── theme.ts
├── globalStyles.ts
└── mixins.ts
```

### Types (`src/types/`)

TypeScript type definitions shared across the application:

```
types/
├── api.ts
├── navigation.ts
└── state.ts
```

### Localization (`src/localization/`)

Internationalization-related files:

```
localization/
├── i18n.ts
└── translations/
    ├── en.json
    └── es.json
```
