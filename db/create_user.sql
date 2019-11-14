INSERT INTO users
<<<<<<< HEAD
    (username, email, password, phone_number)
VALUES
    ($1, $2, $3, $4);

SELECT user_id, email, username
FROM users
WHERE email = $2;
=======
    (username, email, password)
VALUES
    ($1, $2, $3);

SELECT email, username
FROM users
WHERE email = $1;
>>>>>>> 4e59ad6b0277185ea42577e6e94186f2edb42c42
