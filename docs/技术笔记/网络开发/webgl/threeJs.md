# ThreeJS

## 参考

- [官方文档](https://threejs.org/docs)
- [功能库 camera-controls](https://github.com/yomotsu/camera-controls)
- [功能库 Theatre.js](https://www.theatrejs.com/docs/latest)
- [功能库 tween.js](https://github.com/tweenjs/tween.js/)

## 示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body,
      html {
        padding: 0;
        margin: 0;
      }
    </style>
  </head>
  <body>
    <script type="importmap">
      {
        "imports": {
          "three": "https://unpkg.com/three@0.151.3/build/three.module.js",
          "three/addons/": "https://unpkg.com/three@0.151.3/examples/jsm/"
        }
      }
    </script>
    <script type="module">
      import * as THREE from 'three';
      import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

      const scene = new THREE.Scene();
      const clock = new THREE.Clock();

      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      const clip = new THREE.AnimationClip('test_clip', 2, [new THREE.VectorKeyframeTrack('.position', [0, 1, 2], [0, 0, 0, 0, 5, 0, 0, 10, 0])]);
      const mixer = new THREE.AnimationMixer(cube);
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopRepeat, 2);

      document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
          action.paused = true;
        } else if (e.code === 'KeyS') {
          action.paused = false;
        } else if (e.code === 'KeyA') {
          action.play();
        }
      });

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        mixer.update(clock.getDelta());
      }

      animate();
    </script>
  </body>
</html>
```

## 基本概念

- 场景 scene
- 镜头 camera
- 渲染器 renderer

模型：

- 几何形状 geometry
- 材质 material

| 材质               | 描述 | 链接                                                            |
| ------------------ | ---- | --------------------------------------------------------------- |
| LineBasicMaterial  | 线   | <https://threejs.org/docs/#api/en/materials/LineBasicMaterial>  |
| LineDashedMaterial | 虚线 | <https://threejs.org/docs/#api/en/materials/LineDashedMaterial> |

导入器：

- GLTF 模型导入器 GLTFLoader

## GLTF 模型导入及导出

> [GLTFLoader](https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader)  
> [GLTFExporter](https://threejs.org/docs/index.html#examples/en/exporters/GLTFExporter)  
> [官方示例](https://threejs.org/examples/?q=export#misc_exporter_gltf)

```js
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';

const options = {
  trs: false,
  onlyVisible: true,
  binary: true,
  maxTextureSize: 4096,
};

const gltfExporter = new GLTFExporter();
gltfExporter.parse(
  scene,
  function (result) {
    if (result instanceof ArrayBuffer) {
      save(new Blob([result], { type: 'application/octet-stream' }), 'scene.glb');
    } else {
      save(new Blob([JSON.stringify(result, null, 2)], { type: 'text/plain' }), 'scene.gltf');
    }
  },
  function (error) {
    console.log('An error happened during parsing', error);
  },
  options
);

function save(blob, filename) {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}
```

## 常见问题

> [!NOTE] 避免重叠模型出现闪面（z-fighting 问题）
> 关闭模型材质的深度计算 `new Material({ ..., depthWrite: false })`
