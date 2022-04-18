import dbConnect from "../../../utilities/mongoDB";
import Product from "../../../models/Product";

//Request handler used to make API routes work and handle HTTP methods with req method. Async function
export default function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
  }

  if (method === "POST") {
  }
}
