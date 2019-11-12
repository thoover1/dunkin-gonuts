SELECT users.user_id, product_name, inventory.product_id, price, image
FROM users
    JOIN cart
    ON (users.user_id = cart.cart_id)
    JOIN inventory
    ON (cart.cart_id = inventory.product_id)

