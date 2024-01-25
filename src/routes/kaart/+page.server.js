import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query kaart {
        kansenkaarts(first: 100) {
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
        vijfentwintigVijftig
        info
        honderdHonderdvijftig
        }
    }
  `; 
  
  return await hygraph.request(query)
}
