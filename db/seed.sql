-- seed data file

-- purchase_history should go first because the other tables are dependent on this table
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

INSERT INTO users
    (
    username, password, email
    )
VALUES
    ('thoover1', '$2b$12$HEjva0QfF7bWFSFIVoJZA.8dOqiNoFCeTZ.AHexC2MmeJawoukA2.', 'thoover1@uab.edu');

CREATE TABLE inventory
(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    category VARCHAR(24) NOT NULL,
    image TEXT NOT NULL
);

INSERT INTO inventory
    (product_name, price, category, image)
VALUES
    ('glazed', 1, 'donut', 'https://webstockreview.net/images/donut-clipart-frosted-6.png'),
    ('raspberry-filled', 1, 'donut', 'https://i.pinimg.com/originals/5e/c8/15/5ec815c3b99e672896f726b6c43a0afe.png'),
    ('bavarian cream', 1, 'donut', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d172d7b1-a7b9-4d76-9d62-b7e135be03a1/dbtjxpf-85425638-a0b5-427f-bd37-ee905733b4ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxNzJkN2IxLWE3YjktNGQ3Ni05ZDYyLWI3ZTEzNWJlMDNhMVwvZGJ0anhwZi04NTQyNTYzOC1hMGI1LTQyN2YtYmQzNy1lZTkwNTczM2I0YmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gdBbSXoGv8ENXtzITp2QHgIhoxpaA2tPUwnl7eS-2cM'),
    ('sprinkles', 1, 'donut', 'https://i.pinimg.com/originals/05/b1/e9/05b1e957ba70dc5aae061e4dfad17455.png'),
    ('sugar', 1, 'donut', 'https://devils-dozen.com/wp-content/uploads/sugar_donut.png'),
    ('chocolate', 1, 'donut', 'https://www.entenmanns.com/sites/default/files/styles/large/public/00026-MiniFrosted.png?itok=kmOY3Jej'),
    ('pumpkin-cream-filled', 2, 'donut', 'https://www.krispykreme.com/getattachment/90e0ab48-5c8c-4a36-962b-92241e733b3c/Original-Filled-Original-Kreme%E2%84%A2.aspx?width=310&height=310&mode=max&quality=60&format=jpg'),
    ('gluten-free-sprinkles', 2, 'donut', 'https://i.pinimg.com/originals/05/b1/e9/05b1e957ba70dc5aae061e4dfad17455.png'),
    ('vegan-glazed', 2, 'donut', 'https://webstockreview.net/images/donut-clipart-frosted-6.png'),
    ('hot-coffee', 2, 'drink', 'https://www.dunkindonuts.com/content/dam/dd/img/products/hot-drinks/coffee/tiles/LP-promo-x2-hot-coffee-620x506.jpg'),
    ('iced-coffee', 3, 'drink', 'https://cdn.vox-cdn.com/thumbor/i0f36J9AcNnhmH6S_NdPYKCPnc0=/570x52:2902x1801/1200x675/filters:focal(570x52:2902x1801)/cdn.vox-cdn.com/uploads/chorus_image/image/50294731/headered.0.0.jpg'),
    ('blended-coffee', 3, 'drink', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmRc6czT7-V64VP129PYg0ioP4aH_BhLeZhZ4sQwphoi2yUWpC'),
    ('hot-chocolate', 2, 'drink', 'https://s3.amazonaws.com/cms.ipressroom.com/285/files/20168/57eaa5d02cfac26eb34e61b9_OREO+Flavored+Hot+Chocolate/OREO+Flavored+Hot+Chocolate_a4be981a-6f4c-48b5-851b-69327dc1cdfe-prv.jpg'),
    ('iced-tea', 2, 'drink', 'https://www.dunkindonuts.com/content/dam/dd/img/products/cold-drinks/iced-tea/promos/promo-overlay-iced-tea-768x384.jpg'),
    ('bag-o-dunkin', 12, 'drink', 'https://images-na.ssl-images-amazon.com/images/I/41tN%2BOGJubL.jpg'),
    ('brown-sugar-chipotle-bacon', 5, 'sandwich', 'https://www.chewboom.com/wp-content/uploads/2019/06/Dunkin%E2%80%99-Introduces-New-Sweet-BBQ-Bacon-Breakfast-Sandwich-678x381.jpg'),
    ('sausage-egg-cheese', 4, 'sandwich', 'https://www.dunkindonuts.com/content/dam/dd/img/products/sandwiches-wraps/sausage-egg-cheese/tiles/lp-promo-x2-sausage-egg-&-cheese-620x506.jpg'),
    ('egg-cheese-muffin', 4, 'sandwich', 'https://www.dunkindonuts.com/content/dam/dd/img/products/sandwiches-wraps/egg-cheese/tiles/lp-promo-x2-egg-&-cheese-620x506.jpg'),
    ('glazed-breakfast', 4, 'sandwich', 'https://s3.amazonaws.com/cms.ipressroom.com/285/files/201602/56afcab0acae6e374ce05291_Glazed_Donut_Breakfast_Sandwich/Glazed_Donut_Breakfast_Sandwich_23e5e03a-6512-427d-89a8-2ff7874e1b4c-prv.jpg'),
    ('bacon-egg-cheese-wrap', 3, 'sandwich', 'https://www.dunkindonuts.com/content/dam/dd/img/products/sandwiches-wraps/wake-up-wraps/heros/hero-product-wake-up-wraps-640x480.jpg'),
    ('eggwhite-turkey-cheese-wrap', 4, 'sandwich', 'https://cbsnews1.cbsistatic.com/hub/i/r/2011/02/23/e41aa6ac-a642-11e2-a3f0-029118418759/resize/620x465/374d2f5b06945c50033a78f50d69ac37/dunkindonuts_wrap.jpg');

CREATE TABLE purchase_history
(
    purchase_id SERIAL PRIMARY KEY,
    purchase_date DATE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(user_id),
    product_id INTEGER REFERENCES inventory(product_id)
);

INSERT INTO purchase_history
    (user_id, product_id)
VALUES
    -- this may or may not be correct....
    ($1, $2);


-- user purchase history on one table for chartjs

-- SELECT * FROM users;
-- SELECT * FROM inventory;
SELECT users.user_id, username, password, purchase_date, product_name, inventory.product_id, price, category, image
FROM users
    JOIN purchase_history
    ON (users.user_id = purchase_history.user_id)
    JOIN inventory
    ON (purchase_history.product_id = inventory.product_id);


-- cart.sql
CREATE TABLE cart
(
    cart_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    product_id INTEGER REFERENCES inventory(product_id)
)

INSERT INTO cart
    (user_id, product_id)
VALUES
    ($1, $2)

SELECT users.user_id, product_name, inventory.product_id, price, image
FROM users
    JOIN cart
    ON (users.user_id = cart.cart_id)
    JOIN inventory
    ON (cart.cart_id = inventory.product_id)



--############### ICEBOX ###############--
-- CREATE TABLE previous_order
-- (
--     previous_order_id SERIAL PRIMARY KEY,
--     purchase_id INTEGER REFERENCES purchase_history(purchase_id),
--     user_id INTEGER REFERENCES users(user_id),
--     product_id INTEGER REFERENCES inventory(product_id)
-- );

-- INSERT INTO previous_order
--     (purchase_date, user_id, product_id)
-- VALUES
--     (1, 1, ,1)


-- user previous order for quick buy

-- SELECT *
-- FROM users
--     INNER JOIN purchase_history
--     ON users.user_id = purchase_history.user_id
--         AND purchase_id = (
--     SELECT TOP 1
--             product_id.puchase_id
--         FROM purchase_history product_id
--         WHERE product_id.user_id = purchase_history.user_id
--         ORDER BY product_id.purchase_date DESC
-- )