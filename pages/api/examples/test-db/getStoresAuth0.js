import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { query as q, Client } from "faunadb";

export default withApiAuthRequired(async function stores(req, res) {
  try {
    const authData = getSession(req, res);
    console.log(authData);

    // const client = new Client({
    //   secret: process.env.FAUNA_DB_SECRET,
    // });
    // console.log(client);

    // const { Create, Documents, Collection, Lambda, Var, Get } = q;
    // const data = await client.query(
    //   q.Map(
    //     Create(Documents(Collection("stores"))),
    //     Lambda(["storeRef"], Get(Var("storeRef")))
    //   )
    // );
    // console.log(data);

    const data = {};

    res.status(200).json(data);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
