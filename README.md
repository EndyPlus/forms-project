# Google Forms Lite Clone

A simple full-stack app which imitates a Google Forms.

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**
- **PNPM** — `npm i -g pnpm`

### Installation

```bash
git clone https://github.com/EndyPlus/forms-project.git
cd forms-project
pnpm install
```

### Running the application

```bash
pnpm run dev
```

### Running Codegen

You must re-run the code generator in the following scenarios:

- Backend Schema Changes (server/src/schema.ts)
- Frontend Operation Changes (client/src/graphql/\*\*/\*.graphql)

First, open a second terminal and start a server:

```bash
cd server
pnpm run dev
```

Then, return to your main terminal and execute this command:

```bash
pnpm run codegen
```

After a while you will see updates in generated files.
