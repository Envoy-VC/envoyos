import React from 'react';
import Image from 'next/image';
import { Variants, motion } from 'framer-motion';

// Data
import { AboutMeDetails } from '@/data';

// Images
import Avatar from '@/public/avatar.webp';

// Icons
import { PiTriangleFill } from 'react-icons/pi';

const About = () => {
	const AboutVariants: Variants = {
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
		<section
			className='mx-auto max-w-screen-sm px-8 py-24 sm:py-64 xl:max-w-[860px] xl:px-0'
			id='about'
		>
			<motion.div
				className='flex h-full flex-col justify-center gap-6'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={AboutVariants}
			>
				<div className='flex flex-row items-center gap-3 font-sfMono'>
					<span className='text-xl text-primary sm:text-2xl'>
						01.
					</span>
					<span className='mt-2 font-calibreSemibold text-2xl  text-textPrimary sm:text-4xl'>
						About me
					</span>
					<div className='ml-4 w-24 border-t-[1px] border-[#233554] sm:w-48' />
				</div>
				<div className='flex flex-col items-center gap-16 sm:items-start xl:flex-row'>
					<div className='sm:order-0 order-1 flex flex-col gap-2'>
						<p className='max-w-md whitespace-pre-wrap font-calibreRegular text-xl leading-6 text-textSecondary'>
							{AboutMeDetails.about}
						</p>
						<div className='grid grid-cols-2 sm:grid-cols-3'>
							{AboutMeDetails.skills.map((skill, index) => (
								<div
									key={index}
									className='flex flex-row items-center gap-2 p-2'
								>
									<PiTriangleFill
										color='#64FFDA'
										size={10}
										className='rotate-90'
									/>
									<span className='font-sfMono text-sm text-textSecondary'>
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
					<div className='order-0 group my-8 h-fit w-fit sm:order-1'>
						<div className='rounded-md border-2 border-primary transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2'>
							<div className='w-fit -translate-x-3 -translate-y-3 rounded-md bg-[#42c7a8] transition-all duration-300 ease-in-out group-hover:-translate-x-7 group-hover:-translate-y-7'>
								<Image
									alt='Avatar'
									src={Avatar.src}
									height={324}
									width={324}
									className='aspect-[1/1] rounded-md object-cover opacity-60 grayscale transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:filter-none'
								/>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default About;
