import jwt from "jsonwebtoken";

export const signAccess = (user) =>
  jwt.sign(
    { sub: user.id, email: user.email, role: user.role },
    process.env.ACCESS_SECRET,
    { expiresIn: "15m" }
  );
