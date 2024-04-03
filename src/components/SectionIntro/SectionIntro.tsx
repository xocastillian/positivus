'use client'

import React, { FC, forwardRef } from 'react'

import styles from './SectionIntro.module.scss'
import { motion } from 'framer-motion'

interface IIntroProps {
	title: string
	text: string
}

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const SectionIntro: FC<IIntroProps> = ({ title, text }) => {
	return (
		<motion.div initial={'hidden'} whileInView={'visible'} variants={textAnimation} className={styles.intro}>
			<h2 className={styles.intro__title}>{title}</h2>
			<p className={styles.intro__text}>{text}</p>
		</motion.div>
	)
}

export default SectionIntro
