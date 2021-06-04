import React from "react";

import { Image, CardContainer, BuyBotton } from "./styles";

function ProductCard({ product }) {
  const { image, description, price, quantity } = product;
  return (
    <CardContainer>
      <Image src={image} />
      <p>{description}</p>
      <strong>${price}</strong>
      <div>
        {quantity === 0 ? (
          <p>No hay unidades disponibles</p>
        ) : (
          <BuyBotton
            to={{ pathname: "/checkout", state: { product: product } }}
          >
            Comprar
          </BuyBotton>
        )}
      </div>
    </CardContainer>
  );
}

export default ProductCard;
