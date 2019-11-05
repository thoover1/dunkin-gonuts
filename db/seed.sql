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
    ('glazed', 1, 'donut', 'https://www.pikpng.com/pngl/m/56-560849_glazed-donut-png-transparent-png.png'),
    ('raspberry-filled', 1, 'donut', 'https://mpng.pngfly.com/20180701/wvw/kisspng-donuts-gelatin-dessert-bakery-stuffing-jelly-dough-french-tacos-5b39590b113126.5426527715304850030704.jpg'),
    ('bavarian cream', 1, 'donut', 'https://cdn.imgbin.com/11/5/18/imgbin-donuts-bavarian-cream-boston-cream-doughnut-profiterole-chocolate-donuts-64n457iLjSMRqau0L03Ubj51p.jpg'),
    ('sprinkles', 1, 'donut', 'https://p1.hiclipart.com/preview/814/298/558/28-donuts-s-doughnut-with-sprinkles.jpg'),
    ('sugar', 1, 'donut', 'https://banner2.cleanpng.com/20180614/fz/kisspng-cider-doughnut-donuts-ciambella-bagel-rye-bread-purple-sweet-potato-5b2294e98c6704.2996669415289930015751.jpg'),
    ('chocolate-frosting', 1, 'donut', 'https://www.pngfind.com/pngs/m/301-3010673_chocolate-glazed-donut-donuts-chocolate-glaze-png-transparent.png'),
    ('pumpkin-cream-filled', 2, 'donut', 'https://cdn0.wideopeneats.com/wp-content/uploads/2019/09/krispy-kreme-1-720x405.png'),
    ('gluten-free-sprinkles', 2, 'donut', 'https://banner2.cleanpng.com/20171216/452/donut-png-5a35ec27e8b5c9.4109497115134833039532.jpg'),
    ('vegan-glazed', 2, 'donut', 'https://cdn.imgbin.com/0/9/23/imgbin-donut-BEF1VTpzWApHAwFrhNdUKeUpE.jpg'),
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

-- seems generic... feels like I should insert this into a new table(i.e. add_to_cart.sql)???
INSERT INTO purchase_history
    (user_id, product_id)
VALUES
    (1, 1);


-- user purchase history on one table for chartjs

-- SELECT * FROM users;
-- SELECT * FROM inventory;
SELECT users.user_id, username, password, purchase_date, product_name, inventory.product_id, price, category, image
FROM users
    JOIN purchase_history
    ON (users.user_id = purchase_history.user_id)
    JOIN inventory
    ON (purchase_history.product_id = inventory.product_id);


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