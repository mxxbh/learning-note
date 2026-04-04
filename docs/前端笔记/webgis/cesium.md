# Cesium

> [Cesium](https://www.cesium.com/)  
> [示例](https://sandcastle.cesium.com/)  
> [api 列表](https://cesium.com/learn/cesiumjs/ref-doc/)

基本使用示例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- Include the CesiumJS JavaScript and CSS files -->
    <script src="https://cesium.com/downloads/cesiumjs/releases/1.111/Build/Cesium/Cesium.js"></script>
    <link href="https://cesium.com/downloads/cesiumjs/releases/1.111/Build/Cesium/Widgets/widgets.css" rel="stylesheet" />
  </head>
  <body>
    <div id="cesiumContainer"></div>
    <script type="module">
      // Your access token can be found at: https://ion.cesium.com/tokens.
      // Replace `your_access_token` with your Cesium ion access token.

      // Cesium.Ion.defaultAccessToken = 'your_access_token';

      // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
      const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
      });

      // Fly the camera to San Francisco at the given longitude, latitude, and height.
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-15.0),
        },
      });

      // Add Cesium OSM Buildings, a global 3D buildings layer.
      // const buildingTileset = await Cesium.createOsmBuildingsAsync();
      // viewer.scene.primitives.add(buildingTileset);
    </script>
  </body>
</html>
```
