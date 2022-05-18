const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ message: "hddello" });
      break;
    default:
      res.status(200).json({ message: "hello" });
      break;
  }
};

export default handler;
