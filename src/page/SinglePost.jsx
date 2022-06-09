import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      body,
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <article>
        <header>
          <h1>{singlePost.title}</h1>
          <img
            src={urlFor(singlePost.mainImage.asset.url)}
            alt={singlePost.title}
          />
        </header>
        <section className="mx-auto prose lg:prose-xl">
<BlockContent blocks={singlePost.body} projectId="3tx74omu" dataset="production"/>
        </section>
      </article>
    </main>
  );
}
