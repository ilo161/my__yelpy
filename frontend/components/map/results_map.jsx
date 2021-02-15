import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';



class ResultsMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers()
  }

  componentDidUpdate(prevProps) {

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
