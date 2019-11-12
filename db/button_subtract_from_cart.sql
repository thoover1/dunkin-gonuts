INSERT INTO cart
    (product_id, user_id, quantity)
VALUES
    ($1, $2, -1);

SELECT *
FROM cart
WHERE user_id = $2;