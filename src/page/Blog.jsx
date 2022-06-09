import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogData, setPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section>
        <div className="container mx-auto">
          <h1 className="text-5xl flex justify-center">blog page</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData &&
              blogData.map((post, index) => (
                <article key={index}>
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                    <h2>{post.title}</h2>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
