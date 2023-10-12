import { gql } from "@apollo/client";

export const paginatedPost = gql`
  query GetPaginatedPosts($categoryName: String, $offset: Int!, $size: Int!) {
    posts(
      where: { offsetPagination: { offset: $offset, size: $size }, 
      categoryName: $categoryName}) {
      nodes {
        slug
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
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
    }
  }
`;

export const getCategories= gql`
query getCategories {
  categories {
    nodes {
      name
      slug
    }
  }
}
`

export const getPostBySlug = gql`
query getPostBySlug($slug: ID!) {
  post(idType: SLUG, id: $slug) {
    title
    content
  }
}
`

export const getModal= gql`
query getModal {
  modal(id: "modal-inicial", idType: SLUG) {
    title
    modalFields {
      imagen {
        link
      }
      texto1
      texto2
      texto3
      texto4
      texto5
      textoBoton
    }
  }
}
`