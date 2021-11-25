import { gql } from "@apollo/client";

export const COUNTRY_FIELDS = gql`
  fragment Country on Country {
    code
    name
    capital
    continent {
      name
    }
  }
`;
