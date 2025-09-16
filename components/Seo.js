// components/Seo.js
import Head from "next/head";

export default function Seo({ 
  title = "Tmdisplay", 
  description = "Play hundreds of free browser games on Tmdisplay. 🎮 Action, racing, puzzles & retro classics – no download, no signup, just fun!", 
  url = "https://tmdisplay.com", 
  image = "https://tmdisplay.com/og-image.jpg" 
}) {
  return (
    <Head>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Langues et SEO technique */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
