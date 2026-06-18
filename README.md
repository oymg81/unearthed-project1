# WEB103 Project 2 - Unearthed Gift Ideas

Submitted by: Oscar Mochizaki

About this web app: **Unearthed Gift Ideas is a listicle web app that displays unique gift ideas by category, price, image, and description. The app was refactored from hardcoded frontend data to retrieve its list items from a Render PostgreSQL database through an Express API endpoint.**

Time spent: 6 hours

## Required Features

The following **required** functionality is completed:

* [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
* [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**

  * [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  * [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command `SELECT * FROM project2_items;` to display your table contents.**

The following **optional** features are implemented:

* [ ] The user can search for items by a specific attribute

The following **additional** features are implemented:

* [x] Added an Express API endpoint at `/api/items` to retrieve gift items from PostgreSQL.
* [x] Added a database reset script to create and seed the `project2_items` table.
* [x] Updated the frontend to dynamically render cards using data fetched from the backend.
* [x] Used environment variables to protect the PostgreSQL connection string.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='walkthrough2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **QuickTime Player and converted to GIF**.

## Notes

One of the main challenges was refactoring the original Project 1 app so that the list item data no longer lived inside the frontend JavaScript file. I had to create a PostgreSQL table, seed the data, connect the Express backend to the database, and update the frontend to fetch data from the `/api/items` endpoint.

Another challenge was making sure the database URL stayed private by using a `.env` file and adding it to `.gitignore`.

## License

Copyright 2026 Oscar Mochizaki

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
