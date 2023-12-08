# Opinionated React App repository starter

This repository serves as a template for creating React applications with the following features:

- Webpack build process for bundling and optimizing the application.
- Unit tests using Jest and React Testing Library for testing React components.
- Request mocking with MSW (Mock Service Worker) for simulating API responses during development and tests.
- Opinionated ESLint and Prettier for linting and formatting the code.
- I18next for internationalization and localization.
- Redux toolkit for state management and managing async actions (RTK Query).

## Getting Started

To use this template, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Run tests: `npm test`
5. Build the production-ready bundle: `npm run build`

## Directory Structure

The repository has the following directory structure:

- `public`: Contains the static assets that are copied to the build directory.
- `build`: Contains webpack build configuration files.
- `dist`: Contains the production-ready bundle of the application.
- `src`: Contains the source code of the React application.
  - `assets`: Contains static assets such as images, fonts, and stylesheets.
  - `components`: Contains React components.
  - `i18n`: Contains translations for the application.
  - `mocks`: Contains request mocks for simulating API responses.
  - `services`: Contains services for making API requests and other async actions.
  - `store`: Contains Redux store configuration and slices.
  - `utils`: Contains utility functions.

## License

This project is licensed under the [MIT License](LICENSE).
