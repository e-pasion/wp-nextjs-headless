"use client";
import { paginatedPost } from "@/lib/query";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
export const revalidate = 5;

function Posts() {
  const { data } = useSuspenseQuery(paginatedPost);

  const posts = data.posts.nodes;
  console.log(posts);

  return (
    <div className="bg-gray-50 p-11">
      <div className="mb-8">
        <h1 className="text-blue-9j00 text-3xl font-bold">Infórmate Efigas</h1>
      </div>
      <div className="flex justify-evenly">
        {posts.map((post) => {
          return (
            <div key={post.id} className="w-[18rem]">
              <img
                className="w-full h-[15rem] rounded-2xl"
                src={post?.featuredImage?.node?.link||"https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg"}
              />

              <div className="text-sm text-gray-600 font-medium mt-5">
                <p>{post.categories.nodes[0].name}</p>
                <h4 className="text-xl text-blue-900 font-bold mt-2 mb-5">
                  {post.title}
                </h4>
                <div className="flex space-x-1">
                  <p>07 Oct 2022</p>
                  <p>|</p>
                  <p>Vistas(487)</p>
                  <p>|</p>
                  <p>4 mins lectura</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Posts;
