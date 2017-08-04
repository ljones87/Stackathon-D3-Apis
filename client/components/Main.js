
import React from 'react';
import { connect } from 'react-redux';
import { fetchStateData } from '../store'
import * as d3 from 'd3';
import { default as Chart} from './Chart';
//import * as topojson from 'topojson';

class Main extends React.Component {
 constructor() {
   super()
   this.projection = d3.geoAlbersUsa().scale(1280)
   this.quantize = d3.scaleQuantize().range(d3.range(9));
   //this.geoPath = d3.geoPath().projection(this.projection);


 }

componentDidMount() {
  this.props.fetchDataThunk()
}


  render () {

    const states = this.props.stateData;
    console.log(states)
    return (
      <div className="container">
      <div id="chart" className="col-6" >
        <Chart />
      </div>
      <div className="col-6">
      {
        states && states.map(state => {
          return (
            <div key={state.location}>
              <h3>
                {state.name}
              </h3>
              <ul>
                <li>{Object.keys(state)[0]}:  {state['1984']} {state.units}</li>
                <li>{Object.keys(state)[1]}:  {state['1994']} {state.units}</li>
                <li>{Object.keys(state)[2]}:  {state['2004']} {state.units}</li>
                <li>{Object.keys(state)[3]}:  {state['2014']} {state.units}</li>
              </ul>
            </div>)})
      }
      </div>
      </div>
    )
  }
}

const mapState = (state) => {
 return {
  stateData: state.stateData
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataThunk() {
      dispatch(fetchStateData())
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Main)
