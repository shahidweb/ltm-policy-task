# LTM Policy Task

A React + TypeScript + Vite project that displays travel insurance policies in a polished card layout. The app loads policy data from a local JSON file, filters active policies, sorts them by start date, and shows them with pagination.

## How to run the project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

### 5. Run lint checks

```bash
npm run lint
```

## Project features

- Displays a list of active policies
- Loads data from a mock API using a local JSON file
- Sorts policies by policy start date
- Shows each policy in a styled card with:
  - policy number
  - destination
  - policy dates or trip dates
  - plan name
  - excess amount
  - links for documents
- Supports pagination with previous/next and page-number buttons
- Uses responsive layout styling for smaller and larger screens

## Tech stack used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- date-fns for date formatting
- React Icons
- ESLint for code quality

## Project structure

```text
src/
  api/            # API-like data fetching logic
  component/      # Reusable UI components such as PolicyCard, PolicyList, Pagination
  context/        # React context for policy state management
  data/           # Local policy data in JSON format
  hooks/          # Custom hooks
  pages/          # Page-level components
  types/          # TypeScript interfaces
```

## Main implementation details

- The app uses a context-based state manager in [src/context/PolicyContext.tsx](src/context/PolicyContext.tsx) to hold policies and current page.
- Policy data is fetched asynchronously from [src/api/policyApi.ts](src/api/policyApi.ts) using a delayed promise.
- The policy list is rendered in [src/pages/MyPolicies.tsx](src/pages/MyPolicies.tsx) and [src/component/PolicyList.tsx](src/component/PolicyList.tsx).
- Each policy card is built in [src/component/PolicyCard.tsx](src/component/PolicyCard.tsx).
- Pagination is handled in [src/component/Pagination.tsx](src/component/Pagination.tsx).
- The policy shape is defined in [src/types/policy.ts](src/types/policy.ts).

## Notes

- The app currently uses mock data from [src/data/policies.json](src/data/policies.json).
- The project is set up to run quickly with Vite and uses modern React patterns.
