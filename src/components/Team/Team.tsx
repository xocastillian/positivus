'use client'
import React, { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './Team.module.scss'
import BtnItem from '../UI/Buttons/BtnItem/BtnItem'
import Link from 'next/link'
import SectionIntro from '../SectionIntro/SectionIntro'
import { team } from '@/data/team'
import Teammate from '../Teammate/Teammate'

const teamAnimation = {
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

const Team: FC = () => {
	return (
		<motion.section initial={'hidden'} whileInView={'visible'} variants={teamAnimation}  className={styles.team}>
			<div className='container'>
				<SectionIntro text='Meet the skilled and experienced team behind our successful digital marketing strategies' title='Team' />
				<div className={styles.team__teammates}>
					{team.map(teammate => (
						<Teammate props={teammate} />
					))}
				</div>
				<div className={styles.team__link}>
					<Link href={'#'}>
						<BtnItem styleMode='dark' text='See all team' />
					</Link>
				</div>
			</div>
		</motion.section>
	)
}

export default Team
