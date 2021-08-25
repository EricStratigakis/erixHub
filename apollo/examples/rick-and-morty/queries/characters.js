import { gql } from "@apollo/client";

// returns a function that takes arguments, and formats query
const queryGenerator = ({ page }) => {
  return gql`
    query {
      characters(page: ${page}) {
        info {
          count
          pages
        }
        results {
          name
          id
          location {
            name
            id
          }
          image
          origin {
            name
            id
          }
          episode {
            id
            episode
            air_date
          }
        }
      }
    }
  `;
};

export default queryGenerator;
