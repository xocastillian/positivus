import React, { FC } from 'react'
import styles from './Teammate.module.scss'
import Image from 'next/image'
import { team } from '@/data/team'
import Link from 'next/link'

import inicon from '@/assets/imgs/icons/inicon.svg'

interface ITeammate {
	props: ITeam
}

const Teammate: FC<ITeammate> = ({ props }) => {
	return (
		<div className={styles.teammate}>
			<div className={styles.teammate__descr}>
				<div className={styles.descr__photo}>
					<Image src={props.photo} alt='' width={105} height={102} />
				</div>
				<div className={styles.descr__person}>
					<div className={styles.person__link}>
						<div className={styles.link__item}>
							<Link href={props.linkedInLink}>
								<Image src={inicon} alt='' />
							</Link>
						</div>
					</div>
					<div className={styles.person__data}>
						<h5 className={styles.data__name}>{props.name}</h5>
						<p className={styles.data__role}>{props.role}</p>
					</div>
				</div>
			</div>
			<p className={styles.teammate__exp}>{props.exp}</p>
		</div>
	)
}

export default Teammate
