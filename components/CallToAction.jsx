import { CircleBackground } from "@/components/CircleBackground";
import { Container } from "@/components/Container";

export function CallToAction({ field1, field2 }) {
  return (
    <section
      id="cta_id"
      className="relative overflow-hidden bg-gray-900 py-5 sm:py-5"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="yellow" className="animate-spin-slower" />
      </div>
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="white" className="animate-spin-slower" />
      </div>
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="blue" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {field1}
          </h2>
          <p className="mt-4 text-lg text-gray-300">{field2}</p>
        </div>
      </Container>
    </section>
  );
}
