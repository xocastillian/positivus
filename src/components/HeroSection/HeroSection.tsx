'use client'

import React from 'react'
import { motion } from 'framer-motion'

import styles from './HeroSection.module.scss'
import illustration from '@/assets/imgs/Illustration.png'
import Image from 'next/image'
import BtnItem from '../UI/Buttons/BtnItem/BtnItem'
import Partners from '../Partners/Partners'

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

const imgAnimation = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const partnersAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const HeroSection = () => {
	return (
		<motion.section initial={'hidden'} whileInView={'visible'} className={styles.heroSection}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.content__descr}>
						<motion.h1 variants={textAnimation} className={styles.descr__title}>
							Navigating the digital landscape for success
						</motion.h1>
						<motion.p custom={1} variants={textAnimation} className={styles.descr__text}>
							Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
						</motion.p>
						<div className={styles.descr__link}>
							<motion.a custom={1} variants={textAnimation} href='/#contactUs'>
								<BtnItem styleMode='dark' text='Book a consultation' />
							</motion.a>
						</div>
					</div>
					<motion.div variants={imgAnimation} className={styles.content__img}>
						<Image src={illustration} alt='' />
					</motion.div>
				</div>
				<motion.div custom={2} variants={partnersAnimation} className={styles.partners}>
					<Partners />
				</motion.div>
			</div>
		</motion.section>
	)
}

export default HeroSection
