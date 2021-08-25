import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

const handler = async (req, res) => {
  try {
    const data = getSession(req, res);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }
};

export default withApiAuthRequired(handler);
