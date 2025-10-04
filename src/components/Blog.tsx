import React from "react";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Your Sealed Class Cookbook: 3 Production-Ready Android Recipes",
      snippet:
        "we've explored the theory and power of Kotlin's sealed hierarchies. We've seen how they help us escape common pitfalls and how the compiler can become our safety net...",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3t6tqr3vvmu3c72l04v5.png?auto=compress&cs=tinysrgb&w=800",
      date: "Sep 30, 2025",
      readTime: "5 min read",
      link: "https://dev.to/kavearhasi_viswanathan/your-sealed-class-cookbook-3-production-ready-android-recipes-2l3o",
    },
    {
      title: "Kotlin’s Sealed Interfaces: Smashing the Inheritance Wall",
      snippet:
        "sealed classes still have their limits. And when I hit that wall, sealed interfaces broke it down...",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5hmip81auc4bx24hc5a1.png?auto=compress&cs=tinysrgb&w=800",
      date: "Sep 28, 2025",
      readTime: "6 min read",
      link: "https://dev.to/kavearhasi_viswanathan/kotlins-sealed-interfaces-smashing-the-inheritance-wall-4n0n",
    },
    {
      title: "Kotlin's Toolbox: Sealed Class vs. Enum vs. Abstract Class",
      snippet:
        "Using the wrong tool for the job leads to clunky, frustrating codeUsing the wrong tool for the job leads to clunky, frustrating code. Honestly, learning to make this choice with confidence was a major level-up moment in my career...",
      image:
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnhb9jbv5a7im82tsfc5r.png?auto=compress&cs=tinysrgb&w=800",
      date: "Sep 25, 2025",
      readTime: "6 min read",
      link: "https://dev.to/kavearhasi_viswanathan",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-6">
            Sharing the{" "}
            <span className="bg-gradient-to-r from-[#F94800] to-[#FF8A00] bg-clip-text text-transparent">
              Journey
            </span>
            : From My Blog
          </h2>
          <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto leading-relaxed">
            I believe that knowledge grows when it's shared. I enjoy breaking
            down complex topics and contributing to the developer community by
            writing articles on{" "}
            <a
              href="https://dev.to/kavearhasi_viswanathan"
              className="text-[#F94800] hover:text-[#FF8A00] transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              dev.to
            </a>
            . Below are a few of my recent posts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-[#BDBDBD]/5 border border-[#BDBDBD]/20 rounded-lg overflow-hidden hover:border-[#F94800]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Blog Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Post Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 text-sm text-[#BDBDBD] mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F5F5F7] mb-3 group-hover:text-[#F94800] transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Snippet */}
                <p className="text-[#BDBDBD] mb-4 leading-relaxed">
                  {post.snippet}
                </p>

                {/* Read More Link */}
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#F94800] hover:text-[#FF8A00] transition-colors font-medium group/link"
                >
                  <span>Read on dev.to</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <a
            href="https://dev.to/kavearhasi_viswanathan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#F94800] to-[#FF8A00] text-[#0A0A0A] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#F94800]/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
