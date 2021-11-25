import { gql } from "@apollo/client";
import { COUNTRY_FIELDS }  from "./fragments"; 

export const COUNTRIES = gql`
  ${ COUNTRY_FIELDS }
  query getCountries {
   countries {
    ...Country
   }  
  }  
`;



