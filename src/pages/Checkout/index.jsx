import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../context/AppContext";
import {
  ContainerCheckout,
  ContainerProduct,
  Price,
  InputForm,
  ContainerForm,
  TitleForm,
} from "./styles";

function Checkout({ location }) {
  const { removeQuantity } = useContext(AppContext);
  const {
    state: { product },
  } = location;

  const history = useHistory();

  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.quantity > product.quantity) {
      alert(
        `La cantidad maxima disponible de este producto es de ${product.quantity}`
      );
    } else {
      removeQuantity({ id: product.id, quantity: data.quantity });
      history.push({ pathname: "/success", state: data });
    }
  };

  return (
    <ContainerCheckout>
      <ContainerProduct>
        <p>{product.title}</p>
        <Price>${product.price}</Price>
        <img src={product.image} width="60%" />
      </ContainerProduct>
      <ContainerForm onSubmit={handleSubmit}>
        <TitleForm>Datos de entrega</TitleForm>
        <label>Ingresa tu nombre completo</label>
        <InputForm
          type="text"
          required
          placeholder="Nombre Completo"
          name="name"
          onChange={handleChange}
        />
        <label>Ingresa tu correo electronico</label>
        <InputForm
          type="email"
          required
          placeholder="Correo Electronico"
          name="email"
          onChange={handleChange}
        />
        <label>Dirección de residencia</label>
        <InputForm
          type="address"
          required
          placeholder="Dirección"
          name="address"
          onChange={handleChange}
        />
        <label>Cantidad de productos</label>
        <InputForm
          type="number"
          required
          placeholder="Cantidad"
          name="quantity"
          onChange={handleChange}
        />
        <button type="submit">Finalizar compra</button>
      </ContainerForm>
    </ContainerCheckout>
  );
}

export default Checkout;
