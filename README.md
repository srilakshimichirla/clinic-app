# Client Lead Management CRM

A full-stack CRM application for managing and tracking client leads generated from website contact forms.

## Tech Stack

* **Frontend:** React.js, Vite, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT, bcrypt

## Key Features

* Lead creation from website contact forms
* Lead listing with search and filters
* Lead status tracking (New, Contacted, Converted, Lost)
* Notes and follow-up management
* Secure admin authentication
* Protected dashboard and APIs

## Project Structure

```bash
crm/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
└── sample-contact-form/
```

## API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login
* GET /api/auth/me

### Leads

* POST /api/leads
* GET /api/leads
* GET /api/leads/:id
* PUT /api/leads/:id
* PATCH /api/leads/:id/status
* DELETE /api/leads/:id

## Security

* JWT Authentication
* Password Hashing with bcrypt
* Protected Routes
* Environment Variable Configuration

## Future Enhancements

* Email Notifications
* Analytics Dashboard
* Role-Based Access Control
* CSV Export

## License

MIT
