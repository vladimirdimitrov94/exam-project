# Project Documentation

    Project Overview
    This project is a web-based application built with Angular that provides a functional interface for managing cocktail-related data. It includes features like user authentication (login, register, logout), displaying a catalog of cocktails, and performing CRUD operations (Create, Read, Update, Delete).

    The backend uses Backendless API for handling user authentication and data operations.


## How to Run the Project

    Web page - https://cocktailab.netlify.app/

    Run locally:

    1. Prerequisites
    Ensure the following are installed on your machine:

    Node.js (v14+)
    Angular CLI (v15+)
    npm (v6+)

    2. Installation

    Install the project dependencies: npm install

    3. Running the Development Server
    Start the Angular development server: ng serve
    The application will be accessible at: http://localhost:4200

# Technologies Used

    Frontend:

    Angular: Main framework for building the application.
    TypeScript: Strongly-typed JavaScript for Angular development.
    RxJS: Reactive programming for managing HTTP requests and data streams.
    Angular Router: For navigation between components.
    SCSS/CSS: For styling.

    Backend:

    Backendless: Cloud-based backend service used for user management and database operations.

## Folder Structure

    src/
    │
    ├── app/
    │   ├── user/              # Components for user authentication
    │   │   ├── login/         # Login component
    │   │   ├── register/      # Register component
    │   │
    │   ├── cocktails/         # Components for cocktails
    │   │   ├── add/           # Add a cocktail
    │   │   ├── edit/          # Edit a cocktail
    │   │   ├── catalogue/     # List of cocktails
    │   │
    │   ├── shared/            # Shared modules and components
    │   ├── core/              # Core services, interceptors, and guards
    │   ├── guards/            # Route guards
    │
    ├── environments/          # Environment configurations (dev and production)
    ├── styles.css             # Global styles
    └── index.html             # Entry point of the application

## Functionality

    1. User Authentication

    Login: Users can log in with their email and password.
    Register: New users can create an account.
    Logout: Users can log out, clearing the session.

    2. Cocktail Management

    Catalogue: Displays a list of cocktails retrieved from the backend. Supports sorting and pagination.
    Add Cocktail: Allows authorized users to add a new cocktail.
    Edit Cocktail: Enables users to update existing cocktails.
    Delete Cocktail: Removes a cocktail from the backend.

    3. Session Management
    The project integrates a session guard that ensures the user's session is validated upon route navigation.

## Architecture

    Components:
    Each component is modular and focused on a single feature, e.g., login, register, add, edit, and catalogue.

    Services:
    UserService: Manages user authentication, login, logout, and registration.
    ApiService: Handles HTTP requests to the Backendless API for cocktail data.
    Resolvers: Preload data before the components are rendered.

    Routing:
    Angular Router is used for navigating between pages.
    Route guards ensure protected routes require authentication.

## Notes
    Secure Cookies: In production, secure cookies are used for session management.
    Localhost Limitation: During development, a fallback mechanism ensures sessions are maintained using localStorage.
