import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch('https://tech-era-server.vercel.app/blog')
         .then(res => res.json())
         .then(data => setBlogs(data))
   }, [])

   return (
      <div className="max-w-7xl mx-auto mt-28 px-8 lg:px-0">
         <h2 className="text-2xl font-bold uppercase text-center dark:text-slate-300">From the Blog</h2>
         <h1 className="text-3xl font-bold text-center dark:text-white">Latest News and Articles</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {
               blogs.map(blog => {
                  const { id, img, title, author_img, author_name, job_position } = blog
                  return (
                     <div key={id} className="rounded-xl shadow-xl p-4">
                        <img src={img} className="rounded-lg mb-6"/>
                        <h2 className="font-bold text-2xl hover:underline dark:text-white dark:hover:text-blue-700 hover:text-blue-700">{title}</h2>
                        <div className="flex items-center gap-6 mt-12">
                           <img src={author_img} className="w-16 rounded-full"/>
                           <div>
                              <h4 className="font-bold text-xl dark:text-white">{author_name}</h4>
                              <p className="dark:text-slate-300">{job_position}</p>
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