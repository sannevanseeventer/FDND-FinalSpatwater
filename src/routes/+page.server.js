import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

// import { json } from "@sveltejs/kit";
// import { render } from "svelte-email";
// import Contact from "../lib/organisms/Contact.svelte";
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "my_user",
//     pass: "my_password",
//   },
// });

// const emailHtml = render({
//   component: Contact,
//   props: {
//     name: "Svelte",
//   },
// });

// const options = {
//   from: "you@example.com",
//   to: "maaike.verplancke@hotmail.com",
//   subject: "hello world",
//   html: emailHtml,
// };

// transporter.sendMail(options);

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

  return await hygraph.request(query);
}
