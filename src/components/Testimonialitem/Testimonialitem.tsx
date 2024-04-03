import React, { FC } from 'react'

import styles from './Testimonialitem.module.scss'

interface ITestimonialitemProps {
	props: ITestimonial
}

const Testimonialitem: FC<ITestimonialitemProps> = ({ props }) => {
	return (
		<div className={styles.testimonialItem}>
			<div className={styles.testimonialItem__quote}>{props.quote}</div>
			<div className={styles.testimonialItem__autor}>
				<p className={styles.autor__name}>{props.autor}</p>
				<p className={styles.autor__role}>{props.autorsRole}</p>
			</div>
		</div>
	)
}

export default Testimonialitem
