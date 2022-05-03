import dbConnect from "../../../utilities/mongo";
import Product from "../../../models/Product";

//Request handler used to make API routes work and handle HTTP methods with req method. Async function to always return a promise.
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  // GET request with async process to get products from db, or find a specific with title, description and so forth.
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
      //catch block, if there's an error, return 500 page
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // PUT request with async process to alter/edit/update products from db by id
  if (method === "PUT") {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("Product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
