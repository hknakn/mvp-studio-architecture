import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Project Setup',
      items: ['getting-started', 'tech-stack', 'architecture', 'file-and-folder-structure'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: ['navigation', 'state-management', 'data-handling'],
    },
    {
      type: 'category',
      label: 'UI and UX',
      items: ['elements', 'screens', 'theming', 'styling'],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'authentication',
        'database',
        'push-notifications',
        'feature-flagging',
        'in-app-purchases',
        'internationalization',
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: ['testing', 'ci-cd', 'error-tracking', 'versioning', 'development-workflow', 'security'],
    },
    {
      type: 'category',
      label: 'Third Party Libraries',
      items: ['MMKV', 'reanimated', 'skottie', 'react-hook-form', 'react-native-svg', 'haptics'],
    },
  ],
};

export default sidebars;