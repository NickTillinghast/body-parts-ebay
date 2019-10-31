# Body Parts Ebay

## frontend (React)

### dependencies

- axios
- redux
- react-router-dom
- react-router
- http-proxy-middleware
- redux- promise-middleware
- node-sass

### routes

- login/register => '/' => AuthComponent.js
- Store => "/body_parts" => AvailableBodyParts.js
- Profile => "/profile" => Profile.js

### file-structure

- src/
  - components
    - AuthComponent.js
    - AvailableBodyParts.js
    - Profile.js
  - App.js
  - index.js
  - index.css => reset.css
  - setupProxy.js
  - ducks/
    - store.js
    - reducer.js

## backend (Express)

### dependecies

- express
- massive
- dotenv
- express-session
- bcrypt

## server file structure

- db/
- server/
  - index.js
  - controller/
    - userController.js
    - inventoryController.js
  - middleware/
    - sessionCheck.js

### endpoints

**user/auth**

- userSession: => get => /auth/session
- register: => /auth/register
- login: => /auth/login
- logout: => /auth/logout

- addToCart: => post => /api/add_to_cart
- getCart: => get => /api/get_cart
- deleteFromCart => delete => /api/delete_from_cart/:id
- updateEmail: => put => /api/update_email
- getPurchaseHistory => /api/purchase_history/:id

  **inventory**

- showAllInventory => get => /api/inventory

### secrets

```text
CONNECTION_STRING=
SESSION_SECRET=
SERVER_PORT=
```

## database (postgreSQL)

- User Table

```sql
CREATE TABLE users {
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
};
```

- Body Parts Inventory

```sql
CREATE TABLE inventory {
    part_id SERIAL PRIMARY KEY,
    part_name VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    quality TEXT NOT NULL,
    image TEXT NOT NULL
};
```

- purchase_history

```sql
CREATE TABLE purchase_history {
    purchase_id SERIAL PRIMARY KEY,
    purchase_date DATE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(user_id),
    part_id INTEGER REFERENCES inventory(part_id)
};
```

- Admin Table (icebox)
