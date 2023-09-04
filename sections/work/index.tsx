import React from 'react';
import { Projects } from '@/data';

import { FeaturedProjectCard } from '@/components';

const Work = () => {
	return (
		<section
			className='mx-auto max-w-screen-sm px-8 py-24 sm:py-36 xl:max-w-screen-lg xl:px-0'
			id='work'
		>
			<div className='flex flex-row items-center gap-3 font-sfMono'>
				<span className='text-xl text-primary sm:text-2xl'>03.</span>
				<div className='mt-2 min-w-fit font-calibreSemibold  text-2xl text-textPrimary sm:text-4xl'>
					Some Things I&lsquo;ve Built
				</div>
				<div className='w-full border-t-[1px] border-[#233554]' />
			</div>
			<div className='flex flex-col gap-24 my-8'>
				{Projects.filter((project) => project.isFeatured).map(
					(project, index) => (
						<FeaturedProjectCard key={index} project={project} index={index} />
					)
				)}
			</div>
		</section>
	);
};

export default Work;
