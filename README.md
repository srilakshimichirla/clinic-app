# Clinic Appointment Booking System

A modern full-stack web application that enables patients to book appointments online and helps clinics manage appointments efficiently.

## Tech Stack

* **Frontend:** React.js, Vite, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT, bcrypt

## Key Features

* Online appointment booking
* Doctor listing and profiles
* Appointment management dashboard
* Patient contact form
* Secure admin login
* Responsive and user-friendly UI

## Project Structure

```bash
clinic-booking-system/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
└── database/
```

## Main Modules

* Home Page
* About Clinic
* Doctors Section
* Book Appointment
* Contact Us
* Admin Dashboard

## API Endpoints

### Authentication

* POST /api/auth/login
* GET /api/auth/me

### Appointments

* POST /api/appointments
* GET /api/appointments
* PUT /api/appointments/:id
* DELETE /api/appointments/:id

### Doctors

* GET /api/doctors
* POST /api/doctors

## Security

* JWT Authentication
* Password Encryption
* Protected Admin Routes

## Future Enhancements

* Online Payments
* SMS & Email Notifications
* Telemedicine Support
* Patient Medical Records

## License

MIT
