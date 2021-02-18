

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

        debugger
        Object.keys(this.markers)
        .filter(key => {
            debugger
           return !myBizMarkers[key]
        })
        .forEach(key => {
            debugger
            this.removeMarker(key)
        })

       
        //  bizMarkers.forEach((biz, idx) => {
        
        
        //   if (!this.markers[biz.id]){
        //       this.createMarkerFromBiz(biz, idx)
        //   }
        // })

        console.log("time to update")
      }
      
  }

  createMarkerFromBiz(biz, idx){
    const bizId = biz.id;
    // const myLatLng = {lat: biz.latitude, lng: biz.longitude};
    const position = new google.maps.LatLng(biz.latitude, biz.longitude);
    debugger
    const marker = new google.maps.Marker({
                position,
                map: this.map,
                title: biz.business_name,
                label: (idx + 1).toString()
            });

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
      debugger
    this.markers[bizId].setMap(null);
    delete this.markers[bizId];
  }
}