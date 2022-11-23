# collaborative-expense-tracker-inertia

## Getting started

    $ cp .env.example .env

### Change the following line

    DB_CONNECTION=sqlite
    # DB_HOST=127.0.0.1
    # DB_PORT=3306
    # DB_DATABASE=laravel
    # DB_USERNAME=root
    # DB_PASSWORD=

### Create sqlite database

    $ touch ./database/database.sqlite

### Install dependencies

    $ composer install

### Run necessary laravel artisan command

    $ php artisan migrate
    $ php artisan key:generate

### Run the app 

    $ php artisan serve
