"use client";
import { paginatedPost, getCategories } from "@/lib/query";
import Post from "./Post";
import Loading from "./Loading";
import Pagination from "./Pagination";

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
export const revalidate = 5;

function Posts() {
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("");

  const postPerPage = 4;
  const { loading: categoryLoading, data: categoryData } =
    useQuery(getCategories);

  const { loading, error, data } = useQuery(paginatedPost, {
    variables: {
      categoryName: category,
      offset: currentPage * postPerPage,
      size: 4,
    },
  });

  useEffect(() => {
    if (!loading && data) {
      setPageCount(
        Math.ceil(data.posts.pageInfo.offsetPagination.total / postPerPage)
      );
    }
  }, [loading, data]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCategoryChange = (event) => {
    setCurrentPage(0);
    setCategory(event.target.value);
  };

  return (
    <div className="bg-slate-50 p-11">
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <div className="mb-8 flex space-x-4 justify-center">
          
          <h1 className="text-blue-900 text-3xl font-bold">Infórmate Efigas</h1>
        </div>
        <div className="flex justify-end">
          <div className="w-52 h-10 bg-white rounded-lg border border-gray-400 flex text-gray-500">
            <div className="h-full w-1/2 flex justify-center items-center space-x-1">
              
              <p>Mostrar: </p>
            </div>
            <select
              className="h-full w-1/2 rounded-lg "
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Todo</option>
              {!categoryLoading &&
                categoryData.categories.nodes.map((category) => {
                  return (
                    <option key={category.slug} value={category.slug}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap min-h-[24rem]">
        {loading ? (
          <Loading message={"posts"} />
        ) : data.posts.nodes.length > 0 ? (
          data.posts.nodes.map((post) => {
            return (
              <Post
                key={post.slug}
                slug={post.slug}
                title={post.title}
                principalCategory={post?.categories?.nodes[0]?.name}
                imgLink={post?.featuredImage?.node?.link}
              />
            );
          })
        ) : (
          <div className="w-full h-[24rem] flex justify-center items-center">
            <h1>No hay datos para mostrar</h1>
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pageCount={pageCount}
      />
    </div>
  );
}

export default Posts;
