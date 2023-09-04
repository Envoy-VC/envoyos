import { NavbarLink, ProjectDetails } from '@/types';
import Blip from '@/public/blip.webp';
import Aura from '@/public/aura.webp';
import Arkway from '@/public/arkway.webp';

import { PiGithubLogo, PiLink } from 'react-icons/pi';

export const NavbarLinks: NavbarLink[] = [
	{
		title: 'About',
		href: '#about',
	},
	{
		title: 'Blog',
		href: '#blog',
	},
	{
		title: 'Work',
		href: '#work',
	},
	{
		title: 'Contact',
		href: '#contact',
	},
];

export const HeroSectionDetails = {
	name: 'Vedant Chainani.',
	tagline: ['I build awesome web3 projects.', 'I write technical articles.'],
	bio: `I'm a Web3 developer and technical writer. I build awesome decentralized applications and write engaging articles. Currently learning more about web3 protocols and participating in hackathons.`,
};

export const AboutMeDetails = {
	about: `Hi! I'm Vedant. My journey in the Web3 space began in 2021, inspired by the TV series "Silicon Valley." Since then, I've been diving deep into various protocols, learning their intricacies, and building different applications on top of them.

In addition to development, I also write technical articles on Web3 topics. Whether it's a deep dive into a specific protocol or a technical implementation guide, I cover a wide range of subjects to share knowledge with the community.

Currently, I'm focused on learning more about the production-grade T3 stack and actively participating in hackathons to challenge myself and stay up-to-date with the latest advancements in the ecosystem.

Here are a few technologies I've been working with recently:`,
	skills: [
		'Next.js',
		'TypeScript',
		'Tailwind CSS',
		'Web3',
		'Ethereum',
		'GraphQL',
	],
};

`

GM! I'm Vedant, and I love creating awesome Web3 applications on top of different protocols. My journey in the Web3 space began in 2021, inspired by the TV series "Silicon Valley." Since then, I've been diving deep into various protocols, learning their intricacies, and building different applications on top of them.

In addition to development, I also write technical articles on Web3 topics. Whether it's a deep dive into a specific protocol or a technical implementation guide, I cover a wide range of subjects to share knowledge with the community.

Currently, I'm focused on learning more about the production-grade T3 stack and actively participating in hackathons to challenge myself and stay up-to-date with the latest advancements in the Web3 ecosystem.
`;

export const Projects: ProjectDetails[] = [
	{
		name: 'Blip',
		isFeatured: true,
		description: `Blip is a video sharing app built on top of Lens Protocol and Arweave. Along with all the basic features users also manage the rights to their content by utilizing the Universal Data License.`,
		image: Blip,
		technologies: [
			'Next.js',
			'Lens Protocol',
			'Arweave',
			'TailwindCSS',
			'GraphQL',
		],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/blip',
				Icon: PiLink,
			},
			{
				name: 'Website',
				href: 'https://blip.vercel.app/',
				Icon: PiGithubLogo,
			},
		],
	},
	{
		name: 'Aura',
		isFeatured: true,
		description: `Aura is a decentralized chat app powered by XMTP. With its secure encrypted messaging,seamless interoperability, Aura offers a user-friendly experience while prioritizing privacy.`,
		image: Aura,
		technologies: [
			'Next.js',
			'XMTP',
			'Ethereum',
			'thirdweb',
			'Tailwind CSS',
		],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/aura',
				Icon: PiLink,
			},
			{
				name: 'Website',
				href: 'https://aura-chat.vercel.app/',
				Icon: PiGithubLogo,
			},
		],
	},
	{
		name: 'Arkway',
		isFeatured: true,
		description: `Arkway is a decentralized and distributed file storage solution designed to keep your files secure and encrypted. Arkway uses Lit Protocol for Access control and encryption to protect your data.`,
		image: Arkway,
		technologies: [
			'Next.js',
			'Lit Protocol',
			'thirdweb',
			'Polybase',
			'Tailwind CSS',
		],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/arkway',
				Icon: PiLink,
			},
			{
				name: 'Website',
				href: 'https://arkway.vercel.app/',
				Icon: PiGithubLogo,
			},
		],
	},
];
