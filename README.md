# 🎓 Face Recognition Attendance System

A simple browser-based student attendance system using face recognition via [Teachable Machine](https://teachablemachine.withgoogle.com/) and JavaScript. The webcam scans a student's face and displays a welcome message if the student is recognized. It also updates the live list of students who are present.

---

## ✨ Features

- 📸 Real-time webcam capture
- 🤖 Face classification using a Teachable Machine model
- ✅ Display message: Welcome / Invalid Student
- 📝 Dynamic list of students marked as present
- 🎨 Clean and responsive UI with HTML + CSS
- 🧠 Powered by [ml5.js](https://ml5js.org/) and [p5.js](https://p5js.org/)


---

## 🚀 How to Run

1. Open the folder in **Visual Studio Code**
2. Right-click `index.html` → **Open with Live Server**
3. Grant webcam permissions when prompted

### 🛠️ Teachable Machine Model
This project uses a model hosted at:

https://teachablemachine.withgoogle.com/models/HE2Gqfl09/
You can replace this with your own model URL trained via Teachable Machine, and update it inside script.js.

📷 Sample Workflow
1.Start the app.
2.Allow webcam access.
3.Click Capture and Classify.
4.If the student is recognized, it shows:
Welcome your_name
and adds them to the present students list.
5.If not recognized, it shows:
Invalid Student

### 📌 Future Improvements
Save attendance to local storage or file
Connect to a backend database (like Firebase or MongoDB)
Display timestamps and total count of students
Export attendance list as CSV

### 👨‍💻 Author
Made with 💖 by Pranjal Pandey
