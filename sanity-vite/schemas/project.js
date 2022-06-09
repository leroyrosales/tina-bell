export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
        name: "projectType",
        title: "Project Type",
        type: "string",
        options: {
            list: [
                { value: "personal", title: "Personal" },
                { value: "client", title: "Client" },
            ]
        }
    },
    {
        name: "link",
        title: "Link",
        type: "url",
      },
  ],
};
