INSERT INTO cart
    (product_id, user_id, quantity)
VALUES
    ($1, $2, $3);

select cart_id, quantity, user_id, cart.product_id, product_name, price, category, image
from cart join inventory
    on (cart.product_id = inventory.product_id)
WHERE user_id = $2;