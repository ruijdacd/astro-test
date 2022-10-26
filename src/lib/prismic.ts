import * as prismic from "@prismicio/client";

const repoName = "madina"; // Fill in your repository name.
const accessToken = ""; // If your repo is private, add an access token.

// The `routes` property is your Route Resolver. It defines how you will
// structure URLs in your project. Update the types to match the Custom
// Types in your project, and edit the paths to match the routing in your
// project.
const routes = [
  {
    type: "thoughts",
    path: "/thought/:uid",
  },
  {
    type: "cookings",
    path: "/cooking/:uid",
  },
];

export const client = prismic.createClient(repoName, {
  accessToken,
  routes,
});
