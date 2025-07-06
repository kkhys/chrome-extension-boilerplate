# Chrome Extension Boilerplate

A modern Chrome extension boilerplate using cutting-edge web technologies.

## Overview

This project provides a boilerplate for efficiently developing Chrome extensions. It combines Manifest V3, TypeScript, Vite, and Biome to offer a modern, maintainable development environment.

## Tech Stack

- **Framework**: Vite
- **Language**: TypeScript
- **Chrome Extension**: Manifest V3
- **Build Plugin**: @crxjs/vite-plugin
- **Code Quality**: Biome
- **Package Manager**: pnpm
- **Runtime**: Node.js (managed by Volta)

## Project Structure

```
chrome-extension-boilerplate/
├── public/
│   ├── _locales/          # Internationalization files
│   │   ├── en/messages.json
│   │   └── ja/messages.json
│   └── images/            # Icon files
│       ├── icon-16.png
│       ├── icon-32.png
│       ├── icon-48.png
│       └── icon-128.png
├── src/                   # Source code (empty directory)
├── biome.json            # Biome configuration
├── manifest.config.ts    # Chrome extension manifest configuration
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Features

### Development Environment

- **Fast Build**: High-speed development server and build with Vite
- **TypeScript**: Strict type checking (strict: true)
- **Code Quality**: Automatic formatting and linting with Biome
- **Hot Reload**: Automatic reload during development
- **ZIP Packaging**: Automatic ZIP generation for releases

### Chrome Extension

- **Manifest V3**: Latest Chrome extension APIs
- **Internationalization**: Japanese and English support
- **Icons**: Multiple icon sizes supported
- **Development Mode**: `[development]` prefix in name during development

### Build Configuration

- **Aliases**: `#/*` path alias for `src/*`
- **CORS Settings**: CORS configuration for Chrome extensions
- **Release**: Automatic ZIP compression for release preparation

## Setup

### Requirements

- Node.js (Volta management recommended)
- pnpm

### Installation

```bash
# Clone the project
git clone <repository-url>
cd chrome-extension-boilerplate

# Install dependencies
pnpm install
```

## Development

### Start Development Server

```bash
# Start in development mode
pnpm dev
```

### Build

```bash
# Production build
pnpm build
```

### Code Quality Check

```bash
# Lint and format check
pnpm lint

# Auto-fix
pnpm lint:fix
```

### Loading Chrome Extension

1. Run `pnpm dev` or `pnpm build`
2. Open `chrome://extensions/` in Chrome
3. Enable "Developer mode"
4. Click "Load unpacked extension"
5. Select the `dist` folder

## Configuration Details

### TypeScript Configuration

- **Target**: ESNext
- **Module**: ESNext (bundler)
- **Strict**: strict, noUnusedLocals, noUnusedParameters enabled
- **Types**: Includes Chrome API and Vite client types

### Biome Configuration

- **Formatter**: Space indentation, double quotes
- **Linter**: Recommended rules enabled
- **Imports**: Automatic import organization

### Internationalization

Manage messages under `public/_locales/`:

- `chrome_extension_name`: Extension name
- `chrome_extension_description`: Extension description

## Improvement Suggestions

**Time-Saving Automation**:
- Add GitHub Actions for CI/CD automation (~30 min/release saved)
- Setup pre-commit hooks (~5 min/commit saved)
- Introduce testing framework (Jest/Vitest recommended)

**Code Quality Enhancement**:
- Custom ESLint configuration
- Consider Prettier integration
- Add source code examples (popup, content script, background)

**Development Efficiency**:
- Environment variable management (dotenv)
- Add debugging configurations
- Prepare to store package metadata

## License

See `license.md` for license details of this project.

## Contributing

Contributions to the project are welcome. Feel free to submit issue reports and pull requests.
