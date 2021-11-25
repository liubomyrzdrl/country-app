import { gql } from "@apollo/client";
import { COUNTRY_FIELDS }  from "../../components/countries/country/Country"; 

export const COUNTRIES__QUERY = gql`
  query getCountries {
   countries {
    ...Country
   }  
  }
  ${ COUNTRY_FIELDS }  
`;



