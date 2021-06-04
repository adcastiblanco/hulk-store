import React from "react";

function Success({ location }) {
  const { state } = location;
  return (
    <div>
      <h2>Gracias por tu compra</h2>
      <p>
        {state.name} pronto entregaremos tu producto en {state.address}
      </p>
    </div>
  );
}

export default Success;
