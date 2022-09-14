CREATE DATABASE tasksdb

CREATE TABLE task(
    id SERIAl PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
)