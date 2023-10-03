import Link from "next/link";

function Post({ slug,title, principalCategory, imgLink }) {
  return (
    <div className="w-[18rem]">
      <img
        className="w-full h-[15rem] rounded-2xl"
        src={
          imgLink ||
          "https://st.depositphotos.com/1016440/2534/i/450/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg"
        }
      />

      <div className="text-sm text-gray-600 font-medium mt-5">
        <p>{ principalCategory || "Sin categoria"}</p>
        <Link href={"/post/"+slug}>
        <h4 className="text-xl text-blue-900 font-bold mt-2 mb-5">
          { title }
        </h4>
        </Link>
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
}
export default Post;
