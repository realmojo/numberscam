import dbConnect from "../../../../lib/mongodb";
import PhoneComment from "../../../../models/PhoneComment";
import moment from "moment";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      const newPhoneComment = new PhoneComment({
        ...req.body,
        created: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
      const item = await newPhoneComment.save();

      res.status(200).json({ item });
      break;
  }
};

export default dbConnect(handler);
