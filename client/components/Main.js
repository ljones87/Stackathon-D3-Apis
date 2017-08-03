
import React from 'react';
import { connect } from 'react-redux';
import { fetchStateData } from '../store'
import * as d3 from 'd3';


class Main extends React.Component {
 constructor() {
   super()
   this.projection = d3.geoAlbersUsa().scale(1280)
   this.quantize = d3.scaleQuantize()
 }

componentDidMount() {
  this.props.fetchDataThunk()
}
  render () {

    return (
      <div>
        <h1>Hello!</h1>
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
