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
  //sending data and taking in it by adding req.body to the try block in the if statement with put method condition
  //updated product will show up in admin page since new:true is added to the try block
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
