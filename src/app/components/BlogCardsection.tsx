import Button from "./Button";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Blog } from "../../../types/Types";

const BlogCardsection = ({ blog }: { blog: Blog }) => {
  if (!blog || !blog.image) {
    return <div>Error: Blog data is missing or incomplete.</div>;
  }

  return (
    <div>
      <div className="w-auto mx-auto py-8 px-4">
        <div className=" shadow-lg rounded-lg">
          <Image
            src={urlFor(blog.image).url()}
            alt="blogsImage"
            width={400}
            height={300}
            className="w-full h-[400px] object-cover  rounded-lg "
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white ">{blog.title}</h3>
            <div
              className="my-6">
              <Button label="Read More" href={`/blogs/${blog.slug}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardsection;
