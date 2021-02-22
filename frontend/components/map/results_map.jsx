import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';




class ResultsMap extends React.Component {

  componentDidMount() {
    let mapOptions = this.setMapOptions()

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    
    // this.registerListeners();
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
    this.MarkerManager.updateMarkers(this.props.bizMarkers)
  }

  handleMarkerClick(biz){
    this.props.history.push(`/biz/${biz.id}`)
  }

  componentDidUpdate(oldProps) {

    if(oldProps.bizMarkers != this.props.bizMarkers){
        this.map.setOptions(this.setMapOptions())
        this.MarkerManager.updateMarkers(this.props.bizMarkers)
    }
  }

  setMapOptions(){
    let mapOptions;

      if(this.props.bizMarkers.length === 0){
           mapOptions = {
                  center: { lat: 47.73401867760304, lng: -122.35571371908686 }, // this is Seattle
                  zoom: 10
              };
      } else if(this.props.bizMarkers.length === 1){
             // zoom in close when showing one single business
           mapOptions = {center: {lat: this.props.bizMarkers[0].latitude, 
                            lng: this.props.bizMarkers[0].longitude },
                            zoom: 14
                          }
      } else {
        // display seattle
         mapOptions = {center: {lat: this.props.bizMarkers[0].latitude, 
                            lng: this.props.bizMarkers[0].longitude },
                            zoom: 11
                          }
      }

      return mapOptions
  }

  registerListeners() {
    const {updateBounds} = this.props;


    google.maps.event.addListener(this.map, "idle", (poodle) => {
        const { north, east, south, west } = this.map.getBounds().toJSON();   
        const bounds = {
            northEast: {lat: north, lng: east},
            southWest: {lat: south, lng: west}
        }
        updateBounds(bounds);

    })

  }


  render() {
    return (
      <div id={this.props.bizShowPage ? "map-container-show-page" : "map-container"} 

      ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(ResultsMap);
