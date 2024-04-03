'use client'

import React, { FC, forwardRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './WorkingProcessItem.module.scss'
import OpenCloseBtn from '../UI/Buttons/OpenCloseBtn/OpenCloseBtn'

interface IWorkingProcessItemProps {
	props: IWorkingProcess
}

const WorkingProcessItem: FC<IWorkingProcessItemProps> = forwardRef(({ props }, ref: any) => {
	const [open, setOpen] = useState<boolean>(false)

	const handleOpenClose = () => setOpen(!open)

	return (
		<div className={!open ? styles.workingProcessItemClose : styles.workingProcessItemOpen} ref={ref}>
			<div className={styles.workingProcessItem__descr}>
				<div className={styles.descr__text}>
					<span className={styles.text__id}>{props.id}</span>
					<h4 className={styles.text__title}>{props.title}</h4>
				</div>
				<button className={styles.descr__btn} onClick={handleOpenClose}>
					<motion.div animate={{ rotate: open ? 360 : 0 }} transition={{ duration: 0.2 }}>
						<OpenCloseBtn opened={open ? 'open' : 'close'} />
					</motion.div>
				</button>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div style={{ overflow: 'hidden' }} initial={{ height: '0', opacity: '0' }} animate={{ height: 'auto', opacity: '1' }} exit={{ height: '0', opacity: '1' }}>
						<div className={styles.workingProcessItem__text}>{props.text}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
})

const MWorkingProcessItem = motion(WorkingProcessItem)

export default MWorkingProcessItem
