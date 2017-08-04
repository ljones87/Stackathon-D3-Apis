
import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { fetchStateData, fetchStateJson } from '../store'
import * as d3 from 'd3';
import { MapBubble } from 'react-d3-map-bubble'
var topojson = require('topojson');
console.log(MapBubble)
  var width = 960,
  height = 600;

  var us = require('../data/us.json');

  // data should be a MultiLineString
  var dataStates = topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; });
  /// data should be polygon
  var dataCounties = topojson.feature(us, us.objects.nation);

  // class
  var meshClass = 'border';
  var polygonClass = 'land';

  // domain
  var domain = {
    scale: 'sqrt',
    domain: [0, 1e6],
    range: [0, 15]
  };

  //  var circles = topojson.feature(us, us.objects.counties).features
  //      .sort(function(a, b) { return b.properties.population - a.properties.population; })
  // var circleValue = function(d) { return +d.properties.population; };
    var projection = 'null';

  // var tooltipContent = function(d) {return d.properties;}



class Main extends React.Component {

componentDidMount() {
  this.props.fetchDataThunk()
  this.props.fetchJsonThunk()
}


  render () {
   //console.log(width, height, dataPolygon, polygonClass, dataMesh, meshClass, domain)
    const states = this.props.stateData

    return (
      <div className="container">
      <div id="chart" className="col-6" >
        <MapBubble
            width= {width}
            height= {height}
            dataPolygon= {dataCounties}
            polygonClass= {polygonClass}
            dataMesh= {dataStates}
            meshClass = {meshClass}
            domain= {domain}
            dataCircle= {circles}
            circleValue= {circleValue}
            circleClass= {'bubble'}
            projection= {projection}
            tooltipContent= {tooltipContent}
            showGraticule= {false}
            showTooltip= {true}
            showLegend= {true}
         />
      </div>

      </div>
    )
  }
}

const mapState = (state) => {
 return {
  stateData: state.stateData,
  stateJson: state.stateJson
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataThunk() {
      dispatch(fetchStateData())
    },
    fetchJsonThunk() {
      dispatch(fetchStateJson())
    }

  }
}

export default connect(mapState, mapDispatchToProps)(Main)


