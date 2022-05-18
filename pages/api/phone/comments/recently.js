import dbConnect from "../../../../lib/mongodb";
import PhoneComment from "../../../../models/PhoneComment";

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const recentlyItems = await PhoneComment.find()
        .sort({
          created: -1,
        })
        .limit(20);
      res.status(200).json({ recentlyItems });
      break;
  }
};

export default dbConnect(handler);
