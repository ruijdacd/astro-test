import { client } from "./prismic";

export async function getThoughts() {
  const thoughts = await client.getAllByType("thoughts");

  return thoughts.map((thought) => ({
    uid: thought.uid,
    url: thought.url,
    ...thought.data,
  }));
}
