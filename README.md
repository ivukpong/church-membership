# Church Details Management Application

A modern, production-ready web application for collecting, validating, and managing personal and church worker details.

## ✨ Features

### Core Functionality
- **Personal Details Form**: Collect first name, middle name, last name, phone, address, marital status, and date of birth
- **Church Details Form**: Track worker/volunteer status and department assignments
- **Dynamic Department Management**: Add multiple departments with individual role assignments (Member, Assistant HoD, HoD)
- **Form Validation**: Real-time validation using Zod schemas
- **Data Persistence**: LocalStorage-based data management

### Optional Features
- **Edit & Delete**: Modify or remove member records
- **Table View**: View all members in a sortable table
- **CSV Export**: Export member data to CSV format
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## 🎨 UI/UX Highlights

- Clean, modern card-based layout
- Smooth transitions and micro-interactions
- Professional color scheme with primary blues
- Clear error messages and validation feedback
- Mobile-responsive by default
- Accessible form controls

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite (with Rolldown experimental)
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Data Storage**: LocalStorage

## 📁 Project Structure

```
src/
├── components/
│   ├── ChurchDetailsForm.jsx    # Church worker details form
│   ├── PersonalDetailsForm.jsx  # Personal information form
│   ├── DepartmentInput.jsx      # Dynamic department input component
│   ├── MembersList.jsx          # Table view of all members
│   └── DarkModeToggle.jsx       # Dark mode switch
├── contexts/
│   └── DarkModeContext.jsx      # Dark mode state management
├── services/
│   └── storageService.js        # LocalStorage CRUD operations
├── schemas.js                   # Zod validation schemas
├── App.jsx                      # Main application component
├── index.css                    # Tailwind base styles
└── main.jsx                     # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📋 Data Structure

Each member record follows this structure:

```javascript
{
  "id": "uuid",
  "personalDetails": {
    "firstName": "John",
    "middleName": "Paul",
    "lastName": "Doe",
    "phone": "+1234567890",
    "address": "123 Main St, City, State",
    "maritalStatus": "Married",
    "dateOfBirth": "1990-01-01"
  },
  "churchDetails": {
    "isWorker": true,
    "departments": [
      {
        "name": "Media",
        "role": "HoD"
      },
      {
        "name": "Choir",
        "role": "Member"
      }
    ]
  },
  "createdAt": "2026-01-14T16:00:00.000Z",
  "updatedAt": "2026-01-14T16:00:00.000Z"
}
```

## 🎯 Usage

### Adding a New Member
1. Fill in all required fields (marked with *)
2. Select worker status (Yes/No)
3. If worker, add departments and assign roles
4. Click "Add Member" (button is disabled until form is valid)

### Editing a Member
1. Switch to "View Members" tab
2. Click the edit icon next to a member
3. Update the form
4. Click "Update Member"

### Exporting Data
1. Go to "View Members" tab
2. Click "Export CSV" button
3. CSV file downloads automatically

### Dark Mode
Click the moon/sun icon in the top-right corner to toggle themes.

## 🔒 Data Storage

Data is stored in browser LocalStorage under the key `church_members`. This provides:
- Instant access without network requests
- Data persistence across sessions
- Simple migration path to backend storage

## 🚧 Future Enhancements

Potential features for extension:
- Backend API integration (Firebase/Supabase)
- Admin dashboard for analytics
- Search and filter functionality
- Bulk import from CSV
- Print member cards
- Email notifications
- Advanced reporting

## 📝 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React and Tailwind CSS

