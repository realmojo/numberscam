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
    case "POST":
      const { message, ip } = req.body;
      const params = {
        phoneId: id,
      };
      // const item = await PhoneComment

      const newPhoneComment = new PhoneComment(params);
      const item = await newPhoneComment.save();

      res.status(200).json({ item });
      break;
  }
};

export default dbConnect(handler);
