import React, { useEffect, useRef } from "react";
import Head from "next/head";
import videoJs from 'video.js';
import zhCN from 'video.js/dist/lang/zh-CN.json';
import 'video.js/dist/video-js.min.css';
import styles from '../styles/live.module.scss';

videoJs.addLanguage('zh-CN', zhCN);
videoJs.options.autoplay = true;

function Live() {
  const player = useRef(null);
  function onVideoError() {
    console.log('video error');
  }
  function onVideoReady() {
    console.log('video ready');
  }
  function onVideoPause() {
    console.log('video pause');
  }
  function createPlayer() {
    // 播放器的配置
    const videoJsOptions = {
      autoplay: true, // 自动播放
      language: 'zh-CN',
      // controls: false, // 控制条
      preload: true, // 自动加载
      errorDisplay: true, // 错误展示
      // height: 350,  //高
      fluid: true, // 跟随外层容器变化大小，跟随的是外层宽度
      // controlBar: false,  // 设为false不渲染控制条DOM元素，只设置controls为false虽然不展示，但还是存在
      textTrackDisplay: false, // 不渲染字幕相关DOM
      // userActions: {
      //   hotkeys: true  //是否支持热键
      // },
    };
    player.current = videoJs('player', videoJsOptions);
    player.current.on('error', onVideoError);
    player.current.on('ready', onVideoReady);
    player.current.on('pause', onVideoPause);
  }
  useEffect(() => {
    createPlayer();
  }, [])
  return (
    <>
      <Head>
        <title>点播视频播放</title>
      </Head>
      <div data-vjs-player>
        <video
          id="player"
          className={`video-js vjs-default-skin vjs-big-play-centered ${styles.player}`}
          controls
          playsInline
        >
          <track kind="captions" />
          <source
            src="https://api.deepworker.online/test.m3u8"
            type="application/x-mpegURL"
          />
        </video>
      </div>
    </>
  )
}

export default Live;
