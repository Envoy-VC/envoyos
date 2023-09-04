import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

const Attribution = () => {
	const variants = {
		hidden: { opacity: 0, y: 20 },
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
			className='mx-auto my-8 max-w-lg text-center'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			variants={variants}
		>
			<Link
				href='https://github.com/bchiang7/v4'
				target='_blank'
				rel='noopener noreferrer'
			>
				Adapted from the Brittany Chiang Portfolio
			</Link>
		</motion.div>
	);
};

export default Attribution;
