import dbConnect from "../../lib/mongodb";

const handler = async (_, res) => {
  res.status(500).json({ message: "hello" });
};

export default dbConnect(handler);
