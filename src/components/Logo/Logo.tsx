import Image from 'next/image'
import React, { FC } from 'react'

import logoDark from '@/assets/imgs/icons/Logo.svg'
import logoLight from '@/assets/imgs/icons/Logo-light.svg'
import Link from 'next/link'

interface ILogoProps {
	style: 'dark' | 'light'
}

const Logo: FC<ILogoProps> = ({ style }) => {
	const logoSrc = style === 'dark' ? logoDark : logoLight

	return (
		<Link href='/'>
			<Image src={logoSrc} alt='logo' priority />
		</Link>
	)
}

export default Logo
