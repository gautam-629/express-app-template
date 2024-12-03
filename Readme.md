# 🚀 Checklist for the Express Project Initial Setup

- [ ] Git setup
- [ ] Node version manager setup
- [ ] Node.js project setup
- [ ] TypeScript setup
- [ ] Prettier setup
- [ ] ESLint setup
- [ ] Git hooks setup
- [ ] Application config setup
- [ ] Express.js app setup
- [ ] Logger setup
- [ ] Error handling setup
- [ ] Tests setup
- [ ] Create template

---

# Git and Version Control Guide

## Advantages of Git

Git is a powerful version control system that offers numerous benefits for software development:

### Version Control

Git allows developers to track and manage changes in their codebase over time. You can:

- Revert to previous versions of your code
- Understand how and when specific changes were made
- Maintain a complete history of your project's evolution

### Safety and Experimentation

One of Git's most powerful features is the ability to create branches:

- Developers can create separate branches for new features or experiments
- Test and develop without risking the stability of the main codebase
- Safely explore new ideas without fear of breaking existing code

### Code Documentation

Commit messages serve as a critical documentation tool:

- Provide clear, descriptive explanations of code changes
- Create a narrative of the project's development
- Help team members understand the context and reasoning behind modifications

### Collaboration

Git enables seamless collaborative development:

- Multiple developers can work on different branches simultaneously
- Merge changes from various contributors into the main branch
- Support parallel development and distributed work environments

### Conflict Resolution

Git provides robust mechanisms for handling conflicts:

- Identifies and highlights code conflicts during merges
- Allows developers to manually resolve differences
- Provides tools to compare and integrate divergent code changes

### Code Review

Git facilitates thorough code review processes:

- Enable pull requests for detailed code examination
- Allow team members to provide feedback on proposed changes
- Maintain code quality through collaborative review

### Accountability

Version control ensures transparency and accountability:

- Track who made specific changes
- Understand when and why modifications were implemented
- Maintain a clear audit trail of project development

### Backup and Redundancy

Git serves as a comprehensive backup solution:

- Distributed version control means multiple copies of the project exist
- Each clone contains the complete project history
- Provides protection against data loss

## Branch Naming Conventions

### Best Practices for Branch Names

Consistent branch naming helps improve project organization and collaboration:

#### Types of Branches

1. **Feature Branches**

   - Prefix: `feature/`
   - Example: `feature/user-authentication`
   - Used for developing new features

2. **Bugfix Branches**

   - Prefix: `bugfix/` or `fix/`
   - Example: `bugfix/login-page-error`
   - For fixing specific bugs or issues

3. **Hotfix Branches**

   - Prefix: `hotfix/`
   - Example: `hotfix/security-vulnerability`
   - For critical fixes that need immediate attention

4. **Release Branches**

   - Prefix: `release/`
   - Example: `release/v1.2.0`
   - Preparing for a new production release

5. **Refactor Branches**
   - Prefix: `refactor/`
   - Example: `refactor/database-connection`
   - For code improvements without changing functionality

### Branch Naming Guidelines

- Use lowercase letters
- Replace spaces with hyphens
- Be descriptive but concise
- Include relevant issue or ticket numbers if applicable
- Avoid generic names like "patch" or "update"

#### Example Workflow

```bash
# Creating a new feature branch
git checkout -b feature/user-registration

# Creating a bugfix branch
git checkout -b bugfix/email-validation

# Switching between branches
git checkout main
git checkout feature/user-registration
```

## The `.gitignore` File

### Purpose

A `.gitignore` file is crucial for managing which files Git tracks:

- Excludes unnecessary files from version control
- Prevents cluttering the repository with temporary or system-specific files
- Protects sensitive information from being accidentally committed

### What to Exclude

Typical files to ignore include:

- Compiled binaries
- Temporary files
- IDE-specific configuration files
- Environment-specific settings
- Sensitive credentials

### Creating a `.gitignore` File

To generate a `.gitignore` file:

1. Open your code editor
2. Use the Command Palette:
   - macOS: `Shift + CMD + P`
   - Windows/Linux: `Shift + CTRL + P`
3. Select "Generate .gitignore File"
4. Choose the appropriate template for your project

## Basic Git Commands

### Initializing a Repository

```bash
# Start tracking changes in a project
git init
```

### Staging Changes

```bash
# Stage all changes in the current directory
git add .
```

### Committing Changes

```bash
# Save current project state with a descriptive message
git commit -m "Your descriptive message here"
```

### Branch Management

```bash
# Create and switch to a new branch
git checkout -b feature/new-feature

# List all branches
git branch -a

# Rename default branch to 'main'
git branch -M main
```

### Remote Repository Connection

```bash
# Connect local project to remote repository
git remote add origin [repository-url]

# Upload changes to remote repository
git push -u origin feature/new-feature
```

## Additional Notes

### Hidden Files and Folders

- Files and folders starting with a dot (.) are hidden by default
- Use `ls -a` to list all files, including hidden ones

## Best Practices

- Write clear, concise commit messages
- Commit frequently
- Use descriptive branch names
- Create separate branches for different types of work
- Review code before merging
- Keep branches short-lived
- Regularly pull changes from the main branch
- Clean up merged and obsolete branches

## Recommended Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Learning Resources](https://docs.github.com/en/get-started/learning-about-git)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

# NVM (Node Version Manager) Guide

## What is NVM?

NVM (Node Version Manager) is a powerful tool that allows developers to:

- Install multiple versions of Node.js
- Switch between Node.js versions seamlessly
- Manage different Node.js environments for various projects
- Avoid system-wide Node.js installation conflicts

## Installation

### macOS/Linux Installation

```bash
# Install using curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install using wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Windows Installation

1. Use NVM for Windows from GitHub
2. Download installer from official repository
3. Follow installation instructions

## Post-Installation Setup

### Verify Installation

```bash
# Check NVM version
nvm --version

# Verify installation
command -v nvm
```

### Shell Configuration

- For bash: Edit `~/.bashrc` or `~/.bash_profile`
- For zsh: Edit `~/.zshrc`
- Restart terminal or run `source ~/.bashrc`

## Basic NVM Commands

### Version Management

```bash
# List installed Node.js versions
nvm list
nvm ls

# List remote Node.js versions
nvm ls-remote

# Install specific Node.js version
nvm install 18.16.0

# Install latest LTS version
nvm install --lts

# Use a specific version
nvm use 18.16.0

# Set default Node.js version
nvm alias default 18.16.0
```

### Advanced Version Management

```bash
# Install and use specific version
nvm install 20.0.0 --default

# Uninstall a Node.js version
nvm uninstall 16.14.0

# Run specific version without changing default
nvm run 18.16.0 --version
```

## `.nvmrc` File

### Purpose

- Specify project-specific Node.js version
- Ensure consistent environments across development teams

### Creating `.nvmrc`

```bash
# Create .nvmrc in project root
echo "18.16.0" > .nvmrc

# Automatically use version in .nvmrc
nvm use
```

### Example `.nvmrc` Workflow

```bash
# Project setup
git clone project-repo
cd project-directory

# Automatically use correct Node.js version
nvm use
npm install
```

## Performance and Troubleshooting

### Performance Tips

- Use LTS (Long Term Support) versions
- Regularly update NVM
- Clear npm cache periodically

### Common Troubleshooting

```bash
# Verify NVM installation
nvm diagnostics

# Reinstall NVM if issues persist
# (Follow initial installation steps)

# Check shell configuration
echo $NVM_DIR
```

## Best Practices

### Version Management

- Use LTS versions for production
- Test with multiple Node.js versions
- Update dependencies regularly
- Use `.nvmrc` for project consistency

### Security

```bash
# Check npm package vulnerabilities
npm audit

# Update npm
npm install -g npm@latest
```

## Integration with Development Workflow

### Continuous Integration

- Include `.nvmrc` in repository
- Configure CI to use specified Node.js version
- Use `nvm install` in CI scripts

### Project-Specific Configurations

```json
{
  "engines": {
    "node": ">=18.16.0"
  },
  "scripts": {
    "preinstall": "node --version"
  }
}
```

## Advanced NVM Features

### Persistent Aliases

```bash
# Create persistent version alias
nvm alias awesome-project 18.16.0

# Use aliased version
nvm use awesome-project
```

### Automatic Version Switching

- Use `avn` (Automatic Version Switching) for seamless transitions
- Install via `npm install -g avn avn-nvm`

## Recommended Resources

- [NVM GitHub Repository](https://github.com/nvm-sh/nvm)
- [Node.js Official Website](https://nodejs.org/)
- [npm Documentation](https://docs.npmjs.com/)

## Limitations and Considerations

- Not recommended for production deployments
- Slight performance overhead
- Requires additional shell configuration
- Windows support is community-maintained

## Contribution and Support

- Report issues on GitHub
- Contribute to open-source development
- Join community discussions
