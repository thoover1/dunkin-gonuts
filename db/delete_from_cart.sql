DELETE FROM cart 
WHERE cart_id = $1
    AND user_id = $2;

Select product_name, price, image, quantity, cart_id
from inventory
    JOIN cart
    ON cart.product_id = inventory.product_id
where cart.user_id = $2;