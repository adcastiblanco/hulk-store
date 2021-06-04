import React, { useContext, useState } from "react";
import QuantityModal from "../../components/QuantityModal";
import AppContext from "../../context/AppContext";

import { Table } from "./styles";

function Kardex() {
  const {
    state: { products },
  } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState({});

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>DESCRIPCIÓN</th>
            <th>IMAGEN</th>
            <th>PRECIO</th>
            <th>CANTIDAD</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(
            ({ id, image, title, price, description, quantity }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <img src={image} width="100" />
                </td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      setAction({ typeAction: "Add", id, quantity });
                      setShowModal(true);
                    }}
                  >
                    Añadir
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setAction({ typeAction: "Remove", id, quantity });
                      setShowModal(true);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      {showModal && <QuantityModal setShow={setShowModal} action={action} />}
    </div>
  );
}

export default Kardex;
