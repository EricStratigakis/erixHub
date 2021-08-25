import { gql } from "@apollo/client";

// returns a function that takes arguments, and formats query
const queryGenerator = ({ search }) => {
  return gql`
    query {
        characters(filter: { name: "${search}" }) {
            info {
                count
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
    }`;
};

export default queryGenerator;
