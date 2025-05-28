# Mental Diary

Designed for mental health offer a secure, easy to use platform for individuals to write, edit, and manage their entries related to their mental well-being. Also
make the user notice behavior and emotion by letting the user type a diary and mark your emotion to check that the user has a mental health issue, good or bad.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CSC105-2024/G02-forget.git
cd G02-forget
```

## Frontend - React

### Tech Stack

- React  
- Axios  
- React Router DOM  
- Tailwind CSS  

### Getting Started - React Client

1. Navigate to the frontend directory:

    ```bash
    cd Front-end
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. The client will be running on [http://localhost:5173](http://localhost:5173)

## Backend - Hono

### Tech Stack

 - Hono
 - MySQL
 - Prisma

## API Endpoints

### User

| Method | Endpoint                            | Description                                                  |
|--------|-------------------------------------|--------------------------------------------------------------|
| POST   | `/user/createUser`                 |   Create a new user   |
| GET    | `/user/getAllUser`                 |   Retrieve a list of all users |
| GET    | `/user/getInfoUser/:id`            |   Get user information by ID   |
| POST   | `/user/signinUser/signin`          |   Sign in a user  |
| GET    | `/user/getDiaryFromUser/diaries/:id/:month/:year`| Get diaries of a user filtered by month and year  |
| PATCH  | `/user/changeTemplate/template/:id`|  Change the user's template by template ID |
| GET   | `/user/getTemplate/getTemplate      |  Retrieve all available templates  |
| GET   | `/user/getProfile/me`               |  Get profile of the currently logged-in user |
| POST  | `/user/logoutUser/logout`           |  Log out the current user                   |

### Diary

| Method | Endpoint                            | Description                                                  |
|--------|-------------------------------------|--------------------------------------------------------------|
| POST   | `/user/createDairy`                 |   Create a new diary entry                            |
| DELETE | `/user/deleteDiary/:id`            |   Delete a diary entry by ID               |
| PATCH  | `/user/editDiary/:id`               |   Edit a diary entry by ID                    |
| PATCH  | `/user/lockDairy/lock/:id`          |   Lock a diary entry to prevent further edits  |

### Node JS Server

1. Navigate to the frontend directory:

    ```bash
    cd Back-end
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Create a .env file and configure the following variables:

    ```bash
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="your_super_secret_key"
    ```

4. The server will be running on [http://localhost:3000](http://localhost:3000)
