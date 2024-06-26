# Cosmic Next ToDo
![ToDo app screenshot](https://imgix.cosmicjs.com/f082fc30-16c1-11ef-9eca-7d347081a9fb-CleanShot-2024-05-20-at-08.58.322x.png)

[[View Live Demo](https://cosmic-next-todo.vercel.app/)]

A ToDo app example that demontrates how to use Cosmic create, read, update, and delete methods using the [Cosmic JavaScript SDK](https://www.npmjs.com/package/@cosmicjs/sdk) and React Server Actions.

## Features

- React Server Components
- Server Actions (No exposed API keys)
- Tailwind CSS

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

## Create Project in Cosmic

Log in to the [Cosmic dashboard](https://app.cosmicjs.com/) and create a new empty Project.
![Create Project](https://imgix.cosmicjs.com/8e311430-0bd7-11ef-9eca-7d347081a9fb-create-new-project.png?w=2000&auto=forat,compression)

Create an Object type `ToDos` with slug `todos`:
![Create Object Type](https://imgix.cosmicjs.com/e457e220-160f-11ef-9eca-7d347081a9fb-CleanShot-2024-05-19-at-11.44.112x.png?w=2000&auto=forat,compression)

Add the switch Metafield with key `completed`.
![Add completed Metafield](https://imgix.cosmicjs.com/e5873a60-160f-11ef-9eca-7d347081a9fb-CleanShot-2024-05-19-at-11.43.322x.png?w=2000&auto=forat,compression)

Then copy the `.env.copy` to a new `.env.local` file. And add your API keys found in the Cosmic dashboard at _Project / API keys_.

```
# .env.local
COSMIC_BUCKET_SLUG=your_bucket_slug
COSMIC_READ_KEY=your_bucket_read_key
COSMIC_WRITE_KEY=your_bucket_write_key
```

## Run the app

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see your ToDo list. Add / edit / delete ToDo items. See your ToDos in the Cosmic dashboard as well.

## Contributing
Contributions welcome!
