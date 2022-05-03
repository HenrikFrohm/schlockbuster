import React, { useState } from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";

const Index = ({ orders, products }) => {
  const [movieList, setMovieList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  {
    /* status array that will be used in one td in the orderList */
  }
  const status = ["preparing", "sending", "delivered"];
  //function to delete product when clicking the delete button
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );

      setMovieList(movieList.filter((movie) => movie._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //function with trycatch statement to change status when clicking button from initial value 0 to 1
  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      //sending data and taking in it by adding "req.body" to the try block in the if statement with put method condition in the products [id] file in api folder.
      //updated product will show up since "new:true" is added to the try block.
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });

      //delete order from orderList then add new one
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (error) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {/* map function to return tbody for each product and render list */}
          {/* including the string attribute key in tbody, used when creating list of elements and to uniquely identify a list item among it's siblings */}
          {movieList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>€{product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  {/* delete product by id onclick using handleDelete function */}
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {/* Same map function as previous one, except now for order */}
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id}</td>
                <td>{order.customer}</td>
                <td>€{order.total}</td>
                {/* condition, check payment method. If it is 0, show first span. If it is not, show second span*/}
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>
                    Next stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  //use context and take request on server, if it is not equal to env token, redirect to login page
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;
