'use client'
import React, { FC, forwardRef } from 'react'
import { motion } from 'framer-motion'

import styles from './ServiceItem.module.scss'
import LinkItem from '../LinkItem/LinkItem'

interface IServiceProps {
	link: string
	title: string
	img: string
	styleMode: 'dark' | 'light' | 'green'
}


const ServiceItem: FC<IServiceProps> = forwardRef(({ link, title, img, styleMode }, ref: any) => {
	let colorTheme: string = ''
	let linkStyleMode: 'dark' | 'light' = 'light'
	let color: string = ''

	if (styleMode === 'dark') {
		colorTheme = styles.serviceItemDark
		linkStyleMode = 'light'
		color = '#f3f3f3'
	} else if (styleMode === 'light') {
		colorTheme = styles.serviceItemLight
		linkStyleMode = 'dark'
	} else if (styleMode === 'green') {
		colorTheme = styles.serviceItemGreen
		linkStyleMode = 'dark'
	}

	return (
		<div className={colorTheme} ref={ref}>
			<div className={styles.serviceItem__content}>
				<h3 className={styles.content__title}>{title}</h3>
				<LinkItem color={color} href={link} styleMode={linkStyleMode} text='Learn more' />
			</div>
			<div className={styles.serviceItem__img}>
				<img src={img} alt='' />
			</div>
		</div>
	)
})

const MServiceItem = motion(ServiceItem)

export default MServiceItem
