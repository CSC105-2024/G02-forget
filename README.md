## CRUD
### Create
  - createDairy
  - createUser
  - signinUser
### Read
  - getAllUser
  - getInfoUser
  - getDiaryFromUser
  - getTemplate
### Update
  - editDiary
  - lockDairy
  - changeTemplate
### Delete
  - deleteDiary
## How to run
### Front-end
```
cd Front-end
npm i
npm run dev
```
### Back-end
```
cd Back-end
npm i
npm run dev
```
## API
### User
  - createUser - Create a new user in the system.
  - getAllUser - Retrieves all user data.
  - signinUser - Allows a user to sign in with their username and password.
  - getDiaryFromUser - Retrives all diaries belonging to a specific user.
  - changeTemplate - Changes the user's template.
  - isDuplicate - Checks if the information has already been used by someone else.
  - getInfoUser - Retrives detailed information of a specific user.
  - getTemplate - Retrives the current template used by the user.
### Diary
  - createDiary - Create a new diary entry.
  - deleteDiary - Delete a diary entry.
  - editDiary - Edits the content of a diary entry.
  - lockDairy - Locks a diary entry to prevent editing.

