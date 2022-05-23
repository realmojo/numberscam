import dbConnect from "../../lib/mongodb";
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
const handler = async (_, res) => {
  res.status(500).json({ message: "hello" });
};

export default dbConnect(handler);
