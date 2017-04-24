# isep-si-Back-End

Simple REST API backend with Postgres

## Team

* Victor ELY
* Alexandre CORRE
* Côme COTHENET
* Mathieu HINH

## Installation

A simple `npm install` should be enough for the project.
The database is really hardcoded.
* To initialize it `psql -U postgres < dumps/schema.sql`. This will create the database, the tables, the linked user and set its password.
* To initialize data, `psql -U postgres efrei < dumps/data-tests.sql`

The tests are using data-tests.sql. All this setup is arbitrary and can easily be changed.

## Testing

The tests can be launch via `ava --serial --verbose tests\`. The `--serial` keyword is required to avoid concurrent database access (there is no mocking).
