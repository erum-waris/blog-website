


import { Blog } from "../../../types/Types";
import { client } from "../../sanity/lib/client";
import BlogCardsection from "../components/BlogCardsection";
import CommentSection from "../components/CommentSection";
import Heading2 from "../components/Heading2";

export const revalidate = 60; //seconds

export default async function Home() {
  const query = `*[_type=='blog']{
  title,image,"slug":slug.current
  
  }`;

  const blogs:Blog[] = await client.fetch(query)
  console.log(blogs)

  return (
    <main className="flex flex-col ">
    <Heading2 text = "Blogs" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          blogs.map((blog:Blog)=>(
            <BlogCardsection blog={blog} key={blog.slug} />
          ))
        }
 
      </section>
      <CommentSection />
    </main>
      
  )
}
