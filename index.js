mapboxgl.accessToken =
  'pk.eyJ1IjoicGZ1cnRhayIsImEiOiJja2YzbTFpeDQwNGJvMndrdWI1c2M3MDN4In0.7kXrdvI0M6BBO7uA--KwMA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/pfurtak/ckf4rthzl1jds19mtidpm7ndi',
  center: [139.7536, 35.6834],
  zoom: 10.7,
});

map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['tokyo-arcades'],
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      '<a href=' +
        feature.properties.url +
        '><h3>' +
        feature.properties.title +
        '</a></h3><hr><h4>' +
        feature.properties.address +
        '</h4><p>' +
        feature.properties.description +
        '</p>'
    )
    .addTo(map);
});
