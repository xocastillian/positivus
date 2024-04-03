'use client'
import React, { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './CaseStudies.module.scss'
import SectionIntro from '../SectionIntro/SectionIntro'

import { cases } from '@/data/casesStudies'
import CaseStudiesItem from '../CaseStudiesItem/CaseStudiesItem'

const caseAnimation = {
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

const CaseStudies: FC = () => {
	return (
		<motion.section initial={'hidden'} whileInView={'visible'} variants={caseAnimation} custom={1} className={styles.caseStudies}>
			<div className='container'>
				<SectionIntro title='Case Studies' text='Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies' />
				<div className={styles.caseStudies__cases}>
					{cases.map(caseItem => (
						<CaseStudiesItem key={caseItem.id} props={caseItem} />
					))}
				</div>
			</div>
		</motion.section>
	)
}

export default CaseStudies
