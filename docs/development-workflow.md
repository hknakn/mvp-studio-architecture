---
sidebar_position: 15
---

# Development Workflow

Our boilerplate includes several tools and configurations to improve the development workflow, making it easier to maintain code quality and consistency across the project.

## Husky for Git Hooks

We use Husky to manage Git hooks, ensuring that certain checks are run before commits and pushes.

### Pre-commit Hook

Our pre-commit hook runs the following checks:

1. Linting with ESLint
2. Type checking with TypeScript
3. Formatting with Prettier

This is configured in `.husky/pre-commit`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
npm run type-check
npm run format
```

### Pre-push Hook

The pre-push hook runs our test suite:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm test
```

## Absolute Imports

We've configured absolute imports to make it easier to import modules without needing to use long relative paths. This is set up in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Now you can import modules like this:

```typescript
import { Button } from "@/components/ui";
import { useUser } from "@/hooks/useUser";
```
