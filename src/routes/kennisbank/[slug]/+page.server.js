import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
    // Extract the slug from the params
    const { slug } = params;

    // Define your GraphQL queries
    const specificPostQuery = gql`
        query GetKennisbankBySlug($slug: String!) {
            specificPost: kennisbanks(where: { slug: $slug }) {
                author
                categorie
                date
                image {
                    url
                }
                title
                content {
                    html
                }
                slug
            }
        }
    `;

    const otherPostsQuery = gql`
        query GetAllKennisbanks($slug: String!) {
            otherPosts: kennisbanks(where: { slug_not: $slug }) {
                title
                slug
            }
        }
    `;

    // Pass the slug as a variable to both queries
    const variables = { slug };

    try {
        // Execute both GraphQL queries
        const [specificPostData, otherPostsData] = await Promise.all([
            hygraph.request(specificPostQuery, variables),
            hygraph.request(otherPostsQuery, variables),
        ]);

        // Return the specific post and other posts data
        if (specificPostData.specificPost.length > 0) {
            return {
                kennisbank: specificPostData.specificPost[0],
                otherPosts: otherPostsData.otherPosts,
            };
        } else {
            // Handle the case where no specific post with the specified slug is found
            return {
                status: 404, // Not Found
                error: "Post not found",
            };
        }
    } catch (error) {
        // Handle any GraphQL request errors here
        console.error(error);
        return {
            status: 500, // Internal Server Error
            error: "Internal server error",
        };
    }
}
