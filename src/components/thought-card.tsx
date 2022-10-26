import { Heading } from "./heading";

type ThoughtCardProps = {
  thought: {
    url: string;
    title: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

export const ThoughtCard = ({ thought }: ThoughtCardProps) => {
  return (
    <article>
      <a href={thought.url}>
        <Heading as="h2" size="medium">
          {thought.title}
        </Heading>
      </a>
    </article>
  );
};
