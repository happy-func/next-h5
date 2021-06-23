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
      url: `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/panorama/right.jpeg`,
    },
    {
      // 左
      url: `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/panorama/left.jpeg`,
    },
    {
      // 上
      url: `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/panorama/up.jpeg`,
    },
    {
      // 下
      url: `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/panorama/foot.jpeg`,
    },
    {
      // 前
      url: `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/panorama/front.jpeg`,
    },
    {
      // 后
      url: `${process.env.NEXT_PUBLIC_ENV_BASE_PATH}/panorama/back.jpeg`,
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
export function getStaticProps() {
  return {
    props: {
      pageTitle: '全景漫游',
    }
  }
}

export default PanoramicMap;
