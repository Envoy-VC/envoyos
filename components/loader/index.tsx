import React from 'react';
import { motion, Variants } from 'framer-motion';

const Loader = () => {
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i: number) => {
			const delay = i * 0.175;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {
						delay,
						type: 'tween',
						duration: 0.2,
					},
					opacity: { delay, duration: 0.01 },
				},
			};
		},
	};

	const letterVariant: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 1.3,
			},
		},
	};

	return (
		<div className='flex h-screen items-center justify-center bg-[#020C1B]'>
			<motion.svg
				width='100'
				height='382'
				viewBox='0 0 333 382'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				initial='hidden'
				animate='visible'
			>
				<motion.path
					d='M166.885 11L11 101'
					stroke='#64FFDA'
					stroke-width='20'
					stroke-linecap='round'
					stroke-linejoin='round'
					variants={draw}
					custom={1}
				/>
				<motion.path
					d='M11 101L11 281'
					stroke='#64FFDA'
					stroke-width='20'
					stroke-linecap='round'
					stroke-linejoin='round'
					variants={draw}
					custom={2}
				/>
				<motion.path
					d='M11 281L166.885 371'
					stroke='#64FFDA'
					stroke-width='20'
					stroke-linecap='round'
					stroke-linejoin='round'
					variants={draw}
					custom={3}
				/>
				<motion.path
					d='M167 371L322.885 281'
					stroke='#64FFDA'
					stroke-width='20'
					stroke-linecap='round'
					stroke-linejoin='round'
					variants={draw}
					custom={4}
				/>
				<motion.path
					d='M323 281V101'
					stroke='#64FFDA'
					stroke-width='20'
					stroke-linecap='round'
					stroke-linejoin='round'
					variants={draw}
					custom={5}
				/>
				<motion.path
					d='M322.885 101L167 11'
					stroke='#64FFDA'
					stroke-width='20'
					stroke-linecap='round'
					stroke-linejoin='round'
					variants={draw}
					custom={6}
				/>
				<motion.path
					d='M223.032 127.956L221.268 146.184H136.4V184.796H197.16L195.592 203.024H136.4V244.576H222.836L221.072 263H116.8V127.956H223.032Z'
					fill='#64FFDA'
					initial='hidden'
					animate='visible'
					variants={letterVariant}
				/>
			</motion.svg>
		</div>
	);
};

export default Loader;
