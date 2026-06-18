# WEB103 Project 2 - Unearthed Gift Ideas (Listicle Part 2)

Submitted by: Oscar Mochizaki

About this web app: **Unearthed Gift Ideas is a list-based web app that displays unique and thoughtful gift ideas. In this version, the listicle data comes dynamically from a Render PostgreSQL database instead of being hardcoded in the frontend. The frontend is built using only HTML, CSS, and vanilla JavaScript (no frameworks).**

Time spent: 4 hours

## Required Features

The following **required** functionality is completed:

- [x] The frontend uses only HTML, CSS, and vanilla JavaScript (no frameworks like React, Vue, Angular, or Next.js)
- [x] The web app is connected to a Render PostgreSQL database (`web103-lab1-db` using a new table `project2_items`)
- [x] The database contains an appropriately structured table for the list items
- [x] The frontend displays data retrieved from the PostgreSQL database
- [x] The backend exposes an API endpoint `/api/items` serving JSON data from the database

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Node.js
- Express.js
- PostgreSQL
- Render PostgreSQL

## API Endpoints

- `GET /api/items`: Retrieves all gift items from the PostgreSQL database, sorted by ID in ascending order.

## Environment Variables

Create a `.env` file in the root of the project with the following configuration:

```env
DATABASE_URL=your_render_postgresql_external_database_url
PORT=3000
```

*Note: Make sure `.env` is listed in your `.gitignore` to avoid committing secret credentials to GitHub.*

## Database Setup

To set up the database table and seed data in your Render PostgreSQL database:

1. Connect to your database client.
2. Run the SQL schema commands from `server/schema.sql` to create the `project2_items` table.
3. Run the SQL seeding commands from `server/seed.sql` to populate the initial list items.

## Local Setup

1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file.
4. Add your Render PostgreSQL `DATABASE_URL`.
5. Run the schema SQL.
6. Run the seed SQL.
7. Start the app with `npm start`.
8. Open `http://localhost:3000`.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Notes

One challenge was ensuring the database SSL settings rejected unauthorized connections appropriately while allowing both local and cloud development environments to work seamlessly. Refactoring the hardcoded frontend array to use the fetch API with vanilla Javascript async/await flow made the page updates clean and smooth.