import React from 'react';
import { motion, Variants } from 'framer-motion';

// Data
import { ContactDetails } from '@/data';

const Contact = () => {
	const ContactVariant: Variants = {
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
			className='mx-auto max-w-screen-sm px-8 py-24 pb-48 xl:max-w-[860px] xl:px-0'
			id='contact'
		>
			<motion.div
				className='flex flex-col items-center gap-4'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={ContactVariant}
			>
				<div className='font-sfMono text-[1rem] text-primary'>
					04. What&lsquo;s Next?
				</div>
				<span className='font-calibreMedium text-4xl text-textPrimary sm:text-6xl'>
					Get In Touch
				</span>
				<p className='max-w-lg text-center font-calibreMedium text-lg text-textSecondary'>
					{ContactDetails.paragraph}
				</p>
				<a
					className='group my-8 rounded-sm bg-primary'
					href={`mailto:${ContactDetails.email}`}
				>
					<button className='rounded-sm border-[1px] border-primary bg-[#0a192f] p-3 px-6 text-lg text-primary transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'>
						Say Hello
					</button>
				</a>
			</motion.div>
		</section>
	);
};

export default Contact;
