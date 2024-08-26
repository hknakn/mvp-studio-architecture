---
sidebar_position: 11
---

# Versioning

Proper versioning is important for managing the app's lifecycle, tracking changes, and ensuring updates. Our boilerplate follows Semantic Versioning (SemVer) and includes tools to automate the versioning process.

## Semantic Versioning

We follow the Semantic Versioning specification (SemVer). Each version number is in the format of MAJOR.MINOR.PATCH:

- MAJOR version for incompatible API changes
- MINOR version for adding functionality in a backward-compatible manner
- PATCH version for backward-compatible bug fixes

## Version Management

We use `react-native-version` to manage versions across both iOS and Android projects:

```json
{
  "scripts": {
    "version": "react-native-version"
  }
}
```

To bump the version:

```bash
npm version patch  # or minor, or major
```

This will update the version in `package.json`, `android/app/build.gradle`, and `ios/YourApp/Info.plist`.

## Git Tags

We use Git tags to mark release points in our repository:

```bash
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin v1.1.0
```

## Release Process

1. Ensure all changes for the release are merged into the main branch.
2. Run `npm version [patch|minor|major]` to bump the version.
3. Push the changes and the new tag to the remote repository.
4. Create a new release on GitHub, using the tag and the changelog entry.
5. Trigger the CI/CD pipeline to build and deploy the new version.
