import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query SPATquery {
      projectens(first: 100) {
        categorie
        createdAt
        intro
        plaats {
          latitude
          longitude
        }
        image {
          url
        }
        title
        slug
      }
    }
  `;


  
  return await hygraph.request(query)
  }
