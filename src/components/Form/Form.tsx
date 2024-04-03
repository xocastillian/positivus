'use client'

import { motion } from 'framer-motion'

import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import axios from 'axios'

import styles from './Form.module.scss'
import BtnItem from '../UI/Buttons/BtnItem/BtnItem'
import Image from 'next/image'

import FormImg from '@/assets/imgs/icons/formimg.png'

const formAnimation = {
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

interface FormData {
	name: string
	email: string
	message: string
}

const Form: FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	})

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!formData.name || !formData.email || !formData.message) {
			alert('Please fill in all fields')
			return
		}

		try {
			await axios.post('your_server_url', formData)
			alert('Form submitted successfully!')
			setFormData({
				name: '',
				email: '',
				message: '',
			})
		} catch (error) {
			console.error('Error submitting form:', error)
			alert('Server is not found')
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<motion.div initial={'hidden'} whileInView={'visible'} variants={formAnimation} className={styles.form__container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.form__title}>Get a Quote</div>
				<div className={styles.form__main}>
					<div className={styles.main__input}>
						<label className={styles.input__label} htmlFor='name'>
							Name
						</label>
						<input type='text' id='name' name='name' className={styles.input__item} onChange={handleChange} value={formData.name} placeholder='Name' />
					</div>

					<div className={styles.main__input}>
						<label className={styles.input__label} htmlFor='email'>
							Email*
						</label>
						<input type='email' id='email' name='email' className={styles.input__item} onChange={handleChange} value={formData.email} placeholder='Email' />
					</div>

					<div className={styles.main__input}>
						<label className={styles.input__label} htmlFor='message'>
							Message*
						</label>
						<textarea id='message' name='message' rows={8} className={styles.input__itemArea} onChange={handleChange} value={formData.message} placeholder='Message'></textarea>
					</div>
					<button className={styles.form__btn} type='submit'>
						<BtnItem styleMode='dark' text='Send Message' />
					</button>
				</div>
			</form>
			<Image src={FormImg} alt='' className={styles.form__img} />
		</motion.div>
	)
}

export default Form
