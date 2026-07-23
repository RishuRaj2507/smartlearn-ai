# SmartLearn AI: GenAI-Powered Learning & Development Assistant

## Overview

SmartLearn AI is an intelligent Learning & Development (L&D) platform designed to help organizations improve workforce capability through AI-driven learning experiences.

The platform combines Generative AI, Retrieval-Augmented Generation (RAG), skill-gap analysis, personalized learning recommendations, assessments, and analytics to create a modern learning ecosystem for employees, managers, and L&D teams.

---

## Problem Statement

Organizations often face challenges such as:

* Limited visibility into employee skill gaps
* Generic training programs with low personalization
* Knowledge silos across departments
* Difficulty measuring learning effectiveness
* Loss of institutional knowledge when experienced employees leave

SmartLearn AI addresses these challenges through intelligent automation, contextual knowledge retrieval, and personalized learning recommendations.

---

## Key Features

### Authentication & User Management

* Secure user registration and login
* JWT-based authentication
* Protected routes
* Role-based access control

### Personalized Learning Dashboard

* Learning progress tracking
* Recommended learning paths
* Performance overview
* User-specific insights

### Skill Gap Analysis

* Evaluate current employee skills
* Compare against target competencies
* Identify learning priorities
* Generate improvement recommendations

### AI-Powered Learning Assistant

* Natural language question answering
* Context-aware responses
* Organizational knowledge retrieval
* Learning support and guidance

### Retrieval-Augmented Generation (RAG)

* Knowledge base integration
* Document retrieval pipeline
* Context-enhanced AI responses
* Reduced hallucinations

### Assessment Engine

* Skill assessments
* Performance scoring
* Result tracking
* Learning evaluation

### Analytics Dashboard

* KPI monitoring
* Learning trend analysis
* Skill growth visualization
* Department-wise comparison
* Course completion metrics
* AI-generated insights

### Personalized Learning Recommendations

* AI-generated learning suggestions
* Skill-based recommendations
* Customized development paths

---

## System Architecture

```text
                        ┌──────────────────┐
                        │     Frontend     │
                        │     Next.js      │
                        └────────┬─────────┘
                                 │
                                 ▼
                        ┌──────────────────┐
                        │     Backend      │
                        │   Node.js API    │
                        └────────┬─────────┘
                                 │
                 ┌───────────────┼───────────────┐
                 ▼                               ▼
        ┌─────────────────┐            ┌─────────────────┐
        │    MongoDB      │            │     AI Layer    │
        │    Database     │            │  OpenAI / LLM   │
        └─────────────────┘            └────────┬────────┘
                                                 │
                                                 ▼
                                        ┌─────────────────┐
                                        │ Vector Database │
                                        │   RAG Engine    │
                                        └─────────────────┘
```

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Recharts
* Axios

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB
* Mongoose

### Artificial Intelligence

* OpenAI API
* Retrieval-Augmented Generation (RAG)
* Embeddings-Based Search
* Prompt Engineering

### Authentication

* JWT Authentication
* bcrypt Password Hashing

---

## Core Modules

### User Module

* Registration
* Login
* Profile Management

### Assessment Module

* Skill Evaluation
* Score Generation
* Performance Tracking

### Learning Module

* Personalized Learning Paths
* Recommendation Engine

### AI Assistant Module

* Contextual Question Answering
* Knowledge Retrieval

### Analytics Module

* KPI Dashboard
* Learning Insights
* Growth Tracking

---

## Project Structure

```bash
smartlearn-ai/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── utils/
│   │
│   └── public/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── models/
│   │   ├── config/
│   │   └── utils/
│
├── docs/
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/<your-username>/smartlearn-ai.git

cd smartlearn-ai
```

---

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_openai_api_key
```

Run backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

---

## API Overview

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
```

### Assessments

```http
GET /api/assessments
POST /api/assessments
```

### Analytics

```http
GET /api/analytics
```

### AI Assistant

```http
POST /api/ai/chat
```

### Recommendations

```http
GET /api/recommendations
```

---

## AI Workflow

```text
User Query
     │
     ▼
Embedding Generation
     │
     ▼
Vector Search
     │
     ▼
Relevant Context Retrieval
     │
     ▼
LLM Processing
     │
     ▼
Context-Aware Response
```

---

## Business Impact

SmartLearn AI helps organizations:

* Improve learning effectiveness
* Reduce skill gaps
* Increase employee engagement
* Enable personalized learning experiences
* Preserve organizational knowledge
* Support data-driven L&D decisions

---

## Future Enhancements

* Multi-Agent Learning System
* AI Learning Coach
* Voice-Based Learning Assistant
* HRMS Integration
* Real-Time Skill Intelligence
* Advanced Learning Analytics
* Multi-Language Support

---

## Screenshots



---

## Author

**Rishu Kumar**
BIT Sindri
Artificial Intelligence & Generative AI Enthusiast

---

## License

This project is licensed under the MIT License.

Feel free to use, modify, and extend this project for educational and research purposes.
