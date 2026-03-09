# 🚀 API Starter Project

A clean and scalable starter template for building RESTful APIs with **TypeScript**, **Express 5**, **Prisma**, and **Better Auth**.  
Includes environment configuration, modular code structure, request logging, Swagger documentation, and testing setup with **Jest**.

---

## ✅ Requirements

- **[Node.js](https://nodejs.org/)** v18 or higher
- **[npm](https://www.npmjs.com/)** (comes with Node.js)
- **[PostgreSQL](https://www.postgresql.org/)** (or via Docker)
- **[Git](https://git-scm.com/)**

Optional:

- **[Docker](https://www.docker.com/)** for running PostgreSQL in a container

---

## 📂 Folder Structure

```
.
├── __test__/               # Unit & integration tests
│   ├── integration/
│   ├── unit/
│   └── setup/              # Test setup (e.g., load env)
├── public/                 # Static files (e.g., swagger.css)
├── prisma/                 # Prisma schema & migrations
├── src/
│   ├── configs/            # App configurations (e.g., Prisma client)
│   ├── constants/          # Constants (HTTP status, dummy data, etc.)
│   ├── controllers/        # Request/response handlers
│   ├── docs/               # OpenAPI/Swagger spec
│   │   ├── paths/          # Endpoint definitions per resource
│   │   └── tags/           # Tag definitions per resource
│   ├── errors/             # Custom error classes (ApiError)
│   ├── middlewares/        # Middlewares (logger, validator, etc.)
│   ├── repositories/       # Database queries via Prisma
│   ├── routes/             # Route definitions
│   ├── schemas/            # Zod validation schemas
│   ├── services/           # Business logic
│   └── utils/              # Utilities (logger, request context, Better Auth, etc.)
├── .env
├── .env.test
├── jest.config.cjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```

2. Update dependencies to latest version:

   ```bash
   npx npm-check-updates -u
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   > **Note:** Remove any dependencies you don't need:
   >
   > ```bash
   > npm uninstall <package-name>      # runtime dependency
   > npm uninstall -D <package-name>   # dev dependency
   > ```

4. Initialize Prisma:

   ```bash
   npx prisma init --datasource-provider postgresql --output ../generated/prisma
   ```

5. Generate Better Auth schema (after configuring `auth.ts`):

   ```bash
   npx auth@latest generate
   ```

6. Setup environment variables:

   ```bash
   cp .env.example .env
   ```

   Example `.env`:

   ```env
   NODE_ENV=development
   PORT=8080

   DATABASE_URL="postgresql://username:password@localhost:5432/dbname?schema=public"

   BETTER_AUTH_SECRET=your_secret
   BETTER_AUTH_URL=http://localhost:8080
   ```

   Example `.env.test`:

   ```env
   NODE_ENV=test
   PORT=8080

   DATABASE_URL="postgresql://username:password@localhost:5432/dbname_test?schema=public"
   ```

---

## 🛠 Prisma Commands

```bash
# Initialize Prisma with PostgreSQL and custom output path
npx prisma init --datasource-provider postgresql --output ../generated/prisma

# Generate Prisma client
npx prisma generate

# Push schema to database (no migration)
npx prisma db push

# Create and run a migration
npx prisma migrate dev

# Apply migrations in production
npx prisma migrate deploy

# Open Prisma Studio
npx prisma studio
```

---

## 🚀 Running the Project

```bash
# Development (with auto-reload)
npm run dev

# Run tests
npm run test

# Build
npm run build

# Production
npm start
```

---

## 📖 API Documentation

Swagger UI is available at `/api-docs` when the server is running.

OpenAPI specs are located in `src/docs/`, organized by resource:

```
src/docs/
├── index.ts
├── paths/
│   └── users.path.ts
└── tags/
    └── users.tag.ts
```

---

## 🔑 Features

- ✅ **Express 5 + TypeScript** — Strongly typed API server
- ✅ **Prisma ORM + PostgreSQL** — Type-safe database queries with `pg` adapter
- ✅ **Better Auth** — Authentication with session management and OAuth support
- ✅ **Controller-Service-Repository Pattern** — Modular and scalable structure
- ✅ **Zod Validation** — Request validation via middleware
- ✅ **Pino Logger** — Structured logging with request context (request ID)
- ✅ **ApiError** — Centralized error handling with HTTP status codes
- ✅ **Swagger/OpenAPI** — Auto-served API docs via `swagger-ui-express`
- ✅ **Jest + Supertest** — Unit and integration testing with ESM support
- ✅ **Environment Config** — Supports `.env`, `.env.test`
