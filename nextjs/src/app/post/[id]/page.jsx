"use client";
import { getPostBySlug } from "@/lib/query";
import Loading from "@/components/Loading";
import { useQuery } from "@apollo/client";
import Link from "next/link";

function page({ params }) {
  const { loading, error, data } = useQuery(getPostBySlug, {
    variables: { slug: params.id },
  });

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-6">
      {loading ? (
        <Loading message="post" />
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4">{data.post.title}</h1>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: data.post.content }}
          />
        </>
      )}

      <Link
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg my-10"
        href="/"
      >
        Volver
      </Link>
    </div>
  );
}
export default page;
