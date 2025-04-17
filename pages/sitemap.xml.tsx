import { GetStaticProps } from 'next';
import { getAllBlogPosts } from '@/lib/markdown';

const EXTERNAL_DATA_URL = 'https://retrobuildcon.com';

function generateSiteMap(posts: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/projects</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/blog/${id}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

// Replace getServerSideProps with getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllBlogPosts();
  
  // Instead of setting headers directly, we'll pass the XML as a prop
  const sitemap = generateSiteMap(posts);
  
  return {
    props: {
      sitemap,
    },
    // Revalidate every day (86400 seconds)
    revalidate: 86400,
  };
};

export default function SiteMap({ sitemap }: { sitemap: string }) {
  // Use a useEffect to set the XML content type
  if (typeof window === 'undefined') {
    return { __html: sitemap };
  }
  
  return null;
}

// Add this to handle the XML content type
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
