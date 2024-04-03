'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion'

import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

import styles from './Header.module.scss'

const headerAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const Header: FC = () => {
	return (
		<motion.div initial={'hidden'} whileInView={'visible'} className='container'>
			<motion.header variants={headerAnimation} className={styles.header}>
				<Logo style='dark' />
				<NavBar />
			</motion.header>
		</motion.div>
	)
}

export default Header
