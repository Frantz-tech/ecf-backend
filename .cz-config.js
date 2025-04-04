export const types = [
  { value: 'feat', name: 'feat:     A new feature' },
  { value: 'fix', name: 'fix:      A bug fix' },
  { value: 'docs', name: 'docs:     Documentation only changes' },
  {
    value: 'style',
    name: 'style:    Changes that do not affect the meaning of the code (white-space, formatting, etc)',
  },
  { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
  { value: 'perf', name: 'perf:     A code change that improves performance' },
  { value: 'test', name: 'test:     Adding missing tests or correcting existing tests' },
  { value: 'chore', name: "chore:    Other changes that don't modify src or test files" },
];

export const messages = {
  type: "Select the type of change that you're committing:",
  scope: 'Denote the scope of this change (optional):',
  customScope: 'Denote the scope of this change (optional):',
  subject: 'Write a short, imperative tense description of the change (max 100 chars):',
  body: 'Provide a longer description of the change (optional). Use "|" to break new lines:',
  breaking: 'List any breaking changes (optional):',
  footer: 'List any issues closed by this change (optional). E.g. #31, #34:',
  confirmCommit: 'Are you sure you want to proceed with the commit above?',
};

export const footerPrefix = 'Closes';
