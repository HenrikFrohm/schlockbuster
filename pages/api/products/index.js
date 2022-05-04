import dbConnect from "../../../utilities/mongo";
import Product from "../../../models/Product";

//request handler used to make API routes work and handle HTTP methods with req method. Async function to always return a promise.
// adding requirement for cookies for post requests to create products
export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  // GET request with async process to get products from db, or find a specific with title, description and so forth.
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // POST request method with async process to create products in db.
  // if there's no token, give error
  if (method === "POST") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated");
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
