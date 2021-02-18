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

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    
    // this.registerListeners();
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
    this.MarkerManager.updateMarkers(this.props.bizMarkers)
  }

  handleMarkerClick(biz){
    this.props.history.push(`/biz/${biz.id}`)
  }

  componentDidUpdate(oldProps) {

    if(oldProps != this.props){
        this.MarkerManager.updateMarkers(this.props.bizMarkers)
    }
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
      <div id="map-container" ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(ResultsMap);
