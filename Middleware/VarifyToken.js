import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
export const varifyToken = (req, res, next) => {
  // check cookie

  const { accesstoken } = req.cookies;

  if (!accesstoken) {
    return res.status(401).json({ message: ` unautorize` });
  }

  // verify token
  jwt.verify(
    accesstoken,
    process.env.JWT_SECTRET,
    asyncHandler((err, decode) => {
      if (err) {
        return res.status(400).json({ message: `invalid token` });
      }
      next();
    })
  );
};
