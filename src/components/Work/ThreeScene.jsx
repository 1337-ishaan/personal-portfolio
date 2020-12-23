import React, { useEffect } from "react";
import ReactThreeFbxViewer from "react-three-fbx-viewer";

import * as THREE from "three";

import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import modelObj from "../../assets/scene.obj";
import Ishaan from '../../assets/images/IshaanGREY.jpg';

const ThreeScene = () => {
  const onLoad = (e) => {
    console.log(e);
  };

  const onError = (e) => {
    console.log(e);
  };

  let cameraPosition = {
    x: 150,
    y: 300,
    z: 350,
  };

  useEffect(() => {
    console.log(modelObj);
    let container;

    let camera, scene, renderer;

    let mouseX = 0,
      mouseY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    let object;

    init();
    animate();

    function init() {
      container = document.getElementById("container");

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      camera.position.z = 250;

      // scene

      scene = new THREE.Scene();

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.8);
      camera.add(pointLight);
      scene.add(camera);

      // manager

      function loadModel() {
        object.traverse(function (child) {
          if (child.isMesh) child.material.map = texture;
        });

        object.position.y = -95;
        scene.add(object);
      }

      const manager = new THREE.LoadingManager(loadModel);

      manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
      };

      // texture

      const textureLoader = new THREE.TextureLoader(manager);
      const texture = textureLoader.load(Ishaan);
      console.log(texture);
      // model

      function onProgress(xhr) {
        if (xhr.lengthComputable) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          console.log(
            "model " + Math.round(percentComplete, 2) + "% downloaded"
          );
        }
      }

      function onError() {
        console.log("Error")
    }

      const loader = new OBJLoader(manager);
      loader.load(
        modelObj,
        function (obj) {
          object = obj;
        },
        onProgress,
        onError
      );

      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener("ondragstart", onDocumentMouseMove, false);

      //

      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) / 2;
      mouseY = (event.clientY - windowHalfY) / 2;
    }

    //

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
  });
  return <div id="container"></div>;
};

export default ThreeScene;
