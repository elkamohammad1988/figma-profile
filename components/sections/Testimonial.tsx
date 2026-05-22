import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type TestimonialProps = {
  quote: string;
  authorName: string;
  authorTitle?: string;
};

export function Testimonial({ quote, authorName, authorTitle }: TestimonialProps) {
  return (
    <Section tone="white" size="md">
      <Container>
        <div
          className="
            px-6 md:px-12 lg:px-16 py-12
            text-white
            bg-surface-navy
            rounded-card-lg
          "
        >
          <svg
            width="36"
            height="28"
            viewBox="0 0 36 28"
            fill="none"
            className="
              mb-6
              text-brand-blue-soft
            "
            aria-hidden
          >
            <path
              d="M0 28V18.2c0-5.2 1.2-9.4 3.5-12.7C5.8 2.2 9.3.4 14 0v6.6c-2.2.5-3.9 1.6-5 3.4-1.1 1.7-1.6 4-1.6 6.6H14V28H0zm22 0V18.2c0-5.2 1.2-9.4 3.5-12.7C27.8 2.2 31.3.4 36 0v6.6c-2.2.5-3.9 1.6-5 3.4-1.1 1.7-1.6 4-1.6 6.6H36V28H22z"
              fill="currentColor"
            />
          </svg>
          <blockquote
            className="
              max-w-3xl
              text-balance text-xl md:text-2xl font-medium leading-relaxed
            "
          >
            {quote}
          </blockquote>
          <div
            className="
              flex items-center
              mt-8
              gap-3
            "
          >
            <div
              className="
                h-10 w-10
                bg-gradient-to-br from-brand-blue-soft to-brand-blue
                rounded-full
              "
              /
            >
            <div>
              <div
                className="
                  font-semibold
                "
              >{authorName}</div>
              {authorTitle && (
                <div
                  className="
                    text-sm text-white/60
                  "
                >{authorTitle}</div>  
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
