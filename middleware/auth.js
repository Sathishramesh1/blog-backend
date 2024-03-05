import jwt from "jsonwebtoken";
import CustomError from "../utils/error.js";

export const protectRoute = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(404).send('Token not found');
  }

  const authToken = token.slice(7); 

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    throw new CustomError("Access denied. Invalid token.", 401);
  }
};
