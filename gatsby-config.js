module.exports = {
  siteMetadata: {
    title: "Gradiator",
    description: "Create stunning gradients and generate CSS code",
    author: "Narayana Suri",
    // siteUrl: "https://gatsby-starter-apple.netlify.app",
    lang: "en",
    utterances: {
      repo: "narayanasuri/gradiator",
    },
    favicon: "src/images/blob.svg",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gradiator",
        short_name: "Gradiator",
        description: "Create stunning gradients and generate CSS code",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/images/blob.svg",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`inter\:300,400,600,800`],
        display: "swap",
      },
    },
  ],
};
