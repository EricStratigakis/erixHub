import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { query as q, Client, Create } from "faunadb";

export default withApiAuthRequired(async function stores(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    console.log(accessToken);

    const client = new Client({
      secret: accessToken,
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
});
