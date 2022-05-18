import dbConnect from "../../../lib/mongodb";
import Phone from "../../../models/Phone";
import moment from "moment";

const handler = async (req, res) => {
  const { method } = req;
  let { number, ip, message } = req.query;

  switch (method) {
    case "POST":
      number = number.replace(/[^0-9]/g, "");
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
      break;
  }
};

export default dbConnect(handler);
