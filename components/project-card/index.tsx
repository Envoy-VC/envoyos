import React from 'react';
import Link from 'next/link';
import { PiFolderLight } from 'react-icons/pi';

// Types
import { ProjectDetails } from '@/types';
import { IconType } from 'react-icons';

interface ProjectCardProps {
	project: ProjectDetails;
}

interface IconLinkProps {
	Icon: IconType;
	name: string;
	href: string;
}

const IconLink = ({ Icon, name, href }: IconLinkProps) => {
	return (
		<Link
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			title={name}
		>
			<Icon
				size={24}
				className='transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:text-primary'
			/>
		</Link>
	);
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { name, description, technologies, links } = project;

	return (
		<div className='group h-full rounded-sm bg-[#112240] p-4 py-3 shadow-md drop-shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2'>
			<div className='flex flex-col justify-between gap-4 h-full py-2'>
				<div className='flex items-center justify-between'>
					<PiFolderLight className='text-primary' size={56} />
					<div className='my-2 flex gap-2'>
						{links.map((item, index) => (
							<IconLink key={index} {...item} />
						))}
					</div>
				</div>
				<div className='font-calibreMedium text-2xl text-textPrimary group-hover:text-primary'>
					{name}
				</div>
				<div className='font-calibreRegular text-[18px] text-textPrimary'>
					{description}
				</div>
				<div className='flex flex-row flex-wrap justify-start gap-3'>
					{technologies.map((item, index) => (
						<span key={index} className='font-sfMono text-[12px]'>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
