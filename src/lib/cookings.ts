import { client } from "./prismic";

export async function getCookings() {
  const cookings = await client.getAllByType("cookings");

  return cookings.map((cooking) => ({
    uid: cooking.uid,
    url: cooking.url,
    ...cooking.data,
  }));
}
