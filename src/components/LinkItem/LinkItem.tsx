import React, { FC } from 'react'

import styles from './LinkItem.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import linkDark from '@/assets/imgs/icons/Icon-link-dark.svg'
import linkLight from '@/assets/imgs/icons/Icon-link-light.svg'

interface ILinkProps {
	styleMode: 'dark' | 'light' 
	href: string
	text: string
	color?: string
}

const LinkItem: FC<ILinkProps> = ({ styleMode, href, text, color }) => {
	const imageSrc = styleMode === 'dark' ? linkDark : linkLight

	return (
		<Link className={styles.link} href={href}>
			<Image src={imageSrc} alt='' />
			<span style={{ color }} className={styles.link__text}>
				{text}
			</span>
		</Link>
	)
}

export default LinkItem
