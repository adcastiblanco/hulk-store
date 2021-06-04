import React, { useRef, useContext } from "react";
import AppContext from "../../context/AppContext";

import { Container, ModalContainer, Input } from "./styles";

function QuantityModal({ setShow, action }) {
  const { addQuantity, removeQuantity } = useContext(AppContext);
  const inputNumber = useRef();

  const handleSuccess = () => {
    let quantity = parseInt(inputNumber.current.value);
    if (action.typeAction === "Remove" && quantity > action.quantity) {
      alert("No puedes eliminar mas productos de los disponibles en stock");
    } else {
      action.typeAction === "Remove"
        ? removeQuantity({ id: action.id, quantity })
        : addQuantity({ id: action.id, quantity });
      setShow(false);
    }
  };

  return (
    <Container>
      <ModalContainer>
        <div>
          <h2>Digita la cantidad</h2>
        </div>
        <Input ref={inputNumber} type="number" defaultValue="1" />
        <button onClick={() => setShow(false)}>Cancelar</button>
        <button onClick={handleSuccess}>Completar</button>
      </ModalContainer>
    </Container>
  );
}

export default QuantityModal;
