export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61ae79127316302ea5231c0d",
                  title: "Sanity Studio",
                  name: "react-sanitary-blog-studio",
                  apiId: "322ce341-1591-41d2-be15-2ea6fb1b4b02",
                },
                {
                  buildHookId: "61ae79118da0952b487a8d6d",
                  title: "Blog Website",
                  name: "react-sanitary-blog",
                  apiId: "69f5e033-b369-4352-9d4f-4335db424202",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/IlyanaMegy/react_sanitary_blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://react-sanitary-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
