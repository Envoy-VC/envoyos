import '@/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';

import { Loader, Navbar } from '@/components';

// Sidebar Context
export const SidebarContext = React.createContext<{
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	menuOpen: false,
	setMenuOpen: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = React.useState<boolean>(false);
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

	React.useEffect(() => {
		setTimeout(() => {
			setIsMounted(true);
		}, 2000);
	}, [isMounted]);

	return (
		<SidebarContext.Provider value={{ menuOpen, setMenuOpen }}>
			{isMounted ? <Component {...pageProps} /> : <Loader />}
		</SidebarContext.Provider>
	);
}
