module.exports = {
	siteMetadata: {
		title: `Climbing Shoes, Climbing Holds, Climbing Apparel, & Training`,
		description: `Climbing Shoes, Climbing Holds, Climbing Apparel, & Training`,
		author: `@Finn`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `NZXT`,
				short_name: `NZXT`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `src/images/ubisoft.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Barlow Semi Condensed\:400,700`],
				display: 'swap',
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
