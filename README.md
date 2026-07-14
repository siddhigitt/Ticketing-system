# Smart IT Ticketing & Operations Monitoring System

A full-stack IT Helpdesk Ticketing System that leverages Artificial Intelligence to automate ticket analysis, prioritize incidents, assist support teams, and provide AI-driven operational monitoring.

The system enables users to create and manage support tickets while allowing administrators to monitor system-wide trends through AI-generated operational insights.

---

## Features

### User Authentication
- User Registration and Login
- Secure Authentication
- Role-based access foundation

### Ticket Management
- Create Support Tickets
- View Assigned Tickets
- Track Ticket Status
- Update Ticket Status
- Delete Tickets

### AI Ticket Analysis
Using Groq LLM APIs, the system automatically provides:

- Ticket Categorization
- Priority Prediction
- Ticket Summarization
- Resolution Suggestions

Example:

Input:

Unable to connect to company VPN after Windows update.

AI Output:

- Category: Network
- Priority: High
- Summary: VPN connectivity failure after system update.
- Suggested Resolution:
    - Verify VPN configuration
    - Restart VPN Service
    - Contact Network Administrator

---

## AI Operations Monitoring

The system includes a smart Operations Monitoring module that analyzes all support tickets to identify:

- Recurring Issues
- Operational Trends
- Potential Infrastructure Incidents
- Business Impact
- Operational Risks
- Recommended Actions

Instead of manually reviewing hundreds of tickets, administrators can run AI monitoring to receive an executive-level operational analysis.

Example Output:

- Executive Summary
- Current Ticket Statistics
- Major Issues
- Recurring Problems
- Potential Incident Detection
- Business Impact
- Operational Risks
- Recommended Actions

---

## Dashboard Statistics

The monitoring dashboard displays live operational metrics including:

- Total Tickets
- Open Tickets
- Critical Tickets
- Resolved Tickets

These statistics are retrieved directly from the MySQL database.

---

## Tech Stack

### Frontend

- React.js
- Vite
- Axios
- React Router
- React Markdown
- CSS

### Backend

- Spring Boot
- Spring Security
- Spring Data JPA
- REST APIs
- Maven

### Database

- MySQL

### Artificial Intelligence

- Groq API
- Llama 3.3 70B Versatile Model

---

## Project Architecture

```
React Frontend
        │
        ▼
REST APIs
        │
        ▼
Spring Boot Backend
        │
        ├──────────────► MySQL
        │
        ▼
Groq AI API
        │
        ▼
AI Analysis & Monitoring
```

---

## Database

Main Tables

- Users
- Tickets

Relationships

```
User (1)
   │
   │
   ▼
Ticket (Many)
```

---

## Workflow

### Ticket Analysis

```
User submits ticket
        │
        ▼
Groq AI
        │
        ▼
Category
Priority
Summary
Suggestions
        │
        ▼
Ticket Created
```

---

### Operations Monitoring

```
Tickets Database
        │
        ▼
Collect Ticket Data
        │
        ▼
Groq AI
        │
        ▼
Executive Monitoring Analysis
        │
        ▼
Displayed in Operations Dashboard
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | /register |
| POST | /login |

### Tickets

| Method | Endpoint |
|---------|----------|
| GET | /tickets |
| POST | /tickets |
| PUT | /tickets/{id} |
| DELETE | /tickets/{id} |

### AI

| Method | Endpoint |
|---------|----------|
| POST | /ai/analyze |
| GET | /ai/report |

### Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /dashboard/stats |

---

## Future Enhancements

- Scheduled AI Monitoring
- Email Notifications
- Slack / Microsoft Teams Integration
- Automatic Incident Detection
- Predictive Ticket Escalation
- AI Chat Assistant
- Role-based Dashboards
- Ticket Assignment Recommendations

---

## Author

**Siddhi Rudrakshi**

B.Tech Computer Science & Engineering

KIIT University
