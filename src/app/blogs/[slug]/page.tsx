
 
import Heading2 from "@/app/components/Heading2";
import { client } from "@/sanity/lib/client";
import { Blog } from "../../../../types/Types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import CommentSection from "@/app/components/CommentSection";

export default async function Blogs({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type=='blog' && slug.current=="${slug}"]{
    title,description,image
  }[0]`;

  const blog: Blog | null = await client.fetch(query);

  if (!blog) {
    return (
      <div className=" mx-auto px-4 py-8">
        <Heading2 text="Blogs" />
        <p className="text-center text-red-500">Blog not found. Please check the URL or try again later.</p>
      </div>
    );
  }

  return (
    <div className=" mx-auto md:px-4 py-8">
      
      
      <div className="grid grid-cols-1 gap-6">
        <div
          className="grid grid-cols-1 gap-5 rounded-lg p-4 shadow-lg items-center md:m-5"
        >
          <Image
            src={urlFor(blog.image).url()}
            alt="Blog Image"
            width={400}
            height={400}
            className="mx-auto md:w-[600px] md:h-[600px] w-full h-full object-cover rounded-lg"
          />
            <Heading2 text={`${blog.title}` } />
            <p className="grid grid-cols-1 text-white mt-2 text-center text-base sm:text-md md:text-lg lg:text-xl bg-black/40 rounded-lg p-5 capitalize">
              {blog.description}
            </p>
          </div>
       
        <CommentSection />
      </div>
    </div>
  );
}
