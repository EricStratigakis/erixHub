import rickAndMortyAPIClient from "../../../../apollo/examples/rick-and-morty/client";
import searchCharactersQueryGenerator from "../../../../apollo/examples/rick-and-morty/queries/searchCharacters";

const handler = async (req, res) => {
  const search = req.body;
  try {
    const { data } = await rickAndMortyAPIClient.query({
      query: searchCharactersQueryGenerator({ search }),
    });
    res.status(200).json({ characters: data.characters.results, error: null });
  } catch (error) {
    if (error.message === "404: Not Found") {
      res.status(404).json({ characters: null, error: "No Characters found" });
    } else {
      res
        .status(500)
        .json({ characters: null, error: "Internal Error, Please try again" });
    }
  }
};

export default handler;
