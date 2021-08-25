import { listProducts } from "../../../lib/fauna";

const handler = async (req, res) => {
  try {
    const client = new Client({
      secret: process.env.FAUNA_ADMIN_KEY,
    });
    console.log(client);

    const { Create, Documents, Collection, Lambda, Var, Get } = q;
    const data = await client.query(
      q.Map(
        Create(Documents(Collection("stores"))),
        Lambda(["storeRef"], Get(Var("storeRef")))
      )
    );
    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

export default handler;
