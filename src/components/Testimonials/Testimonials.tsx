'use client'

import { motion } from 'framer-motion'

import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import SectionIntro from '../SectionIntro/SectionIntro'

import styles from './Testimonials.module.scss'
import 'swiper/css/bundle'
import './customSwiper.scss'
import { testimonials } from '@/data/testimonials'
import Testimonialitem from '../Testimonialitem/Testimonialitem'

const testimonialsAnimation = {
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

const Testimonials: FC = () => {
	return (
		<motion.section initial={'hidden'} whileInView={'visible'} variants={testimonialsAnimation} className={styles.testimonials}>
			<div className='container'>
				<SectionIntro title='Testimonials' text='Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services' />
				<div className={styles.testimonials__list}>
					<Swiper
						modules={[Pagination]}
						spaceBetween={50}
						slidesPerView={1}
						centeredSlides={true}
						initialSlide={1}
						pagination={{ clickable: true }}
						navigation={false}
						breakpoints={{
							630: {
								slidesPerView: 2,
							},
						}}
					>
						{testimonials.map(testimonial => (
							<SwiperSlide key={testimonial.id}>
								<Testimonialitem props={testimonial} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</motion.section>
	)
}

export default Testimonials
