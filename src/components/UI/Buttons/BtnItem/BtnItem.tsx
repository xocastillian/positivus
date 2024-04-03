

import React, { FC } from 'react'

import styles from './BtnItem.module.scss'

interface IBtnProps {
	styleMode: 'main' | 'dark' | 'green'
	text: string
}

const BtnItem: FC<IBtnProps> = ({ styleMode, text }) => {
	const buttonClass = styleMode === 'main' ? styles.mainBtn : styleMode === 'dark' ? styles.darkBtn : styleMode === 'green' ? styles.greenBtn : ''

	return <div className={buttonClass}>{text}</div>
}

export default BtnItem
