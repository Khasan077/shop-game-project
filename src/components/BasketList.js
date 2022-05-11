import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props) {
   const { order, handleBasketShow, decrementQuantity, incrementQuantity } =
      props;

   const totalPrice = order.reduce((sum, el) => {
      return sum + el.price * el.quantity;
   }, 0);
   return (
      <div className="bsk">
         <ul class="collection basket-list">
            <li class="collection-item active">Basket</li>
            {order.length ? (
               order.map((item) => {
                  return (
                     <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={props.removeFromBasket}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                     />
                  );
               })
            ) : (
               <li className="collection-item">Basket is empty</li>
            )}
            <li class="collection-item">Total Cost: {totalPrice}$</li>
            <i
               className="material-icons basket-close"
               onClick={handleBasketShow}
            >
               close
            </i>
         </ul>
      </div>
   );
}

export default BasketList;
