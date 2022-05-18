import dbConnect from "../../../../lib/mongodb";
import PhoneComment from "../../../../models/PhoneComment";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      const newPhoneComment = new PhoneComment(req.body);
      const item = await newPhoneComment.save();

      res.status(200).json({ item });
      break;
  }
};

export default dbConnect(handler);
