import React from 'react';
import { motion, Variants } from 'framer-motion';
// Components
import { ProjectCard } from '@/components';

// Data
import { Projects } from '@/data';

const MoreProjects = () => {
	const container: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,

			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<section
			className='mx-auto max-w-screen-sm px-8 py-24 sm:py-36 xl:max-w-screen-lg xl:px-0'
			id='work'
		>
			<div className='mt-2 min-w-fit text-center font-calibreSemibold text-2xl text-textPrimary sm:text-4xl'>
				Other Noteworthy Projects
			</div>
			<motion.div
				className='my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'
				variants={container}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				{Projects.filter((project) => !project.isFeatured).map(
					(project, index) => (
						<motion.div variants={item} key={index}>
							<ProjectCard project={project} />
						</motion.div>
					)
				)}
			</motion.div>
		</section>
	);
};

export default MoreProjects;
