import React from "react";
import style from '../styles/Home.module.css';
import BaseLink from "@/components/BaseLink";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
SwiperCore.use([Autoplay]);

function Home({ list }) {
    return (
        <div className={style.page}>
            <BaseLink src="/test?id=2">test</BaseLink>
            <Swiper
              spaceBetween={50}
              centeredSlides={true}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            {list.map(item => <p key={item} className={style.text}>test {item}</p>)}
        </div>
    )
}

export const getStaticProps = function () {
    return {
        props: {
            pageTitle: 'Next-H5',
            list: Array.from({length:100}, (v,k) => k),
        }
    }
}

export default Home;
