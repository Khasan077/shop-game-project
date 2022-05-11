import React from "react";

function BasketItem(props) {
   const { id, name, price, quantity, decrementQuantity, incrementQuantity } =
      props;
   return (
      <li className="collection-item">
         {name} x{quantity} = {price * quantity}$
         <span className="secondary-content">
            <a
               class="waves-effect waves-light btn btnq"
               onClick={() => incrementQuantity(id)}
               style={{margin: ''}}
            >
               <i class="material-icons left">exposure_plus_1</i>
            </a>
            <a
               class="waves-effect waves-light btn btnq"
               onClick={() => decrementQuantity(id)}
            >
               <i class="material-icons left">exposure_minus_1</i>
            </a>
            <a className="waves-effect waves-light btn btnq"
             onClick={() => props.removeFromBasket(id)}>
                 <i className="material-icons basket-delete">delete_forever </i>
            </a>
         </span>
      </li>
   );
}

export default BasketItem;
