import { makeSource, defineDatabase } from "contentlayer-source-notion";
import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_TOKEN as string,
});

export const WritingType = defineDatabase(() => ({
  name: "Writing",
  databaseId: "2693949a58bf4a2186aaf87ad5807f46",
  query: {
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  },
  properties: {
    date: {
      name: "Created time",
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/writing/${post.slug ?? post._id}`,
    },
  },
}));

export default makeSource({
  client,
  databaseTypes: [WritingType],
});
