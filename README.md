![CI/CD Pipeline](https://raw.githubusercontent.com/ReidenRealm/EverTea/7a0a5fd35daa4672041d363a3a5612cc471de01c/Screenshot%202025-04-09%20082555.png)
![CI/CD Pipeline](https://raw.githubusercontent.com/ReidenRealm/EverTea/7a0a5fd35daa4672041d363a3a5612cc471de01c/Screenshot%202025-05-13%20213552.png)
# EverTea

A mobile application that helps tea plantation owners optimize their tea production by providing them with smart insights in the form of plant growth monitoring, fertilizer recommendations, real time weather notifications and financial tracking.




## Prerequisites

### Backend

The EverTea backend requires the following dependencies to be installed:

- JDK 21
- Maven



## Installation

### Backend

```bash
# Clone the repository

$ git clone https://github.com/ReidenRealm/EverTea.git

# Navigate to the backend directory

$ cd EverTea/User/BackEnd/EverTea

# Install dependencies and build the application

$ mvn clean install

# Run the application

$ java -jar EverTea.jar
```
## Project Structure

-  ``` EverTea/User/BackEnd/EverTea ``` : Spring Boot backend
-  ``` EverTea/User/FrontEnd ``` : React Native frontend

## CI/CD pipeline



## Contributors

| Name                  | Github                                            |
|-----------------------|---------------------------------------------------|
| Rehab Naffiran        | [Rehab](https://github.com/rehabnaf)              |
| Suneth Silva          | [Suneth](https://github.com/Nawoda2-0)            |
| Gerald Fernando       | [Gerald](https://github.com/ReidenRealm)          |
| Nethum Mihiranga      | [Nethum](https://github.com/Nethum99 )            |
| Sithum Wickramasingha | [Sithum](https://github.com/SithumWickramasingha) |
| Supun Gimhana         | [Supun](https://github.com/SUPUN-GIMHANA)         |







# Tea Plantation Management System - Admin Module

![Project Banner](https://via.placeholder.com/1200x400?text=Tea+Plantation+Management+System)

A comprehensive admin panel for managing tea plantation districts, tea models, tea types, cultivation instructions, and weather conditions.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

🌿 **District Management**
- Create and manage tea plantation districts
- Track main plants and average plant counts

🍃 **Tea Model Management**
- Maintain different tea varieties
- Track pricing and district associations

🌱 **Tea Type Management**
- Manage fertilizer schedules
- Track lifecycle weeks and watering intervals

📋 **Instruction Management**
- Create cultivation instructions
- Set triggers, recurring frequencies, and action details

⛅ **Weather Management**
- Configure weather conditions
- Set priority levels and alert messages

## Technologies Used

- **Backend**: Java 11, Spring Boot 2.7.x
- **Database**: MySQL/PostgreSQL (JPA/Hibernate)
- **API Documentation**: Swagger (OpenAPI 3.0)
- **Build Tool**: Maven
- **Other**: Lombok, JPA, RESTful APIs

## API Endpoints

### District Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/v1/district/save-districts` | Save multiple districts |
| GET    | `/api/v1/district/get-districts` | Get all districts |

### Tea Model Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/v1/district/save-teaModel` | Save multiple tea models |
| GET    | `/api/v1/district/get-teaModel` | Get all tea models |

### Tea Type Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/v1/district/save-teaType` | Save multiple tea types |
| GET    | `/api/v1/district/get-teaType` | Get all tea types |

### Instruction Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/v1/district/save-instruction` | Save multiple instructions |
| GET    | `/api/v1/district/get-instruction` | Get all instructions |

### Weather Operations
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/v1/district/save-weather` | Save multiple weather conditions |
| GET    | `/api/v1/district/get-weather` | Get all weather conditions |

## Database Schema

![Database Schema Diagram](https://via.placeholder.com/800x600?text=Database+Schema+Diagram)

Key Entities:
- `District`: Tea plantation districts information
- `TeaModels`: Different tea varieties and pricing
- `TeaType`: Tea cultivation specifications
- `Instruction`: Cultivation guidelines and schedules
- `Weathr`: Weather conditions and alerts

## Installation

1. **Prerequisites**
   - Java JDK 11+
   - Maven 3.6+
   - MySQL/PostgreSQL

2. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tea-plantation-admin.git
   cd tea-plantation-admin
   ```

3. **Configure database**
   - Update `application.properties` with your database credentials
   - Create the database schema

4. **Build and run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

5. **Access the API**
   - Swagger UI: `http://localhost:8080/swagger-ui.html`
   - Base API URL: `http://localhost:8080/api/v1/district`

## Usage

### Sample Requests

**Create Districts:**
```bash
curl -X POST "http://localhost:8080/api/v1/district/save-districts" \
-H "Content-Type: application/json" \
-d '[{
    "districtId": 1,
    "districtName": "Nuwara Eliya",
    "mainPlant": "Camellia sinensis",
    "avgPlants": 5000
}]'
```

**Get Tea Models:**
```bash
curl -X GET "http://localhost:8080/api/v1/district/get-teaModel"
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by [Your Name] | [Your Portfolio] | [Your Email]






# Ever Tea - Plantation Management System (Frontend)

![Ever Tea Banner](https://via.placeholder.com/1200x400?text=Ever+Tea+Plantation+Management)

A modern React-based frontend for the Ever Tea Plantation Management System, providing administrators with comprehensive tools to manage tea plantation operations.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

### 🏠 Dashboard
- Interactive pie charts showing district and tea type distributions
- Quick access cards to main system modules
- Welcome panel with user information

### 📊 Database Management
- Comprehensive tables for all entity types:
  - District management
  - Tea models
  - Tea types
  - Cultivation instructions
  - Weather conditions
- CRUD functionality with backend integration
- Dynamic form inputs for data editing

### 📨 Alert System
- Message tracker interface
- District-specific alert creation
- Form validation for message submission

### 👤 User Management
- Login/registration system
- Password recovery option
- User profile display

## Technologies Used

- **Frontend Framework**: React 18
- **Routing**: React Router 6
- **State Management**: React Hooks
- **Data Visualization**: Recharts
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Build Tool**: Vite (or Create React App)

## Project Structure

```
src/
├── assets/               # Static assets (images, icons)
├── Component/            # Reusable components
│   ├── Navbar/           # Login/registration components
│   ├── Register/         # User registration
│   ├── HomePage/         # Main dashboard
│   ├── Contact/          # Alert message system
│   ├── Account/          # User account management
│   ├── DataBase/         # Database navigation
│   └── Table/            # Individual data tables (12 tables)
├── App.js                # Main application router
└── main.js               # Application entry point
```

## Installation

1. **Prerequisites**
   - Node.js 16+
   - npm or yarn

2. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ever-tea-frontend.git
   cd ever-tea-frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Configure environment**
   - Create `.env` file with your backend API URL:
     ```
     REACT_APP_API_URL=http://localhost:8081/api/v1
     ```

5. **Run the application**
   ```bash
   npm start
   # or
   yarn start
   ```

## Usage

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Key Functionality

1. **Login/Registration**
   - Access the system through the authentication portal
   - Register new admin users

2. **Dashboard**
   - View data visualizations
   - Navigate to different modules

3. **Database Management**
   - Edit tables directly in the UI
   - Add/remove rows
   - Sync changes with backend

4. **Alert System**
   - Create district-specific alerts
   - Track message history

## API Integration

The frontend integrates with the following backend endpoints:

| Module        | Endpoints                          |
|---------------|------------------------------------|
| Districts     | `/district/get-districts`, `/district/save-districts` |
| Tea Models    | `/district/get-teaModel`, `/district/save-teaModel` |
| Tea Types     | `/district/get-teaType`, `/district/save-teaType` |
| Instructions  | `/district/get-instruction`, `/district/save-instruction` |
| Weather       | `/district/get-weather`, `/district/save-weather` |

Example API call:
```javascript
const fetchDistrictData = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/district/get-districts`);
    setDistrictData(response.data);
  } catch (error) {
    console.error('Error fetching district data:', error);
  }
};
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by supun gimhana | supung367@gmail.com | https://portfoliyo-eight.vercel.app/
