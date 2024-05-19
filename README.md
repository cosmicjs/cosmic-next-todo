# Cosmic Next ToDo

This is a Cosmic ToDo example app. It demontrates how to use Next.js, React, and Cosmic to create a ToDo app that interacts with the Cosmic CMS API using the [Cosmic JavaScript SDK](https://www.npmjs.com/package/@cosmicjs/sdk).

## Getting Started

First, clone this repo.

```bash
git clone https://github.com/cosmicjs/cosmic-next-todo
cd cosmic-next-todo
```

Then install packages.

```bash
npm i
# or
yarn
# or
pnpm
# or
bun i
```

Then [log in to your Cosmic dashboard](https://app.cosmicjs.com/). And create a new Project with the Object type `ToDos`.

Then copy the `.env.copy` to a new `.env.local` file. And add your API keys found in the Cosmic dashboard at _Project / API keys_.

```
# .env.local
COSMIC_BUCKET_SLUG=your_bucket_slug
COSMIC_READ_KEY=your_bucket_read_key
COSMIC_WRITE_KEY=your_bucket_write_key
```

Then run the development server:

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

Add / edit / delete ToDo items. See them in your Cosmic dashboard.
