'use client'
import React, { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './Services.module.scss'
import MServiceItem from '../ServiceItem/ServiceItem'

import serv1 from '@/assets/imgs/serv1.png'
import serv2 from '@/assets/imgs/serv2.svg'
import serv3 from '@/assets/imgs/serv3.png'
import serv4 from '@/assets/imgs/serv4.png'
import serv5 from '@/assets/imgs/serv5.png'
import serv6 from '@/assets/imgs/serv6.png'
import SectionIntro from '../SectionIntro/SectionIntro'

const serviceAnimationLeft = {
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
const serviceAnimationRight = {
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

const Services: FC = () => {
	return (
		<motion.section initial={'hidden'} whileInView={'visible'} className={styles.services}>
			<div className='container'>
				<SectionIntro title='Services' text='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:' />
				<div className={styles.services__items}>
					<MServiceItem variants={serviceAnimationLeft} styleMode='light' img={serv1.src} link={'#'} title='Search engine optimization' />
					<MServiceItem variants={serviceAnimationRight} styleMode='green' img={serv2.src} link={'#'} title='Pay-per-click advertising' />
					<MServiceItem variants={serviceAnimationLeft} custom={1} styleMode='dark' img={serv3.src} link={'#'} title='Social Media Marketing' />
					<MServiceItem variants={serviceAnimationRight} custom={1} styleMode='light' img={serv4.src} link={'#'} title='Email Marketing' />
					<MServiceItem variants={serviceAnimationLeft} custom={2} styleMode='green' img={serv5.src} link={'#'} title='Content Creation' />
					<MServiceItem variants={serviceAnimationRight} custom={2} styleMode='dark' img={serv6.src} link={'#'} title='Analytics and Tracking' />
				</div>
			</div>
		</motion.section>
	)
}

export default Services
