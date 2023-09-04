import { NextSeo } from 'next-seo';

const SEO = () => (
	<>
		<NextSeo
			title='Vedant Chainani'
			description='Developer and Technical Writer.'
			openGraph={{
				url: 'https://vedantc.dev',
				title: 'Vedant Chainani',
				description: 'Developer and Technical Writer.',
				images: [
					{
						url: 'https://i.ibb.co/q7WLbt0/OG.png',
						width: 1200,
						height: 630,
						alt: 'EnvoyOS Open Graph Image',
						type: 'image/png',
					},
				],
				siteName: 'EnvoyOS',
			}}
			twitter={{
				handle: '@Envoy_1084',
				cardType: 'summary_large_image',
			}}
		/>
	</>
);

export default SEO;
