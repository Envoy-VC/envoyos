import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { PiArrowCircleUpRightLight } from 'react-icons/pi';

// Types
import { BlogPostDetails } from '@/types';

interface BlogPostCardProps {
	post: BlogPostDetails;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
	const { title, description, image, link } = post;
	return (
		<div className='flex flex-row items-center justify-between'>
			<div className='flex flex-col items-center gap-3 sm:flex-row'>
				<Image
					src={image}
					alt={title}
					className='aspect-video rounded-lg object-cover'
					height={160}
				/>
				<div className='flex h-full max-w-lg flex-col px-2 py-2 sm:px-0'>
					<Link
						className='font-calibreSemibold text-3xl text-textPrimary transition-all duration-300 ease-in-out'
						href={link}
						target='_blank'
						title='Go to post'
					>
						{title}
					</Link>
					<div className='font-calibreRegular text-lg'>
						{description}
					</div>
				</div>
			</div>
			<Link
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				title='Go to post'
			>
				<PiArrowCircleUpRightLight
					size={96}
					className='hidden rotate-[25deg] transition-all duration-300 ease-in-out hover:rotate-0 hover:text-primary sm:flex'
				/>
			</Link>
		</div>
	);
};

export default BlogPostCard;
