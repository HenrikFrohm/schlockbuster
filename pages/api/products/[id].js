import dbConnect from "../../../utilities/mongo";
import Product from "../../../models/Product";

//Request handler used to make API routes work and handle HTTP methods with req method. Async function to always return a promise.
// adding requirement for cookies for choosen requests, in this case put and delete methods
export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.token;

  await dbConnect();

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

  // PUT request with async process to alter/edit/update products from db by id.
  // if there's no token, give error
  if (method === "PUT") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated");
    }
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // if there's no token, give error
  if (method === "DELETE") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated");
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("Product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
