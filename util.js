function toWKT(layer) {
    var lng, lat, coords = [];
    if (layer instanceof L.Polygon || layer instanceof L.Polyline) {
        var latlngs = layer.getLatLngs();
        for (var i = 0; i < latlngs.length; i++) {
            latlngs[i]
            coords.push(latlngs[i].lng.toFixed(4) + " " + latlngs[i].lat.toFixed(4));
            if (i === 0) {
                lng = latlngs[i].lng.toFixed(4);
                lat = latlngs[i].lat.toFixed(4);
            }
    };
        if (layer instanceof L.Polygon) {
            return "POLYGON((" + coords.join(",") + "," + lng + " " + lat + "))";
        } else if (layer instanceof L.Polyline) {
            return "LINESTRING(" + coords.join(",") + ")";
        }
    } else if (layer instanceof L.Marker) {
        return "POINT(" + layer.getLatLng().lng.toFixed(4) + " " + layer.getLatLng().lat.toFixed(4) + ")";
    }
}