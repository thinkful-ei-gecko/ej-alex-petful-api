CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS cats (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  imageURL TEXT,
  imageDescription TEXT,
  name TEXT,
  gender TEXT,
  age INTEGER,
  breed TEXT,
  story TEXT,
  dateEntered TIMESTAMP DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS dogs (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  imageURL TEXT,
  imageDescription TEXT,
  name TEXT,
  gender TEXT,
  age INTEGER,
  breed TEXT,
  story TEXT,
  dateEntered TIMESTAMP DEFAULT now() NOT NULL
);