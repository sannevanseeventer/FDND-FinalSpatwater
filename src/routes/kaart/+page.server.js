import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query kaart {
        kansenkaarts {
        geometry
        kWaarde
        location {
            latitude
            longitude
        }
        meerDanHonderdvijftig
        minderDanVijfentwintig
        slug
        title
        vijftigVijfenzeventig
        vijfenzegentigHonderd
        honderdHonderdvijftig
        }
    }
  `; 
  
  return await hygraph.request(query)
}
