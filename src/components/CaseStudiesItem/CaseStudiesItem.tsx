import React, { FC } from 'react'

import styles from './CaseStudiesItem.module.scss'
import Link from 'next/link'
import arrowLink from '@/assets/imgs/icons/arrowlink.svg'
import Image from 'next/image'

interface ICaseStudiesItemProps {
	props: ICasesStudies
}

const CaseStudiesItem: FC<ICaseStudiesItemProps> = ({ props }) => {
	return (
		<div className={styles.caseStudiesItem}>
			<p className={styles.caseStudiesItem__text}>{props.text}</p>
			<Link href={props.link} className={styles.link}>
				<p className={styles.link__text}>Learn more</p>
				<Image src={arrowLink} alt='' />
			</Link>
		</div>
	)
}

export default CaseStudiesItem
