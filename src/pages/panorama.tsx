import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@/tools/OrbitControls';
import Head from "next/head";

function PanoramicMap() {
  const container = useRef(null);
  let scene;
  let camera;
  let renderer;
  let controls;
  const sides = [
    {
      // 右
      url: `http://qiniu2.99tongxuelu.com/2b5ff253-b82c-6eac-51ce-62753778cd60-178634cd53d.jpg`,
    },
    {
      // 左
      url: `http://qiniu2.99tongxuelu.com/dc63a39e-f523-fef2-e477-9a2a3c00c0d5-178634cd53d.jpg`,
    },
    {
      // 上
      url: `http://qiniu2.99tongxuelu.com/99cc9d02-42da-1b1e-01c2-90c5f07e9284-178634cd53d.jpg`,
    },
    {
      // 下
      url: `http://qiniu2.99tongxuelu.com/170107d7-40d6-7d7a-f300-3784e79d733c-178634cd53d.jpg`,
    },
    {
      // 前
      url: `http://qiniu2.99tongxuelu.com/3510d36e-fb8d-d47e-8086-f577164d8b1c-178634cd53d.jpg`,
    },
    {
      // 后
      url: `http://qiniu2.99tongxuelu.com/b57c272f-519e-139b-672d-9dde2cd74f08-178634cd53b.jpg`,
    },
  ];
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.current.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = 0.01;

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    // 是否自动旋转
    controls.autoRotate = false;
    controls.rotateSpeed = -0.45;

    const materials = [];
    sides.forEach((item) => {
      const map = new THREE.TextureLoader().load(item.url);
      materials.push(new THREE.MeshBasicMaterial({ map }));
    });
    const skyBox = new THREE.Mesh(
      new THREE.BoxBufferGeometry(100, 100, 100),
      materials,
    );
    skyBox.geometry.scale(1, 1, -1);
    scene.add(skyBox);
    window.addEventListener('resize', onWindowResize, false);
  }
  useEffect(() => {
    init();
    animate();
  }, []);
  return (
    <div>
      <Head>
        <meta name="referrer" content="no-referrer" />
      </Head>
      <div
        id="canvas"
        style={{ width: '100%', height: '100%', background: '#fff' }}
        ref={container}
      />
    </div>
  );
}
PanoramicMap.getInitialProps = function() {
  return {
    pageTitle: '全景地图',
  };
};
export default PanoramicMap;
