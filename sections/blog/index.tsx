import React from 'react';

import { motion, Variants } from 'framer-motion';

// Components
import { BlogPostCard } from '@/components';

// Data
import { BlogDetails } from '@/data';
import Link from 'next/link';

const Blog = () => {
	const container: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.4,
				staggerChildren: 0.3,
			},
		},
	};

	const item: Variants = {
		hidden: { y: 40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<section
			className='mx-auto max-w-screen-sm px-8 py-24 sm:py-36 xl:max-w-screen-lg xl:px-0'
			id='blog'
		>
			<div className='min-w-fit text-center font-calibreSemibold text-5xl text-textPrimary sm:text-5xl'>
				Blog posts
			</div>
			<motion.div
				className='mx-auto my-16 flex flex-col gap-12 sm:my-28'
				variants={container}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				{BlogDetails.map((blog, index) => (
					<motion.div variants={item} key={index}>
						<BlogPostCard post={blog} />
					</motion.div>
				))}

				<motion.a
					variants={item}
					className='group my-8 rounded-sm bg-primary w-fit mx-auto'
					href='https://blog.vedantc.dev/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<button className='rounded-sm border-[1px] border-primary bg-[#0a192f] p-3 px-6 text-lg text-primary transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'>
						More posts
					</button>
				</motion.a>
			</motion.div>
		</section>
	);
};

export default Blog;
