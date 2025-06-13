
# 🔐 Portal - React Advanced Login

This is a frontend project built with **React**, **TypeScript**, and **Material UI**, implementing a complete authentication flow (Sign In, Sign Up, Sign Out) with **mocked API services via MSW**.

The goal is to provide a robust, scalable boilerplate for modern applications, with a focus on clean architecture, testing, internationalization, and developer productivity.

---

## 📦 Stack & Technologies

- **React 19** + **React Router 7** – Component-based navigation.
- **TypeScript** – Static typing for safety and scalability.
- **Material UI** – Customizable, accessible UI components.
- **MSW (Mock Service Worker)** – Mocked APIs for decoupled frontend development.
- **React Hook Form** + **Zod** – Robust and declarative form validation.
- **Zod-i18n-map** – Translated error messages for forms.
- **Jest** + **React Testing Library** – Behavior-driven unit testing.
- **Storybook** – Visual component explorer with documentation support.
- **i18next** – Internationalization with `pt` and `en` support.
- **Husky** – Git hooks for enforcing code quality.
- **ESLint** – Linting for clean and consistent code.
- **Vite** – Ultra-fast build tool.
- **Dark/Light Mode** – Toggle and configure via `theme.ts`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Yarn or npm

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the app

```bash
npm run dev
# or
yarn dev
```

App will be available at: `http://localhost:5173`

### 3. Run tests

```bash
npm run test
# or
yarn test
```

### 4. Start Storybook

```bash
npm run storybook
# or
yarn storybook
```

---

## ⚙️ Environment Configuration

Create a `.env` file at the root of your project with the following variables:

```env
VITE_API_URL=http://localhost:3000/api
VITE_FEATURE_FLAG=mocks  # Use "mocks" for MSW or "api" for real API
```

### 🔄 Switching Between Mocked and Real API

The app uses MSW by default. To switch between mocked service and real backend:

- Set `VITE_FEATURE_FLAG=mocks` to use MSW
- Set `VITE_FEATURE_FLAG=api` to call a real backend API

---

## 🌗 Theme Configuration (Dark/Light Mode)

This project supports dark and light themes out of the box. You can customize the color palette, typography, or other MUI theme options in:

```
src/shared/styles/theme.ts
```

Users can toggle the theme through the UI, and the selected mode will persist.

---

## 🗂 Project Structure

This project follows a **Feature First** architecture:

```
📦src
 ┣ 📂features         # Domain-specific logic (Auth, etc.)
 ┃ ┣ 📂Auth           # Login, signup, context, services, etc.
 ┃ ┗ 📂PageExample    # Additional pages/features
 ┣ 📂shared           # Reusable components, styles, themes
 ┣ 📂i18n             # Translations and language logic
 ┣ 📂mocks            # MSW handlers and mock data
 ┣ 📂stories          # Storybook components
 ┣ 📂utils            # Helpers and utilities
 ┣ 📂app              # Routing and core app logic
 ┗ 📜main.tsx         # Entry point
```

---

## 🧪 Testing

- **Jest** and **React Testing Library** are used for unit tests
- **MSW** is used for mocking network requests during tests
- Coverage reporting is included

Run tests:

```bash
npm run test
```

---

## 📖 Storybook

Run Storybook locally:

```bash
http://localhost:6006
```

All components are documented in the `src/stories` folder.

---

## 🌐 Internationalization (i18n)

- Supported languages: **English (en)** and **Portuguese (pt)**
- All validation errors (Zod) and UI texts are translated
- Language can be changed via a toggle in the header

---

## 🧹 Git Hooks and Code Linting

Git hooks are set up using **Husky** to run linting and formatting on every commit.

Install hooks locally:

```bash
npx husky install
```

Run lint:

```bash
npm run lint
```

---

## 📁 Feature Example: `features/Auth`

- `components/` – Screens and visual elements
- `contexts/` – Authentication context (login state, session)
- `contracts/` – Type definitions for service communication
- `schemas/` – Form validation schemas with Zod
- `services/` – Business logic for API interactions
- `mocks/` – Mock data and handlers for MSW
- `tests/` – Unit tests specific to authentication

---

## 📜 Available Scripts

| Command                | Description                              |
|------------------------|------------------------------------------|
| `dev`                  | Start app with Vite and MSW              |
| `build`                | Compile the app                          |
| `preview`              | Preview the production build             |
| `test`                 | Run all unit tests                       |
| `lint`                 | Run ESLint on all source files           |
| `storybook`            | Start the Storybook server               |
| `build-storybook`      | Generate static Storybook build          |
| `prepare`              | Install Husky Git hooks                  |

---

## ✅ Is Up To you to implement

- 🔗 Backend API integration
- 🛡️ Secure token storage with full AuthProvider implementation
- 🐳 Docker support for local development
- 🚀 CI/CD pipeline using GitHub Actions
- 🧩 Form wizard for multi-step sign-up

---

## 🤝 Contributing

Feel free to open issues or pull requests. This project is great for learning and improving your frontend skills.

---

## 👨‍💻 Author

**Gustavo Arndt** – Frontend Developer

---

## 📝 License

This project is licensed under the MIT License.
