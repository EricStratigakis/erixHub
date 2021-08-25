import { gql } from "@apollo/client";

export default gql`
  query {
    characters(page: 1) {
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
