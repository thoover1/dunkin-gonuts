INSERT INTO purchase_history
    (product_id, user_id)
VALUES
    ($1, $2);

SELECT *
FROM purchase_history
WHERE user_id = $2;