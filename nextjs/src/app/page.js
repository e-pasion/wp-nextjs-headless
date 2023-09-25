import Posts from "@/components/Posts";



export const revalidate = 5;



export default async function Home() {
   
    return (
      <div>

    <Posts></Posts>

    </div>

    );
  
}
