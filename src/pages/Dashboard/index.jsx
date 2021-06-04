import React, { useContext } from "react";
import { ProductCard } from "../../components";
import AppContext from "../../context/AppContext";
import { ContainerProducts } from "./styles";

function Dashboard() {
  const {
    state: { products },
  } = useContext(AppContext);
  return (
    <ContainerProducts>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ContainerProducts>
  );
}

export default Dashboard;
