// import { useState, useEffect } from "react";
// import client from "../client";
// import { Link } from "react-router-dom";

// const Blog = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(async () => {
//         const post = await client.fetch(
//             // `*[_type == "post"] {
//             // title,
//             // slug,
//             // body,
//             // mainImg {
//             //     asset -> {
//             //         _id,
//             //         url
//             //     },
//             //     alt
//             // }
//             // }`

//             `*[_type == "post"] {
//                 title,
//                 slug,
//                 body,
//                 mainImg {
//                     "url": asset->url,
//                     alt
//                 }
//             }`

//         ).then((data) => {  console.log("Fetched posts:", data); const postImageUrl = post.image ? urlFor(post.image)?.url() : null; setPosts(data); }).catch(console.error);
//     }, []);


// //     const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
// //   const postImageUrl = post.image ? urlFor(post.image)?.url() : null;

//   return (
//     <>
//         <section>
//             <h1>Blog page</h1>
//             <h2>You are viewing {posts.length} blog posts</h2>

//             <div>
//                 {posts.map((post) => (
//                     <article key={post.slug.current}>
//                         {/* <img src={post.mainImg?.url} alt={post.title} /> */}
//                         <img src={postImageUrl} alt={post.title} />
//                         <h4>{post.title}</h4>
//                         <Link to={`/blog/${post.slug.current}`}>Read Full Article</Link>
//                     </article>
//                ))}
//             </div>
//         </section>
//     </>
//   )
// }

// export default Blog











import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import client from "../client"

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl">
          Blog page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}