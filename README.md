# Bloglist App

This repository contains the Bloglist application, which is a monorepo that integrates the frontend, backend, and end-to-end (E2E) testing.

## Monorepo Structure

The monorepo is organized into three main parts:

1. **Frontend**: Built with React and Vite.
2. **Backend**: Built with Node.js and Express.
3. **E2E Testing**: Implemented using Playwright.

## Monorepo details

1. **Frontend**:

   - Created a React application using Vite for fast development and hot module replacement (HMR).
   - Configured ESLint for code quality and consistency.

2. **Backend**:

   - Set up a Node.js server with Express.
   - Implemented RESTful API endpoints for the blog functionalities.
   - Used Nodemon for development to automatically restart the server on file changes.

3. **E2E Testing**:

   - Configured Playwright for end-to-end testing.
   - Created tests to ensure the application works as expected from the user's perspective.
   - Set up scripts to run tests and generate reports.

## GitHub Actions

The repository is integrated with GitHub Actions to automate the testing and deployment process. The following workflows are set up:

1. **CI/CD**:

   - The CI/CD workflow runs the tests for the frontend, backend, and E2E testing.
   - It also builds the frontend and backend applications.
   - If the tests pass, the applications are deployed to Render.

2. **Health Check**:

   - The health check workflow runs every month to ensure the application is up and running.
   - It sends a notification with the health check result.

## Deployment

The application is deployed on Render. You can access it at the following URL:
[https://bloglist-app-fyb1.onrender.com](https://bloglist-app-fyb1.onrender.com)

## Getting Started

To get started with the project, clone the repository and install the dependencies for each part of the monorepo.

## Running the Application

To run the application locally, follow these steps:

1. **Start the backend and frontend**:

   ```bash
   npm run start:prod
   ```

2. **Run E2E tests**:

   ```bash
   npm run test:e2e
   ```

## Author

Marc Frances Torres
