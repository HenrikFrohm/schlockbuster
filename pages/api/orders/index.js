import dbConnect from "../../../utilities/mongo";
import Order from "../../../models/Order";

//Request handler used to make API routes work and handle HTTP methods with req method. Async function to always return a promise.
export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  // GET request with async process to get orders from db, or find a specific with title, description and so forth.
  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
      //catch block, if there's an error, return 500 page
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
