import dbConnect from "../../../lib/mongodb";
import Phone from "../../../models/Phone";
import moment from "moment";

const handler = async (req, res) => {
  const { method } = req;
  const { number, ip, message } = req.query;

  switch (method) {
    case "POST":
      let params = {
        number,
        ip,
      };

      if (message) {
        const phoneItem = await Phone.findOne({ number });
        params.comments = phoneItem.comment.push({
          message,
          ip,
          created: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
      }

      const newPhone = new Phone(params);
      const item = await newPhone.save();

      res.status(200).json({ item: item || {} });
      // res.status(200).json({ item: "tt" });
      break;
    default:
      res.status(200).json({ message: "hello" });
      break;
  }
};

export default dbConnect(handler);
