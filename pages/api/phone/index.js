import dbConnect from "../../../lib/mongodb";
import Phone from "../../../models/Phone";
import moment from "moment";

const handler = async (req, res) => {
  const { method } = req;
  let { number, ip } = req.body;

  if (!number) {
    throw "no number";
  }
  try {
    switch (method) {
      case "POST":
        // 숫자만 들어가게끔 함.
        number = number.replace(/[^0-9]/g, "");
        const params = {
          number,
          ip,
        };

        const newPhone = new Phone(params);
        const item = await newPhone.save();

        res.status(200).json(item || {});
        break;
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export default dbConnect(handler);
