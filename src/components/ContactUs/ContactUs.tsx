import React, { FC } from 'react'

import styles from './ContactUs.module.scss'
import SectionIntro from '../SectionIntro/SectionIntro'
import Form from '../Form/Form'

const ContactUs: FC = () => {
	return (
		<section className={styles.contactUs} id='contactUs'>
			<div className='container'>
				<SectionIntro title='Contact Us' text='Connect with Us: Let`s Discuss Your Digital Marketing Needs' />
				<Form />
			</div>
		</section>
	)
}

export default ContactUs
