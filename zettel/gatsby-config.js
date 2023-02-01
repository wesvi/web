const path = require("path");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  pathPrefix: `/gatsby-digital-garden`,
  siteMetadata: {
    title: `Wesvi' Digital Garden`,
    description: `Wesvi' Digital Garden use Roam Research as a data source for a Gatsby site`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: `/README`,
        contentPath: `${__dirname}/zettel`,
        roamUrl: process.env.ROAM_URL,
        roamEmail: process.env.ROAM_EMAIL,
        roamPassword: process.env.ROAM_PASSWORD,
        parseWikiLinks: true,
      },
    },
  ],
};