# ML Engineer Portfolio

A portfolio website for a Machine Learning Engineer, showcasing projects, skills, and professional experience. The application is built with React (frontend) and Python FastAPI (backend).

## Demo

Check out the live portfolio: [https://marcin-oleszczyk.pl](https://marcin-oleszczyk.pl)

## Table of Contents

- [ML Engineer Portfolio](#ml-engineer-portfolio)
  - [Demo](#demo)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Local Setup](#local-setup)
  - [Project Structure](#project-structure)
  - [Deployment](#deployment)
  - [Contact](#contact)

## About

This application presents:
- AI/ML projects (e.g., handwritten digit recognition)
- Technical skills with visual proficiency levels
- Information about experience and education
- A contact form with email support

## Features

- **Responsive design** – works on desktop and mobile devices
- **Handwritten digit recognition** – interactive canvas component
- **Skills visualization** – progress bars and categories
- **Contact form** – email sending via EmailJS
- **GitHub integration** – quick access to project source code

## Technologies

- **Frontend:** React, styled-components, React Bootstrap, EmailJS, React Router
- **Backend:** Python, FastAPI

## Local Setup

You can run the application using Docker Compose:

```bash
docker-compose up --build
```

- The frontend will be available at [http://localhost:3000](http://localhost:3000)
- The backend will be available at [http://localhost:8000](http://localhost:8000)

## Project Structure

```
ml-engineer-portfolio/
│
├── backend/         # FastAPI backend (models, API, predictions)
├── frontend/        # React frontend (components, styles)
├── docker-compose.yml
└── README.md
```

## Deployment

The application is deployed on Google Cloud Platform and available at:  
[https://marcin-oleszczyk.pl](https://marcin-oleszczyk.pl)

## Contact

- Email: oleszczyk.dev@gmail.com
- LinkedIn: [Marcin Oleszczyk](https://www.linkedin.com/in/marcin-o-2aaa75208/)

---

© 2025 Marcin Oleszczyk. All rights reserved.