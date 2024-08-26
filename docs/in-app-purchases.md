---
sidebar_position: 12
---

# In-App Purchases and Subscriptions

Our boilerplate integrates **RevenueCat** to handle in-app purchases and subscriptions, providing a robust and easy-to-use system for monetization.

## Benefits of RevenueCat in Our Boilerplate

1. **Cross-platform consistency**: RevenueCat provides a unified API for both iOS and Android, simplifying our codebase.
2. **Subscription management**: Easily handle complex subscription logic, including upgrades, downgrades, and renewals.
3. **Analytics and insights**: Get detailed reports on revenue, churn, and other key metrics out of the box.
4. **Server-side receipt validation**: Improve security and reduce fraud without additional backend work.

## Using In-App Purchases

We've set up a `PurchaseManager` module that encapsulates RevenueCat functionality:

```typescript
import { PurchaseManager } from "@/services/PurchaseManager";

// Check if a user has an active subscription
const hasSubscription = await PurchaseManager.hasActiveSubscription();

// Get available products
const products = await PurchaseManager.getProducts();

// Make a purchase
try {
  await PurchaseManager.purchaseProduct("premium_monthly");
  // Handle successful purchase
} catch (error) {
  // Handle purchase error
}
```

## Implementing a Paywall

We've created a reusable `Paywall` component that you can easily customize:

```typescript
import { Paywall } from "@/components/Paywall";

function MyScreen() {
  return (
    <View>
      <Text>Upgrade to Premium!</Text>
      <Paywall
        products={["monthly", "yearly"]}
        onPurchase={(productId) => {
          // Handle successful purchase
        }}
      />
    </View>
  );
}
```

## Best Practices

1. Always verify the subscription status on the server-side before granting access to premium features.
2. Use the `PurchaseManager.restorePurchases()` method to handle restore purchases requests from users.
