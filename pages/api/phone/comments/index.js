import dbConnect from "../../../../lib/mongodb";
import PhoneComment from "../../../../models/PhoneComment";

const handler = async (req, res) => {
  const { method } = req;
  const { number } = req.query;

  switch (method) {
    case "GET":
      const commentItems = await PhoneComment.find({ number }).sort({
        created: -1,
      });
      res.status(200).json({ commentItems });
      break;
  }
};

export default dbConnect(handler);
