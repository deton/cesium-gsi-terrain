<img src='./img/mtfuji.png'>

# cesium-gsi-terrain

sample: https://deton.github.io/cesium-gsi-terrain/example/

Arranged [https://github.com/davenquinn/cesium-martini](davenquinn/cesium-martini) for GSI-terrain.

Cesium で国土地理院の標高タイルを用いた地形表現を行うためのモジュール
[cesium-gsi-terrain](https://github.com/Kanahiro/cesium-gsi-terrain/)
を`<script src="GsiTerrainProvider.js"></script>`で読み込めるようにbundle化したものです。

## usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <script src="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Cesium.js"></script>
  <link href="https://cesium.com/downloads/cesiumjs/releases/1.118/Build/Cesium/Widgets/widgets.css" rel="stylesheet">
  <script src="https://deton.github.io/cesium-gsi-terrain/bundle/GsiTerrainProvider.js"></script>
</head>
<body>
  <div id="cesiumContainer"></div>
  <script>
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: new GsiTerrainProvider({}),
    });
  </script>
</body>
</html>
```
