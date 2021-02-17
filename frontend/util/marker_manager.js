

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }


  updateMarkers(bizMarkers){
      

      if(Boolean(bizMarkers)){


         bizMarkers.forEach(biz => {
        
          if (!this.markers[biz.id]){
              this.createMarkerFromBiz(biz)
          }
        })

        console.log("time to update")
      }
      
  }

  createMarkerFromBiz(biz){
    const bizId = biz.id;
    const myLatLng = {lat: biz.latitude, lng: biz.longitude};

    const marker = new google.maps.Marker({
                position: myLatLng,
                map: this.map,
                title: "Hello World!",
            });

    this.markers[bizId] = marker
  }
}