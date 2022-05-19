import dbConnect from "../../../lib/mongodb";
import Phone from "../../../models/Phone";
import moment from "moment";

const handler = async (req, res) => {
  const { method } = req;
  let { number } = req.query;
  number = number.replace(/[^0-9]/g, "");

  switch (method) {
    case "GET":
      const item = await Phone.findOne({ number });
      res.status(200).json(item || undefined);
      break;
  }
};

export default dbConnect(handler);
