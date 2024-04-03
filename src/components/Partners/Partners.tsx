import React, { FC } from 'react'
import { partners } from '@/data/partners'

import styles from './Partners.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Partners: FC = () => {
	return (
		<div className={styles.partners}>
			{partners.map(partner => (
				<div className={styles.partner}>
					<Link className={styles.partner__item} key={partner.id} href={partner.src} target='_blank'>
						<Image src={partner.img} alt='' />
					</Link>
				</div>
			))}
		</div>
	)
}

export default Partners
