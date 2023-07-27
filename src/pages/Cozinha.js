import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import styles from "../css/Cozinha.module.css";

const Cozinha = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // useEffect to redirect if user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Simulate dynamic orders update every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) => [...prevOrders, `Pedido ${Date.now()}`]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Return null while isAuthenticated is false
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pedidos:</h1>
      <ul className={styles.orderList}>
        {orders.map((order, index) => (
          <li key={index} className={styles.orderItem}>
            <button onClick={() => console.log(`Clicked: ${order}`)}>
              {order}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cozinha;
