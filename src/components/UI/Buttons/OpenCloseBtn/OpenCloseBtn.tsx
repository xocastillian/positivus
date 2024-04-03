import React, { FC } from 'react'

import styles from './OpenCloseBtn.module.scss'

import closeBtn from '@/assets/imgs/icons/closeBtn.svg'
import openBtn from '@/assets/imgs/icons/openBtn.svg'
import Image from 'next/image'

interface IOpenCloseBtn {
	opened: 'open' | 'close'
}

const OpenCloseBtn: FC<IOpenCloseBtn> = ({ opened }) => {
	const btn: string = opened === 'open' ? closeBtn : openBtn

	return (
		<div className={styles.openCloseBtn}>
			<Image alt='' src={btn} />
		</div>
	)
}

export default OpenCloseBtn
