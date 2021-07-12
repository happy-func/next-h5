import React, { useEffect, useState } from "react";
import style from '../styles/Home.module.scss';
import BaseLink from "@/components/BaseLink";
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import {List, Picker} from 'antd-mobile';

SwiperCore.use([Autoplay]);

function Home({list}) {
  const seasons = [
    [
      {
        label: '2013',
        value: '2013',
      },
      {
        label: '2014',
        value: '2014',
      },
    ],
    [
      {
        label: '春',
        value: '春',
      },
      {
        label: '夏',
        value: '夏',
      },
    ],
  ];
  const [sValue] = useState([]);

  return (
    <div className={style.page}>
      <List.Item>常用轮播</List.Item>
      <Swiper
        centeredSlides={true}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className={style.swiper}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <List.Item>异形的slide</List.Item>
      <Swiper
        centeredSlides
        loop
        autoplay
        slidesPerView={1.23}
        className={style.swiper}
      >
        {[1,2,3,4].map((item) => (
          <SwiperSlide key={item} className={``}>
            {({ isActive, isPrev, isNext }) => (
              <div className={`${style.swiperItem} ${isActive ? style.swiperItemActive : ''} ${isPrev ? style.swiperItemPrev : ''} ${isNext ? style.swiperItemNext : ''}`}>Slide {item}</div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Picker
        data={seasons}
        title="选择季节"
        cascade={false}
        extra="请选择(可选)"
        value={sValue}
        onChange={v => console.log(v)}
        onOk={v => console.log(v)}
      >
        <List.Item arrow="horizontal">Multiple</List.Item>
      </Picker>
      <BaseLink src="/test?id=2">test</BaseLink>
      {list.map(item => <p key={item} className={style.text}>test {item}</p>)}
    </div>
  )
}

export const getStaticProps = function () {
  return {
    props: {
      pageTitle: 'Next-H5',
      list: Array.from({length: 100}, (v, k) => k),
    }
  }
}

export default Home;
