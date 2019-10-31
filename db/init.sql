DROP TABLE IF EXISTS purchase_history;
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS users;


CREATE TABLE users 
(
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

INSERT INTO users (username, password, email)
VALUES ('nick', 'nick123', 'nick@nick.com');


CREATE TABLE inventory 
(
    part_id SERIAL PRIMARY KEY,
    part_name VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    quality TEXT NOT NULL,
    image TEXT NOT NULL
);
 INSERT INTO inventory (part_name, price, quality, image)
 VALUES 
 ('lungs', 700, 'B', 'https://www.thoughtco.com/thmb/bamfo7-3rDOaKe5Yok3J_F2PefY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/lungs_alveoli-57ffa7fe3df78cbc284e162b.jpg');

CREATE TABLE purchase_history 
(
    purchase_id SERIAL PRIMARY KEY,
    purchase_date DATE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(user_id),
    part_id INTEGER REFERENCES inventory(part_id)
);
INSERT INTO purchase_history (user_id, part_id)
VALUES (1, 1);

SELECT users.user_id, username, password, email, purchase_date, part_name, inventory.part_id, price, quality, image FROM users JOIN purchase_history 
    ON (users.user_id = purchase_history.user_id)
    JOIN inventory ON (purchase_history.part_id = inventory.part_id);