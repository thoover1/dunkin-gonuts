INSERT INTO users
    (username, email, password, phone_number)
VALUES
    ($1, $2, $3, $4);

SELECT user_id, email, username
FROM users
WHERE email = $2;