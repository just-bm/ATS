# Resume ATS Analyzer 🔍

A full-stack MERN application that uses AI to analyze resumes and provide ATS (Applicant Tracking System) compatibility scores with personalized feedback.

## 🚀 Features

- **User Authentication** - Secure signup/login with JWT
- **PDF Resume Analysis** - Upload and extract text from PDF resumes
- **AI-Powered Scoring** - Get ATS compatibility scores using Google Gemini AI
- **Detailed Feedback** - Receive strengths, weaknesses, and improvement suggestions
- **Analysis History** - Track all previous resume analyses
- **Secure File Handling** - Protected file upload and storage

## 🛠 Tech Stack

### Frontend
- **React** - UI framework
- **Axios** - HTTP client
- **React Router** - Navigation
- **CSS/UI Library** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **multer** - File upload handling
- **pdf-parse** - PDF text extraction

### AI & External Services
- **Google Gemini API** - AI analysis
- **Cloud Storage** (Optional) - File storage


## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/just-bm/ATS.git
   cd ATS
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Edit .env with your configurations
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Edit .env with your configurations
   ```

4. **Environment Variables**

   **Backend (.env)**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

   **Frontend (.env)**
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Run the Application**

   **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```

   **Start Frontend** (in new terminal)
   ```bash
   cd frontend
   npm start
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📋 Usage

1. **Register/Login** - Create an account or login
2. **Upload Resume** - Go to dashboard and upload PDF resume
3. **View Analysis** - Get instant ATS score and feedback
4. **Check History** - View all previous analyses
5. **Improve Resume** - Use feedback to optimize your resume

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- File upload validation
- Secure AI API key storage

## 🛠 Development

### Adding New Features
1. Create backend API route
2. Implement controller logic
3. Update frontend services
4. Add React components
5. Test thoroughly

### File Upload Flow
1. User uploads PDF → multer middleware
2. Extract text → pdf-parse library
3. Send to AI → Google Gemini API
4. Process response → Save to database
5. Return analysis → Frontend display

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues
- **PDF upload fails**: Check multer configuration and file size limits
- **AI analysis fails**: Verify Gemini API key and quota
- **Database connection error**: Check MongoDB URI in .env file
- **Authentication issues**: Verify JWT secret and token handling

### Getting Help
- Check the [Issues](https://github.com/yourusername/resume-ats-analyzer/issues) page
- Create a new issue with detailed description
- Include error logs and steps to reproduce

## 🔮 Future Enhancements

- [ ] Multiple resume templates
- [ ] Job description matching
- [ ] Industry-specific analysis
- [ ] Resume builder integration
- [ ] Export analysis reports
- [ ] Real-time collaboration
- [ ] Mobile app version

---
