import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/blog')
         .then(res => res.json())
         .then(data => setBlogs(data))
   }, [])

   return (
      <div className="max-w-7xl mx-auto mt-28 px-8 lg:px-0">
         <h2 className="text-2xl font-bold uppercase text-center">From the Blog</h2>
         <h1 className="text-3xl font-bold text-center">Latest News and Articles</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {
               blogs.map(blog => {
                  const { id, img, title, author_img, author_name, job_position } = blog
                  return (
                     <div key={id} className="rounded-xl shadow-xl p-4">
                        <img src={img} className="rounded-lg mb-6"/>
                        <h2 className="font-bold text-2xl hover:underline hover:text-blue-700">{title}</h2>
                        <div className="flex items-center gap-6 mt-12">
                           <img src={author_img} className="w-16 rounded-full"/>
                           <div>
                              <h4 className="font-bold text-xl">{author_name}</h4>
                              <p>{job_position}</p>
                           </div>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default Blog;