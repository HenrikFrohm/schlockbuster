import Order from "../../../models/Order";
import dbConnect from "../../../utilities/mongo";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  // GET request with async process to get order by id from db
  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
      //catch block, if there's an error, return 500 page
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
  }
};

export default handler;
