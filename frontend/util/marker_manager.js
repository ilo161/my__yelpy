

export default class MarkerManager {
  constructor(map, handleMarkerClick) {
    this.map = map;
    this.markers = {};
    this.handleMarkerClick = handleMarkerClick;
  }


  updateMarkers(bizMarkers){
      

      if(Boolean(bizMarkers)){

        const myBizMarkers = {};
        bizMarkers.forEach(biz => myBizMarkers[biz.id] = biz)

        bizMarkers.filter(biz => !this.markers[biz.id])
        .forEach((biz, idx) => this.createMarkerFromBiz(biz, idx))


        Object.keys(this.markers)
        .filter(key => {

           return !myBizMarkers[key]
        })
        .forEach(key => {

            this.removeMarker(key)
        })

      }
      
  }

  createMarkerFromBiz(biz, idx){
    const bizId = biz.id;

    const position = new google.maps.LatLng(biz.latitude, biz.longitude);

    const marker = new google.maps.Marker({
                position,
                map: this.map,
                title: biz.business_name,
                label: null
            })

    const infowindow = new google.maps.InfoWindow({
        content: `<h2>${biz.business_name}</h2>`,
    });

    marker.addListener("mouseover", () => {
        infowindow.open(this.map, marker);
    })

    marker.addListener("mouseout", () => {
        infowindow.close();
    })

    marker.addListener("click", () => {
        this.handleMarkerClick(biz)
    })

    this.markers[bizId] = marker
  }

  removeMarker(bizId) {

    this.markers[bizId].setMap(null);
    delete this.markers[bizId];
  }
}