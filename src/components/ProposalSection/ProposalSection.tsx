'use client'
import React, { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './ProposalSection.module.scss'
import BtnItem from '../UI/Buttons/BtnItem/BtnItem'
import Image from 'next/image'
import illustration2 from '@/assets/imgs/Illustration2.png'
import Link from 'next/link'

const proposalAnimation = {
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

const ProposalSection: FC = () => {
	return (
		<div className='container'>
			<motion.section initial={'hidden'} whileInView={'visible'} variants={proposalAnimation} className={styles.proposal}>
				<div className={styles.proposal__descr}>
					<h3 className={styles.descr__title}>Let’s make things happen</h3>
					<p className={styles.descr__text}>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
					<div className={styles.descr__link}>
						<Link href='#contactUs'>
							<BtnItem styleMode='dark' text='Get your free proposal' />
						</Link>
					</div>
				</div>
				<div className={styles.proposal__img}>
					<Image src={illustration2} alt='' />
				</div>
			</motion.section>
		</div>
	)
}

export default ProposalSection
