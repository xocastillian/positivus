'use client'
import React, { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './WorkingProcess.module.scss'
import SectionIntro from '../SectionIntro/SectionIntro'
import WorkingProcessItem from '../WorkingProcessItem/WorkingProcessItem'
import { workingProcessList } from '@/data/workingProcessList'

const processAnimation = {
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

const WorkingProcess: FC = () => {
	return (
		<motion.section initial={'hidden'} whileInView={'visible'} className={styles.workingProcess}>
			<div className='container'>
				<SectionIntro title='Our Working Process' text='Step-by-Step Guide to Achieving Your Business Goals' />
				<div className={styles.workingProcess__list}>
					{workingProcessList.map((proc, index) => (
						<WorkingProcessItem variants={processAnimation} custom={index + 2} key={proc.id} props={proc} />
					))}
				</div>
			</div>
		</motion.section>
	)
}

export default WorkingProcess
