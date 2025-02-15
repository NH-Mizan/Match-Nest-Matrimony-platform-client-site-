# Admin Dashboard - Biodata Management System

## Introduction
Welcome to the **Admin Dashboard for the Biodata Management System**. This platform provides an easy and efficient way to manage and review biodata submissions, track statistical insights, and approve contact requests. This system helps administrators maintain and oversee user biodata for matchmaking or related purposes.

## Features
### 🔹 **Dashboard Overview**
- Displays **Total Biodatas**, **Male Biodatas**, **Female Biodatas**, and **Premium Biodatas** count.
- Interactive **Pie Chart** visualization for statistical representation.

### 📌 **Success Stories**
- View a table of matched biodata pairs.
- Each row consists of **Male Biodata ID**, **Female Biodata ID**, and a **View Story** button.
- Clicking "View Story" displays a detailed success story in a modal.

### ✔️ **Approved Contact Requests**
- Shows a list of approved contact requests in a tabular format.
- Each row contains:
  - **Name**
  - **Email**
  - **Biodata ID**
  - **Approved Contact Request** Button
- Admins can approve requests, allowing users to access contact information.

### 💳 **Checkout & Contact Request**
- Users must **fill out a form** to request biodata contact details.
- Fields include:
  - **Biodata ID** (Read-only)
  - **Self Email** (Read-only)
  - **Stripe Card Number Input**
- After successful payment of **$5**, the contact request is submitted for approval.

### 📌 **Biodata Creation**
- When a user creates a new biodata, their **Biodata ID is auto-generated dynamically from the backend**.
- If no biodata exists, the first biodata ID will be `1`. Every subsequent biodata ID will increment automatically (`last ID + 1`).
- Ensures **unique and sequential Biodata IDs**.

## 📊 Technologies Used
- **Frontend:** React, Tailwind CSS, Chart.js
- **Backend:** Node.js, Express, MongoDB
- **Payment Integration:** Stripe
- **Data Management:** Custom Hooks, API Integration

## 💻 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-NH-Mizan.git
   cd your-project-folder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Configure backend settings and ensure the database is running.

## 📞 Support
If you encounter any issues, feel free to **create a GitHub issue** or **contact the development team**.

---
✅ **Developed by NH Mizan & Team**

