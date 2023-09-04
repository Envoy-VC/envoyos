import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetails } from '@/types';

import { IconType } from 'react-icons';

interface FeaturedProjectCardProps {
	project: ProjectDetails;
	index: number;
}

interface IconLinkProps {
	Icon: IconType;
	name: string;
	href: string;
}

const IconLink = ({ Icon, name, href }: IconLinkProps) => {
	return (
		<Link href={href} target='_blank' rel='noopener noreferrer'>
			<Icon
				size={24}
				className='transition-all duration-200 ease-in-out hover:-translate-y-1 hover:text-primary'
			/>
		</Link>
	);
};

const FeaturedProjectCard = ({ project, index }: FeaturedProjectCardProps) => {
	const { name, description, technologies, image, links } = project;
	const isEven = index % 2 === 0;
	return (
		<div className=''>
			<div
				className={`flex flex-col justify-between gap-4 ${
					isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'
				}`}
			>
				<div className='rounded-xs group w-fit min-w-max bg-[#42c7a8]'>
					<Image
						alt='Avatar'
						src={image}
						className='rounded-xs min-h-[376px] w-full max-w-[350px] object-cover sm:opacity-60 sm:grayscale transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:filter-none sm:max-w-xl filter-none'
					/>
				</div>

				<div
					className={`flex w-full flex-col items-start gap-3 py-4 ${
						isEven ? 'xl:items-end' : 'xl:items-start'
					}`}
				>
					<div
						className={`flex flex-col items-start gap-3 ${
							isEven ? 'xl:items-end' : 'xl:items-start'
						}`}
					>
						<span className='font-sfMono text-sm text-primary'>
							Featured Project
						</span>
						<span className='font-calibreMedium text-3xl text-textPrimary transition-all duration-300 ease-in-out hover:text-primary'>
							{name}
						</span>
						<div
							className={`fixed mt-20 w-full max-w-[324px] rounded-md bg-[#112240] p-4 font-calibreRegular text-xl sm:max-w-xl ${
								isEven ? 'xl:text-right' : 'xl:text-left'
							}`}
						>
							<div
								className={`float-left max-w-lg ${
									isEven ? 'xl:float-right' : 'xl:float-left'
								}`}
							>
								{description}
							</div>
						</div>
					</div>
					<div className='mt-48 flex max-w-sm flex-row flex-wrap items-start gap-3 sm:mt-32 xl:items-end'>
						{technologies.map((item, index) => (
							<span
								key={index}
								className='font-calibreRegular text-lg'
							>
								{item}
							</span>
						))}
					</div>
					<div
						className={`my-2 flex gap-2 ${
							isEven ? 'flex-row' : 'flex-row-reverse'
						}`}
					>
						{links.map((item, index) => (
							<IconLink key={index} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProjectCard;
