import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Types
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
		<Link
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			title={name}
		>
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

	const FeaturedCardVariants: Variants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.3,
				type: 'tween',
				duration: 1,
			},
		},
	};

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			variants={FeaturedCardVariants}
		>
			<div
				className={`flex flex-col justify-between gap-4 ${
					isEven ? 'xl:flex-row' : 'xl:flex-row-reverse'
				}`}
			>
				<div className='rounded-xs group h-fit w-fit min-w-max bg-[#42c7a8]'>
					<Image
						alt='Avatar'
						src={image!}
						className='rounded-xs object-auto aspect-video max-w-[330px] filter-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:filter-none sm:max-w-xl sm:opacity-60 sm:grayscale'
					/>
				</div>

				<div
					className={`flex w-full flex-col items-start gap-3 py-4 ${
						isEven ? 'xl:items-end' : 'xl:items-start'
					}`}
				>
					<div
						className={`flex h-auto min-h-[20rem] flex-col items-start gap-3 sm:min-h-[14rem] ${
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
					<div
						className={`flex max-w-sm flex-row flex-wrap gap-3 xl:items-end xl:justify-end justify-start ${
							isEven ? 'items-start' : 'items-end'
						}`}
					>
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
		</motion.div>
	);
};

export default FeaturedProjectCard;
