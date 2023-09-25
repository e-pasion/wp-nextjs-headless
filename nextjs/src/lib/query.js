import { gql } from "@apollo/client";

export const paginatedPost=  gql` query GetPaginatedPosts {
    posts {
      nodes {
        id
        title
        categories {
          nodes {
            name
          }
        }
        date
        featuredImage {
          node {
            link
          }
        }
      }
    }
  }`