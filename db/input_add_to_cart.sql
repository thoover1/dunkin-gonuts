INSERT INTO cart
    (product_id, user_id, quantity)
VALUES
    ($1, $2, $3);

-- SELECT *
-- FROM cart
-- WHERE user_id = $2;