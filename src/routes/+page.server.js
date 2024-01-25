import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query SPATquery {
      projectens {
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
      partner(first: 12) {
        image {
          url
        }
        link
      }
      overs {
        content {
          html
        }
        image {
          id
          url
        }
        title
      }
      expertiseCards {
        title
        slug
        cardNumber
        intro
        image {
          url
        }
      }
      klimaatadaptaties {
        content {
          html
        }
        image {
          url
        }
        title
      }
      waterkwaliteits {
        title
        content {
          html
        }
        image {
          url
        }
      }
      brains {
        title
        content {
          html
        }
        image {
          url
        }
      }
      teams {
        name
        image {
          url
        }
        imageHover {
          url
        }
        email
      }
      contacts {
        content {
          html
        }
      }
    }
  `;



  return await hygraph.request(query)
}