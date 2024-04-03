'use client'

import React, { FC, useState } from 'react'
import { navbarLinks } from '@/config/navbarLinks'
import Link from 'next/link'

import styles from './NavBar.module.scss'
import BtnItem from '../UI/Buttons/BtnItem/BtnItem'

import burger from '@/assets/imgs/icons/burger.svg'
import close from '@/assets/imgs/icons/close.svg'
import Image from 'next/image'

const NavBar: FC = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<nav className={isOpen ? [styles.navbar, styles.active].join(' ') : styles.navbar}>
				<ul className={styles.navbar__list}>
					{navbarLinks.map(link => (
						<li>
							<Link className={styles.list__item} href={link.href} key={link.id}>
								{link.text}
							</Link>
						</li>
					))}
					<a href='#'>
						<BtnItem styleMode='main' text='Request a quote' />
					</a>
				</ul>
				<div className={styles.btns} onClick={() => setOpen(!isOpen)}>
					<button className={styles.menuBtn__close}>
						<Image src={close} alt='' />
					</button>
				</div>
			</nav>
			<button onClick={() => setOpen(!isOpen)} className={styles.menuBtn}>
				<Image src={burger} alt='' />
			</button>
		</>
	)
}

export default NavBar
