//https://www.youtube.com/watch?v=tE3WOGIJ1mI&ab_channel=JamesPerkins
import { ApolloClient, InMemoryCache } from "@apollo/client";
import charactersQuery from "../apollo/rick-and-morty/queries/characters";
import rickNMortyGQLClient from "../apollo/rick-and-morty/client";

const Page = ({ data }) => {
  return (
    <>
      <h1>Rick And Morty page</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const { data } = await rickNMortyGQLClient.query({
    query: charactersQuery,
  });
  return {
    props: { data },
  };
}
