import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface NavbarLink {
	title: string;
	href: string;
}

export interface ProjectDetails {
	name: string;
	isFeatured: boolean;
	description: string;
	image?: StaticImageData;
	technologies: string[];
	links: { name: string; href: string; Icon: IconType }[];
}

export interface BlogPostDetails {
	title: string;
	description: string;
	image: StaticImageData;
	link: string;
}
