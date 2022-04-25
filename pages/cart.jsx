import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import { reset } from "../redux/cartSlice";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
  //setting useState false for payment options so they only show up after clicking on checkout button
  const [open, setOpen] = useState(false);
  //dispatching redux actions
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  //useRouter hook used to handle client side order transitions
  const router = useRouter();
  // async function with try catch statement.
  const createOrder = async (data) => {
    try {
      //response after creating order
      const res = axios.post("http://localhost:3000/api/orders", data);
      //if it's successfull it will go to the order page with order id
      res.status === 201 && router.push("/orders/" + res.data._id);
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
  };
  // This values are the props in the UI for paypal
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* table with one header- and one data row */}
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Title</th>
              <th>Video Platform</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt="Movie Image"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </div>
                </td>
                <td>
                  <span className={styles.title}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.platform}>
                    {product.platform.map((platform) => (
                      <span key={platform._id}>{platform.text} </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>€{product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    €{product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.totalTitle}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: €{cart.total}</b>
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton}>CASH ON DELIVERY</button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AeeairOUrMyi9AG8UDPhRupua1BDOcTV_9zPuiTGeRibQPtKv4ktdnEYOZm39tajPtS9E_Vdo-oHA1lQ",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT
            </button>
          )}
          {/* choose option to remove other payment methods other than Paypal */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
