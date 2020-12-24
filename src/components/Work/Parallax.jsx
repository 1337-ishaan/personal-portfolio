import React, { useEffect } from "react";

import * as THREE from "three";

import { GUI } from "three/examples/jsm/libs/dat.gui.module.js";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { LightProbeGenerator } from "three/examples/jsm/lights/LightProbeGenerator.js";
import { ParallaxBarrierEffect } from "three/examples/jsm/effects/ParallaxBarrierEffect.js";
import two from "../../assets/pisa/nx.png";
import four from "../../assets/pisa/ny.png";
import six from "../../assets/pisa/nz.png";
import one from "../../assets/pisa/px.png";
import three from "../../assets/pisa/py.png";
import five from "../../assets/pisa/pz.png";

const Parallax = () => {
  useEffect(() => {
    let mesh, renderer, scene, camera;
    let gui, lightProbe, directionalLight;

    // linear color space
    const API = {
      lightProbeIntensity: 1.0,
      directionalLightIntensity: 0.2,
      envMapIntensity: 1,
    };
    init();

    function init() {
      // renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      //   renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      let container = document.getElementById("parallax");
      container.appendChild(renderer.domElement);
      // tone mapping
      renderer.toneMapping = THREE.NoToneMapping;

      renderer.outputEncoding = THREE.sRGBEncoding;

      // scene
      scene = new THREE.Scene();

      // camera
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.set(0, 0, 40);

      // controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.addEventListener("change", render);

      controls.minDistance = 10;
      controls.maxDistance = 50;
      controls.enablePan = true;

      // probe
      lightProbe = new THREE.LightProbe();
      scene.add(lightProbe);

      // light
      directionalLight = new THREE.DirectionalLight(
        0xd9a86c,
        API.directionalLightIntensity
      );
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);

      // envmap
      var urls = [one, two, three, four, five, six];
      new THREE.CubeTextureLoader().load(urls, function (cubeTexture) {
        cubeTexture.encoding = THREE.sRGBEncoding;

        scene.background = cubeTexture;

        lightProbe.copy(LightProbeGenerator.fromCubeTexture(cubeTexture));

        const geometry = new THREE.SphereBufferGeometry(5, 64, 32);
        //const geometry = new TorusKnotBufferGeometry( 4, 1.5, 256, 32, 2, 3 );

        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0,
          roughness: 0,
          envMap: cubeTexture,
          envMapIntensity: API.envMapIntensity,
        });

        // mesh
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        render();
      });

      // gui
      gui = new GUI();

      gui.width = 300;

      gui.domElement.style.userSelect = "none";

      const fl = gui.addFolder("Intensity");

      fl.add(API, "lightProbeIntensity", 0, 1, 0.02)
        .name("light probe")
        .onChange(function () {
          lightProbe.intensity = API.lightProbeIntensity;
          render();
        });

      fl.add(API, "directionalLightIntensity", 0, 1, 0.02)
        .name("directional light")
        .onChange(function () {
          directionalLight.intensity = API.directionalLightIntensity;
          render();
        });

      fl.add(API, "envMapIntensity", 0, 1, 0.02)
        .name("envMap")
        .onChange(function () {
          mesh.material.envMapIntensity = API.envMapIntensity;
          render();
        });

      fl.open();

      // listener
      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      render();
    }

    function render() {
      renderer.render(scene, camera);
    }
  }, []);

  return (<>
  <div className="drag__text">Dragabble & Scrollable ^
</div>
  <div id="parallax"></div>
  </>);
};

export default Parallax;
