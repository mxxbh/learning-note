# WebGIS

## 数据格式

### geojson

> [GeoJSON 定义](https://geojson.org/)  
> [GeoJSON 维基百科介绍](https://en.wikipedia.org/wiki/GeoJSON)

## 常见地图服务商

- **Googlemaps**：Googlemaps 是一款免费的地图服务，提供了各种地图类型，包括谷歌地图、谷歌地球、谷歌街景等。
- **Baidu Maps**：百度地图是一款免费的地图服务，提供了各种地图类型，包括百度地图、百度地球、百度街景等。
- **Amap**：高德地图是一款免费的地图服务，提供了各种地图类型，包括高德地图、高德地球、高德街景等。
- **Tencent Maps**：腾讯地图是一款免费的地图服务，提供了各种地图类型，包括腾讯地图、腾讯地球、腾讯街景等。
- **GeoPedia**：地理信息系统服务器，提供各种地图类型，包括地理信息数据、遥感数据、地形数据等。
- **OpenStreetMap**：一款开源的免费地图服务，提供了各种地图类型，包括 OpenStreetMap、OpenCycleMap、OpenTopoMap 等。
- **ArcGIS**：ArcGIS 是一款由 Esri 公司开发的地理信息系统平台，提供了各种地图服务，包括 ArcGIS Online、ArcGIS Enterprise、ArcGIS for Portal 等。ArcGIS 可以用来进行地理信息数据的管理、分析和可视化，支持各种地图类型，包括地图、热力图、散点图、饼图等。
- **MapBox**：MapBox 是一款基于开源地图数据的商业公司，提供了各种地图服务，包括 MapBox Studio、MapBox GL、MapBox API 等。MapBox 提供了一系列的开源地图数据，包括 OpenStreetMap、Mapzen、OpenTopoMap 等，可以用来进行地图的可视化、分析和地理信息数据可视化。

## 经纬度坐标系

> [坐标系信息查询](https://epsg.io/)  
> [坐标系定义列表 1](https://developers.arcgis.com/javascript/3/jshelp/pcs.html)  
> [坐标系定义列表 2](https://github.com/stevage/epsg/blob/master/crs-defs.json)

- WGS84 (World Geodetic System 1984) (EPSG:4326)
  - 是 GPS 全球卫星定位系统使用的坐标系。
  - 国外地图提供商如 OpenStreetMap、Google Maps 等使用。
- GCJ-02
  - 又称火星坐标系，中国国家测绘局制订的地理信息系统的坐标系统，为 WGS84 基础上加密
  - 高德地图、腾讯地图等使用此坐标系
- BD-09
  - 百度坐标系，在 GCJ-02 基础上再次加密
  - 百度地图使用
- CGCS2000
  - 国家大地 2000 坐标系，与 WGS84 接近
  - 国家地理信息公共服务平台天地图使用

## 地图投影

> [多种投影定义](https://desktop.arcgis.com/zh-cn/arcmap/latest/map/projections/list-of-supported-map-projections.htm)  
> [墨卡托投影 Transverse_Mercator](https://desktop.arcgis.com/zh-cn/arcmap/latest/map/projections/mercator.htm)

### 上海城建坐标

> [上海城建坐标信息参考](https://spatialreference.org/ref/sr-org/9054/)  
> [SOAP 在线转换服务](http://140.207.8.178:9393/)

::: code-group

```js [笛卡尔转上海城建]
/**
 * 将笛卡尔坐标转成上海城建坐标。
 * 测得误差小于 0.03 m。
 * @param {[number, number, number]} position 笛卡尔坐标，横纵坐标值均以 m 为单位
 * @returns 对应的上海城建坐标，横纵坐标值均以 m 为单位
 */
export function convertCIMToSHCity(position) {
  return [position[0] + 0.000610186 * position[1] + 6008.12034084796, -position[1] + 0.000590789 * position[0] + 48283.9011521837];
}
```

```js [上海城建转笛卡尔]
/**
 * 上海城建坐标转成笛卡尔坐标。
 * 测得误差小于 0.03 m。
 * @param {[number, number]} position 上海城建坐标，横纵坐标值均以 m 为单位
 * @returns 对应的笛卡尔坐标，横纵坐标值均以 m 为单位
 */
function convertSHCityToCIM(position) {
  return [
    0.9999996395089533 * position[0] + 0.0006101857800334101 * position[1] - 6037.58032486197,
    1.0000003604913068 * position[1] - 0.0005907892129742987 * position[0] - 48280.369025422704,
    0,
  ];
}
```

:::

## 底图

类型：

- 矢量图：点、线、矢量面
- 栅格图：海洋表面温度（SST）、CHLa、SSH、EKE、Bathymetry

可用 WMTS 标准栅格底图：

- 高德地图矢量底图：http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
- 高德地图影像底图：http://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}
- 谷歌地图影像底图：https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
- ArcGIS 影像底图：https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
- ArcGIS 海洋渲染：https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}
- ArcGIS 地形渲染：https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}
- ArcGIS 地形浅色：https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}
- ArcGIS 地形浅白：https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}
- ArcGIS 暗灰矢量：http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}
- ArcGIS 亮灰矢量：http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}
- ArcGIS 常规矢量：https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}
- ArcGIS 拓扑矢量：http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}
- OSM 矢量底图：http://a.tile.openstreetmap.org/{z}/{x}/{y}.png

## 其他

产品：

- [高德地图](https://ditu.amap.com/)、[高德地图开放平台](https://lbs.amap.com/)
- [百度地图开放平台](https://lbsyun.baidu.com/index.php?title=%E9%A6%96%E9%A1%B5)
- [天地图](https://www.tianditu.gov.cn/)
- [OpenStreetMap](https://www.openstreetmap.org/)、[OpenStreetMap Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API)、[OpenStreetMap Overpass turbo](https://overpass-turbo.eu/)
- [mapbox](https://docs.mapbox.com/help/getting-started/web-apps/)
- [数字视觉](https://dc.dvgis.cn/#/index)
- [Maptalks](https://maptalks.org/)

功能库：

- [proj4js](https://github.com/proj4js/proj4js '坐标转换')
- [gcoord](https://github.com/hujiulong/gcoord#readme '坐标转换')
- [Turf](https://turfjs.org 'geo 数据处理')

在线工具：

- [geojson 数据展示](https://geojson.io/ '数据展示')
- [shp 数据展示](https://mapshaper.org/ '数据展示')
- [GeoAtlas](https://datav.aliyun.com/portal/school/atlas/area_selector 'DataV 地理工具')
- [经纬度查询](https://jingweidu.bmcx.com/ '坐标查询')
