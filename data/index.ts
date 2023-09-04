import { NavbarLink, ProjectDetails } from '@/types';
import Blip from '@/public/blip.png';

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
		description: `Blip is a decentralized social media platform built on top of the Ethereum blockchain. It allows users to post text-based messages and tip other users for their content.`,
		image: Blip,
		technologies: [
			'Solidity',
			'Hardhat',
			'TypeScript',
			'React',
			'Tailwind CSS',
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
		name: 'Blip',
		isFeatured: true,
		description: `Blip is a decentralized social media platform built on top of the Ethereum blockchain. It allows users to post text-based messages and tip other users for their content.`,
		image: Blip,
		technologies: [
			'Solidity',
			'Hardhat',
			'TypeScript',
			'React',
			'Tailwind CSS',
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
];
