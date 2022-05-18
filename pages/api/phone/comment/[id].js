import dbConnect from "../../../../lib/mongodb";
import PhoneComment from "../../../../models/PhoneComment";

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const items = await PhoneComment.findOne({ id }).sort({ created: -1 });
      res.status(200).json({ items: items ? items : [] });
      break;
    default:
      res.status(200).json({ message: "hello" });
      break;
  }
};

export default dbConnect(handler);
