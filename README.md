# URL Shortener - Frontend

## Overview

This is the frontend application for a full-stack URL shortener service, built with React and Tailwind CSS. The application allows users to create shortened URLs, view analytics for their links, and manage their account.

## Features

- 🔐 User authentication (signup and login)
- 🔗 URL shortening functionality
- 📊 Analytics dashboard for shortened URLs
- 📋 List view of all shortened URLs
- 📈 Detailed analytics for specific URLs
- 🌐 Support for custom domains and subdomains
- 🚫 Custom error pages
- 🔄 Loading indicators

## Prerequisites

- Node.js (v14 or higher)
- npm
- Backend service running (see backend documentation)

## Getting Started

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd url-shortener-client
```

1. Install dependencies

```bash
npm install
```

1. Configure environment variables Create a `.env` file in the root directory with the following content:

```
REACT_APP_API_BASE_URL=<backend-api-url>
```

1. Start the development server

```bash
npm start
```

## Key Features Implementation

### Authentication

The application implements JWT-based authentication. After login, the JWT token is stored in the React context and local storage for persistent sessions.

### URL Shortening

Users can create shortened URLs from the dashboard. The frontend communicates with the backend API to generate and store shortened URLs.

### Analytics Dashboard

The dashboard provides:

- Overview of all shortened URLs
- Click statistics and analytics
- Geographic data about link visitors
- Referrer information

### Public and Private Routes

The application implements route protection to ensure that:

- Authenticated users can access the dashboard
- Non-authenticated users are redirected to the login page
- Public pages are accessible to all users

## Deployment

The frontend application is designed to be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

### Build for Production

```bash
npm run build
```

This will create a `build` directory with optimized production files that can be deployed.

## Technology Stack

- React.js - Frontend framework
- React Router - Navigation and routing
- Tailwind CSS - Styling and UI components
- Axios - API communication
- Chart.js - Analytics visualization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
