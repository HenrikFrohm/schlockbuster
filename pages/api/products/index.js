import dbConnect from "../../../utilities/mongo";
import Product from "../../../models/Product";

//Request handler used to make API routes work and handle HTTP methods with req method. Async function to always return a promise.
export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  // GET request with async process to get products from db, or find a specific with title, description and so forth.
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
