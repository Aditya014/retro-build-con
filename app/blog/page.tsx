import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts, getBlogCategories } from '@/lib/markdown'

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const categories = getBlogCategories()
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-teko text-4xl md:text-5xl font-medium mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Insights, tips, and inspiration from our team of interior design and construction experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-12">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <article key={post.id} className="group">
                      <Link href={`/blog/${post.id}`} className="block">
                        <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-lg">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </Link>
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.date}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.readingTime}
                          </span>
                        </div>
                        <h2 className="font-teko text-2xl font-medium mb-3">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src={post.authorImage}
                              alt={post.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <h3 className="font-teko text-xl font-medium mb-2">No Blog Posts Yet</h3>
                    <p className="text-muted-foreground">Check back soon for new content!</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="font-teko text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <li key={category}>
                        <Link 
                          href={`/blog/category/${category.toLowerCase()}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-muted-foreground">No categories yet</li>
                  )}
                </ul>
              </div>
              
              <div className="bg-primary p-6 rounded-lg text-primary-foreground">
                <h3 className="font-teko text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-primary-foreground/90 mb-4">
                  Stay updated with our latest projects, design tips, and industry insights.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 rounded-md bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}