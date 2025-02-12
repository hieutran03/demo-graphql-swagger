#!/bin/bash

echo "Running migrations..."
npm run typeorm:run-migrations

echo "Starting the backend service..."
npm run start:dev