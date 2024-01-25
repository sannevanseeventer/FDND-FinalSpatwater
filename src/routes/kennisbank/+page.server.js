import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query SPATquery {
      kennisbanks {
        author
        categorie
        createdAt
        date
        image {
          url
        }
        title
        content {
          html
        }
        intro
        slug
      }
    }
  `;

  return await hygraph.request(query)
}
