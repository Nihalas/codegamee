# 🎮 CodeGame

CodeGame is an interactive coding-based game application developed using **Java, Spring Boot, MySQL, HTML, CSS, and JavaScript**. The application provides users with an engaging platform to practice programming concepts through coding challenges and game-based activities.

## 🚀 Technologies Used

### Backend

* Java
* Spring Boot
* Spring MVC
* REST APIs

### Frontend

* HTML5
* CSS3
* JavaScript

### Database

* MySQL

### Tools

* Maven
* Git & GitHub
* IDE: IntelliJ IDEA / Eclipse / VS Code

## ✨ Features

* 🎯 Interactive coding challenges
* 🧩 Multiple programming problems
* 🏆 Score-based gameplay
* 📊 Track user progress
* 💾 Store game/user data using MySQL
* 🔗 REST API integration using Spring Boot
* 📱 Responsive web interface
* ⚡ Dynamic frontend using JavaScript

## 🏗️ Project Architecture

```text
CodeGame
│
├── Backend
│   ├── Controller
│   ├── Service
│   ├── Repository
│   ├── Model / Entity
│   └── Configuration
│
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Database
    └── MySQL
```

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd CodeGame
```

### 2. Configure MySQL

Create a MySQL database:

```sql
CREATE DATABASE codegame;
```

Update the database configuration in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/codegame
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3. Run the Spring Boot application

Using Maven:

```bash
mvn spring-boot:run
```

Or run the main Spring Boot application class from your IDE.

### 4. Open the application

Open the frontend/application in your browser and start playing.

## 🎮 How It Works

1. User opens the CodeGame application.
2. User selects a coding challenge.
3. User solves the given problem.
4. The application validates the submission.
5. Score/progress is updated.
6. User can continue with additional challenges.

## 🔮 Future Enhancements

* User authentication and authorization
* Leaderboard system
* Difficulty levels
* More programming challenges
* Timer-based challenges
* User profile and statistics
* Online multiplayer mode
* Admin dashboard

## 👨‍💻 Author

**Nihal Asfer**

Developed as a Java Full Stack project using Spring Boot, MySQL, HTML, CSS, and JavaScript.

## 📄 License

This project is developed for educational and learning purposes.
