import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';



class ResultsMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 47.73401867760304, lng: -122.35571371908686 }, // this is SF
      zoom: 10
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    const that = this.map
    this.map.addListener("idle", () => {

        debugger
        const bounds = that.getBounds()
        console.log(bounds)
    })
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.bizMarkers)
  }

  componentDidUpdate(oldProps) {

    if(oldProps != this.props){
        this.MarkerManager.updateMarkers(this.props.bizMarkers)
    }
  }

  registerListeners() {
   
  }

  handleMarkerClick(bench) {

  }

  handleClick(coords) {

  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(ResultsMap);
