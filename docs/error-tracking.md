---
sidebar_position: 9
---

# Error Tracking

Our boilerplate integrates **Sentry** for error tracking and performance monitoring. This integration helps you identify, diagnose, and fix issues in real-time, ensuring a smooth user experience for your app.

## Sentry Integration

Sentry is pre-configured in our boilerplate, so you can start tracking errors and monitoring performance right away. Here's how it's set up:

```javascript
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  enableAutoSessionTracking: true,
  sessionTrackingIntervalMillis: 10000,
  tracesSampleRate: 1.0,
});
```

## Key Features

1. **Automatic Error Reporting**: Unhandled exceptions are automatically captured and sent to Sentry.

2. **Performance Monitoring**: Track the performance of your app, including API calls and screen load times.

3. **Release Tracking**: Sentry is configured to track releases, helping you identify which version of your app is experiencing issues.

4. **User Context**: Automatically captures user information to help you understand which users are affected by issues.

5. **Breadcrumbs**: Sentry captures events that throws an error and making debugging easier.

## Usage in the Boilerplate

### Manual Error Logging

While unhandled exceptions are automatically reported, you can also manually log errors:

```javascript
import * as Sentry from "@sentry/react-native";

try {

} catch (error) {
  Sentry.captureException(error);
}
```

### Adding Context

Enhance your error reports with additional context:

```javascript
Sentry.setTag("page_locale", "en-US");
Sentry.setUser({ id: "12345", email: "user@example.com" });
```

### Performance Monitoring

Track the performance of specific operations:

```javascript
import * as Sentry from "@sentry/react-native";

const transaction = Sentry.startTransaction({ name: "Processing Data" });
Sentry.getCurrentHub().configureScope((scope) => scope.setSpan(transaction));

transaction.finish();
```

### React Navigation Integration

The boilerplate includes Sentry integration with React Navigation for automatic breadcrumb tracking:

```javascript
import * as Sentry from "@sentry/react-native";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer
      onReady={() => {
        Sentry.addBreadcrumb({
          category: "navigation",
          message: "App ready",
          level: Sentry.Severity.Info,
        });
      }}
    />
  );
}
```

## Customizing Sentry

You can customize the Sentry configuration in `src/config/sentry.ts`:

```javascript
import * as Sentry from "@sentry/react-native";

export const initSentry = () => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.ENVIRONMENT,
    enableAutoSessionTracking: true,
    sessionTrackingIntervalMillis: 10000,
    tracesSampleRate: process.env.ENVIRONMENT === "production" ? 0.2 : 1.0,
    beforeSend: (event) => {
      // You can modify events here
      return event;
    },
  });
};
```

## Viewing and Managing Errors

Access your Sentry dashboard to view and manage reported errors. The dashboard provides features like:

- Error grouping and prioritization
- Release tracking
- Performance monitoring
- User feedback collection
