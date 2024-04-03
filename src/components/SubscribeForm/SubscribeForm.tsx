'use client'

import React, { FC, useState } from 'react'
import styles from './SubscribeForm.module.scss'
import BtnItem from '../UI/Buttons/BtnItem/BtnItem'

const SubscribeForm: FC = () => {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!email) {
			setError('Please enter your email')
			return
		}
		setEmail('')
		setError('')
	}

	return (
		<form className={styles.subscribeForm} onSubmit={handleSubmit}>
			<input className={styles.subscribeForm__input} type='email' placeholder='Email' value={email} onChange={handleChange} />
			<button className={styles.subscribeForm__btn}>
				<BtnItem styleMode='green' text='Subscribe to news' />
			</button>
			{error && <div className={styles.error}>{error}</div>}
		</form>
	)
}

export default SubscribeForm
