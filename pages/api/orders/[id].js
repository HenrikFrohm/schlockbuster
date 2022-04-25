import Order from "../../../models/Order";
import dbConnect from "../../../utilities/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  // GET request with async process to get order from db, or find a specific with title, description and so forth.
  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body);
      res.status(201).json(order);
      //catch block, if there's an error, return 500 page
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
  }
}
