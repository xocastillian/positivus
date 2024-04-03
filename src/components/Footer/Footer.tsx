'use client'
import React, { FC } from 'react'

import { motion } from 'framer-motion'

import styles from './Footer.module.scss'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import { ourSocials } from '@/data/ourSocials'
import Link from 'next/link'
import Image from 'next/image'
import SubscribeForm from '../SubscribeForm/SubscribeForm'

const footerAnimation = {
	hidden: {
		y: 500,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

const Footer: FC = () => {
	return (
		<div className='container'>
			<motion.footer initial={'hidden'} whileInView={'visible'} variants={footerAnimation} className={styles.footer}>
				<div className={styles.footer__header}>
					<Logo style='light' />
					<div className={styles.footer__links}>
						{ourSocials.map(link => (
							<div className={styles.links__link}>
								<Link href={link.link} target='_blank'>
									<Image src={link.img} alt='' />
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className={styles.footer__contacts}>
					<div className={styles.contacts__content}>
						<h5 className={styles.content__title}>Contact us:</h5>
						<div className={styles.content__contactsItems}>
							<a href='mailto:info@positivus.com' target='_blank' className={styles.contactsItems__item}>
								Email: info@positivus.com
							</a>
							<a href='tel:555-567-8901' target='_blank' className={styles.contactsItems__item}>
								Phone: 555-567-8901
							</a>
							<a href='https://go.2gis.com/kq1t0' target='_blank' className={styles.contactsItems__item}>
								Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
							</a>
						</div>
					</div>
					<div className={styles.contacts__form}>
						<SubscribeForm />
					</div>
				</div>
				<div className={styles.footer__footer}>
					<p className={styles.footer__copy}>© 2023 Positivus. All Rights Reserved.</p>
					<a href='#'>Privacy Policy</a>
				</div>
			</motion.footer>
		</div>
	)
}

export default Footer
