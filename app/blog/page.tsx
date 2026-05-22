import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/sections/BlogCard";
import { Pagination } from "@/components/sections/Pagination";
import { posts, featuredPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Clear insights on global finance, payments, and business growth — by the NOWE team.",
};

export default function BlogListPage() {
  const rest = posts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      <section className="bg-surface-cream pb-12 pt-10 md:pb-16 md:pt-14">
        <Container>
          <Heading level="display" className="max-w-4xl">
            Blogs
          </Heading>
          <p className="mt-4 max-w-3xl text-base text-ink-muted md:text-lg">
            Explore Clear Insights On Global Finance, Payments, And Business Growth, Helping You
            Understand Complex Topics And Make Smarter Financial And Strategic Decisions.
          </p>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group mt-10 block overflow-hidden rounded-card-lg"
          >
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={featuredPost.cover}
                alt={featuredPost.title}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <div className="text-xs">{featuredPost.date}</div>
                    <h2 className="mt-2 text-balance text-2xl font-semibold md:text-3xl lg:text-4xl">
                      {featuredPost.title}
                    </h2>
                  </div>
                  <Button href={`/blog/${featuredPost.slug}`} variant="white" size="md">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          {Math.ceil(rest.length / 6) > 1 && (
            <div className="mt-12">
              <Pagination
                currentPage={1}
                totalPages={Math.ceil(rest.length / 6)}
                basePath="/blog"
              />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
