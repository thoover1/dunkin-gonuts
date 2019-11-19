UPDATE cart 
SET quantity = $1
WHERE cart_id = $2;

select cart_id, quantity, user_id, cart.product_id, product_name, price, category, image
from cart join inventory
    on (cart.product_id = inventory.product_id)
WHERE user_id = $3;