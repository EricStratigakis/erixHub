const handler = (req, res, next) => {
  res.status(200).json({ name: "John Doe" });
};

export default handler;
