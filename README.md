📋 Advanced React To-Do Application

This project is a fully-featured, modern To-Do list application developed as part of a structured React learning plan. The primary goal was to practice and implement critical React concepts, including advanced hooks, global state management with Context API, and professional architectural patterns (Reducers, Custom Hooks).

✨ Live Demo

Check out the live version of the application:

[]([PASTE YOUR VERCEL/NETLIFY LIVE LINK HERE])

📸 Preview

A look at the application's interface:

🚀 Key Features

The application goes beyond basic CRUD (Create, Read, Update, Delete) operations with the following advanced features:

Professional State Management: Core task logic (adding, deleting, completing) is managed centrally using the useReducer hook, ensuring predictable state transitions.

Context API (Theming): Global state for Dark/Light Mode is managed via the React Context API, eliminating Prop Drilling for styling.

API Integration: Fetches sample data from an external API (JSONPlaceholder) on initial load using the useEffect hook.

Advanced Filtering: Tasks can be filtered based on completion status (Completed/Pending) and category (Work, Personal, etc.).

Data Persistence: Tasks are saved persistently in the user's browser using localStorage.

Intuitive UX: Features include input validation (preventing empty tasks), date display, and completing tasks via a seamless checkbox input.

Refactored Architecture: Clean and reusable components (Input.jsx, Button.jsx) ensure easy maintenance and scalability.

🛠️ Tech Stack

React: Fundamental UI library.

JavaScript (ES6+): Core language.

Tailwind CSS: Utility-First framework for rapid and modern styling.

Hooks: useState, useEffect, useReducer, useContext.

Context API: For global, prop-drill-free state access.

📦 Local Setup

To get a local copy up and running, follow these simple steps.

Clone the Repository:

git clone [PASTE YOUR GITHUB REPO URL HERE]
cd react-todo-app-final


Install Dependencies:

npm install


Start the Project:

npm run dev 
# The application will open on http://localhost:5173 (or similar).


💡 Next Steps (E-Commerce Project)

The knowledge gained from this project will form the foundation for the next challenge: an Advanced E-Commerce Application. The focus areas for the next project will be:

Combining useReducer and Context API for global Shopping Cart state.

Implementing Dynamic Routing and Protected Routes.

Authentication setup.
