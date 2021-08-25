//https://www.youtube.com/watch?v=tE3WOGIJ1mI&ab_channel=JamesPerkins

import charactersQueryGenerator from "../../../apollo/examples/rick-and-morty/queries/characters";
import rickAndMortyAPIClient from "../../../apollo/examples/rick-and-morty/client";

import { useState } from "react";

const Page = ({ data }) => {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState(data.characters.results);

  return (
    <>
      <h1>Rick And Morty Apollo GQL Example Page</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const results = await fetch(
            "/api/examples/rick-and-morty/searchCharacters",
            {
              method: "post",
              body: search,
            }
          );
          const { characters, error } = await results.json();
          if (error) {
            toast({
              position: "bottom",
              title: "An error occurred.",
              description: error,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          } else {
            setCharacters(characters);
          }
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          border="none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button aria-label="Search database" type="submit">
          Submit
        </button>
      </form>
      <ul>
        {characters.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Page;

export async function getStaticProps() {
  // get the raw character data before the page laods
  const { data } = await rickAndMortyAPIClient.query({
    query: charactersQueryGenerator({ page: 1 }),
  });
  return {
    props: { data },
  };
}
