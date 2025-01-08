# TypeScript ESLint: Comprehensive Guide

## 📘 Introduction to TypeScript ESLint

### What is TypeScript ESLint?

TypeScript ESLint is a powerful linting tool that provides static code analysis
for TypeScript projects. It helps developers:

- Identify potential errors and code quality issues
- Enforce consistent coding styles
- Catch common programming mistakes
- Improve overall code maintainability

### Why Use ESLint with TypeScript?

- **Error Prevention**: Catch potential bugs before runtime
- **Code Consistency**: Maintain uniform code standards across team projects
- **Best Practices**: Enforce industry-standard coding guidelines
- **Improved Readability**: Ensure clean, predictable code structure

## 🛠 Installation and Setup

### Basic Installation

```bash
npm install --save-dev eslint @eslint/js typescript typescript-eslint
```

### Configuration File (`eslint.config.mjs`)

```javascript
// @ts-check
// @ts-check
// @ts-check
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-console': 'warn',
    },
    ignores: ['node_modules', 'dist'],
  },
];
```

## 🖥️ ESLint Commands

### Basic Linting Commands

```bash
# Check files for linting errors
npx eslint .

# Check specific files or directories
npx eslint src/ tests/

# Check specific file types
npx eslint "**/*.{ts,tsx}"
```

### Fixing Linting Issues

```bash
# Automatically fix simple issues
npx eslint . --fix

# Fix specific files
npx eslint src/ --fix

# Dry run (shows what would be fixed)
npx eslint . --fix-dry-run

# Detailed output during fixing
npx eslint . --fix --debug
```

### Advanced Linting Options

```bash
# Format output as a specific type
npx eslint . --format json
npx eslint . --format stylish

# Ignore specific files
npx eslint . --ignore-path .gitignore

# Output warnings along with errors
npx eslint . --max-warnings 10
```

### Integration with Package Scripts

```json
{
  "scripts": {
    "lint:check": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## 🏆 Best Practices and Recommended Rules

### Type Safety Rules

```javascript
{
  rules: {
    '@typescript-eslint/no-explicit-any': 'error', // Avoid 'any' type
    '@typescript-eslint/strict-boolean-expressions': 'error', // Strict boolean checks
    '@typescript-eslint/no-unnecessary-type-assertion': 'error'
  }
}
```

### Code Quality Rules

```javascript
{
  rules: {
    'complexity': ['warn', 10], // Limit cyclomatic complexity
    'max-lines-per-function': ['warn', 50], // Function length limit
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error'
  }
}
```

## 🚀 Advanced Configuration

### Integrating with Different Environments

```javascript
// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ['node_modules', 'dist'],
    rules: {
      'no-console': 'error',
    },
  }
);
```

## 💡 Common Pitfalls to Avoid

1. Don't use `any` type unnecessarily
2. Avoid over-complicated type definitions
3. Be consistent with error handling
4. Limit function complexity
5. Use strict null checks

## 🛡️ Error Handling and Logging

```javascript
{
  rules: {
    '@typescript-eslint/no-throw-literal': 'error', // Ensure proper error throwing
    '@typescript-eslint/no-unnecessary-condition': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }]
  }
}
```

## 📦 Recommended Plugins

- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-import`
- `eslint-plugin-unused-imports`

## 🤝 Team Collaboration

- Commit ESLint configuration to version control
- Use pre-commit hooks for automatic linting
- Regularly update ESLint and TypeScript dependencies

## 🔧 Troubleshooting

- Ensure consistent TypeScript version
- Check for conflicting ESLint configurations
- Validate `tsconfig.json` settings
- Use `--debug` flag for detailed error information

## 📚 Resources

- [Official TypeScript ESLint Documentation](https://typescript-eslint.io/)
- [ESLint Rules Reference](https://eslint.org/docs/rules/)
