# 📇 User Management Dashboard

A responsive **User Management Dashboard** built with **React.js** and **Tailwind CSS** that allows users to add, update, delete, and search user profiles. All data is stored in the browser using **Local Storage**, so it persists even after refreshing the page.

---

## 🚀 Features

- ➕ Add new user cards
- ✏️ Update existing user details
- 🗑️ Delete user cards
- 🔍 Search users by **name** or **role**
- 💾 Persistent data using Local Storage
- 📱 Fully responsive design
- 🎨 Modern UI built with Tailwind CSS
- 🖼️ User profile image support via image URL

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Local Storage API**
- **Vite**

---

## 📂 Project Structure

```
src/
│── assets/
│── components/
│   ├── Form.jsx
│   ├── Nav.jsx
│   ├── SearchBar.jsx
│   ├── UserCard.jsx
│   └── Content.jsx
│
│── App.jsx
│── main.jsx
```

---

## 📸 Functionality

### Add User

Fill out the form with:

- Image URL
- Name
- Role / Designation
- Email Address
- Phone Number

After submission, a new user card is created and saved in Local Storage.

### Update User

Click the **Update** button on any user card to edit the existing information.

### Delete User

Click the **Delete** button to remove a user card from the dashboard.

### Search Users

Use the search bar to instantly filter users by:

- User Name
- Role / Designation

---

## 💾 Local Storage

The application automatically saves user data in the browser's Local Storage.

Key used:

```
users
```

This allows user data to remain available even after refreshing the page.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/user-management-dashboard.git
```

Navigate to the project folder:

```bash
cd user-management-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🎯 Future Improvements

- User authentication
- Dark/Light mode
- Sort users by name or role
- Pagination
- Backend integration
- Cloud database support
- Image upload instead of URL
- Form validation improvements

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed with ❤️ using React.js and Tailwind CSS.
