# Next.js Template Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/[locale]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Scripts

- `npm run dev`: Runs the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production build.
- `npm run prod`: Exports the application as static files.
- `npm run lint`: Runs ESLint to lint the project.
- `npm run test`: Runs the tests using Jest.
- `npm run test:watch`: Runs the tests in watch mode.

## Troubleshooting

If you encounter issues during the build process, try setting the `NODE_ENV` to production and then running the build again:

```bash
export NODE_ENV=production
npm run build
```

## Dependencies

### Core Dependencies

- `next`: Framework for server-rendered React applications.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Serves as the entry point to the DOM and server renderers for React.

### UI Components

- `@radix-ui/react-checkbox`: Accessible checkbox component.
- `@radix-ui/react-icons`: Collection of icons.
- `@radix-ui/react-label`: Accessible label component.
- `@radix-ui/react-select`: Accessible select component.
- `@radix-ui/react-slot`: Slot component for flexible component composition.
- `lucide-react`: Icon library.

### Styling

- `tailwindcss`: Utility-first CSS framework.
- `autoprefixer`: Parses CSS and adds vendor prefixes.
- `tailwind-merge`: Utility to merge Tailwind CSS classes.
- `tailwindcss-animate`: Tailwind CSS plugin for animations.

### Utilities

- `clsx`: Utility for constructing `className` strings conditionally.
- `dotenv`: Loads environment variables from a `.env` file.

### Internationalization

- `next-intl`: Internationalization framework for Next.js.

### Linting and Formatting

- `eslint`: Linting utility for JavaScript and TypeScript.
- `eslint-config-next`: ESLint configuration for Next.js.
- `eslint-config-prettier`: Turns off all ESLint rules that are unnecessary or might conflict with Prettier.
- `prettier`: Code formatter.
- `prettier-plugin-tailwindcss`: Prettier plugin for Tailwind CSS.

### Testing

- `cypress`: End-to-end testing framework.
- `jest`: JavaScript testing framework.
- `ts-jest`: TypeScript preprocessor for Jest.
- `@testing-library/react`: Simple and complete React DOM testing utilities.
- `@testing-library/jest-dom`: Custom jest matchers for the DOM.
- `@testing-library/user-event`: Fire events the same way the user does.

### TypeScript

- `typescript`: TypeScript language support.
- `ts-node`: TypeScript execution environment for Node.js.
- `@types/*`: TypeScript definitions for various libraries.

### Development Tools

- `husky`: Git hooks for linting and testing.

## Husky Hooks

This project uses Husky to ensure code quality:

- `pre-commit`: Runs `npm run lint` and `npm run test` before committing changes.

## Resolutions

- `punycode`: Ensures compatibility with certain dependencies.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
