import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SidebarContext } from '@/pages/_app';
import {
	useScroll,
	motion,
	Variants,
	useMotionValueEvent,
} from 'framer-motion';

// Components
import HamburgerButton from '../sidebar/hamburger-button';

// Data
import { NavbarLinks } from '@/data';

// Assets
import Hexagon from '@/public/hexagon.png';
import Logo from '@/public/logo.png';

const Navbar = () => {
	const { scrollY } = useScroll();
	const { menuOpen, setMenuOpen } = React.useContext(SidebarContext);
	const [hidden, setHidden] = React.useState<boolean>(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > 100 && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const variants: Variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: '-100%' },
	};

	const container: Variants = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item: Variants = {
		hidden: { y: -30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.4,
			},
		},
	};

	return (
		<motion.nav
			className='sticky top-0 flex w-full flex-row items-center justify-between bg-overlay px-8 py-7 sm:px-12 z-[10]'
			variants={variants}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ ease: 'easeInOut', duration: 0.4 }}
		>
			<motion.div variants={item} initial='hidden' animate='visible'>
				<Link
					className='group relative flex select-none items-center justify-center'
					href='/'
				>
					<Image
						src={Hexagon}
						width={48}
						height={48}
						alt='hexagon'
						className='transition-all duration-300 ease-in-out group-hover:-translate-y-[2px] group-hover:scale-[98%]'
						priority
					/>
					<Image
						src={Logo}
						width={48}
						height={48}
						alt='logo'
						className='absolute transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'
					/>
				</Link>
			</motion.div>
			<motion.div
				className='hidden flex-row items-center gap-8 font-sfMono sm:flex'
				variants={container}
				initial='hidden'
				animate='visible'
			>
				{NavbarLinks.map((link, index) => (
					<motion.div
						className='group flex flex-row  items-center gap-1 text-sm decoration-primary'
						key={index}
						variants={item}
					>
						<span className='text-primary'>{`0${index + 1}.`}</span>
						<Link
							className='text-textPrimary transition-all duration-300 ease-in-out group-hover:text-primary'
							href={link.href}
						>
							{link.title}
						</Link>
					</motion.div>
				))}
				<motion.div
					className='group rounded-sm bg-primary'
					variants={item}
				>
					<button className='rounded-sm border-[1px] border-primary bg-[#0a192f] p-2 px-4 text-sm text-primary transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'>
						Resume
					</button>
				</motion.div>
			</motion.div>
			<HamburgerButton
				isOpen={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
			/>
		</motion.nav>
	);
};

export default Navbar;
