import { Heading } from "./heading";

type CookingCardProps = {
  cooking: {
    url: string;
    title: string;
    difficulty: string;
    duration: number;
  };
};

export const CookingCard = ({ cooking }: CookingCardProps) => {
  return (
    <article>
      <a href={cooking.url}>
        <Heading as="h2" size="medium">
          {cooking.title}
        </Heading>
      </a>
    </article>
  );
};
