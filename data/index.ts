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
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://blip.vercel.app/',

				Icon: PiLink,
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
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://aura-chat.vercel.app/',
				Icon: PiLink,
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
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://arkway.vercel.app/',
				Icon: PiLink,
			},
		],
	},
	{
		name: 'Just Roles',
		isFeatured: false,
		description: `Just Roles provides on-chain verifiable roles based on the Lens Protocol followers. It utilizes the Phala Lens Oracle to obtain verifiable data from the API.`,
		technologies: ['Lens Protocol', 'Phala Network', 'Polybase'],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/just-roles',
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://just-roles.vercel.app/',
				Icon: PiLink,
			},
		],
	},
	{
		name: 'zkTalents',
		isFeatured: false,
		description: `zkTalents uses zero-knowledge proofs for Job/Resume verification. It provides a secure  platform where candidates to prove their eligibility without revealing sensitive information.`,
		technologies: ['Mina Protocol', 'zk-Proofs', 'SnarkyJS'],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/zkTalents',
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://zk-talents.vercel.app/',
				Icon: PiLink,
			},
		],
	},
	{
		name: 'spaces3',
		isFeatured: false,
		description: `spaces3 is an audio conferencing app built using Huddle01 and Push Protocol. Spaces3 offers a range of features designed to enhance your virtual meetings.`,
		technologies: ['Huddle01', 'Push Protocol', 'Next.js'],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/spaces3',
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://spaces3.vercel.app/',
				Icon: PiLink,
			},
		],
	},
	{
		name: 'Checkin',
		isFeatured: false,
		description: `Checkin is a decentralized and gasless web3 guestbook made using Account Abstraction. Users can sign the guestbook using their Ethereum address and leave a message.`,
		technologies: ['Account Abstraction', 'thirdweb', 'Next.js'],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/checkinxyz',
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://checkinxyz.vercel.app/',
				Icon: PiLink,
			},
		],
	},
	{
		name: 'Mailchain Compose',
		isFeatured: false,
		description: `Mailchain Compose is a powerful tool that streamlines communication within DAOs by allowing you to send messages directly to specific roles.`,
		technologies: ['Mailchain', 'Next.js', 'TailwindCSS'],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/mailchain-compose',
				Icon: PiGithubLogo,
			},
			{
				name: 'Website',
				href: 'https://mailchain-compose.vercel.app/',
				Icon: PiLink,
			},
		],
	},
	{
		name: 'zkDrop',
		isFeatured: false,
		description: `zkDrop is a airdrop app that uses zero knowledge proofs and the Mina Protocol. This contract provides a streamlined process for conducting privacy focussed airdrops.`,
		technologies: ['Mina Protocol', 'SnarkyJS', 'Express.js'],
		links: [
			{
				name: 'GitHub',
				href: 'https://github.com/Envoy-VC/zkDrop',
				Icon: PiGithubLogo,
			},
		],
	},
];
