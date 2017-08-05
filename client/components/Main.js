
import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { fetchStateData, fetchStateJson } from '../store'
import * as d3 from 'd3';



class Main extends React.Component {

componentDidMount() {
  this.props.fetchDataThunk()
  this.props.fetchJsonThunk()
}


  render () {

    const states = this.props.stateData

    return (
      <div className="container">
       <h2>Total carbon dioxide emissions from all sectors, all fuels 2014</h2>
       <span className="stateData">

      </span>
      </div>
    )
  }
}

const mapState = (state) => {
 return {
  stateData: state.stateData,
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


    // {
      //   states && states.map(state => {
      //     return (
      //       <span className="headr" key={state.location}>
      //         <div >
      //           {state.name.split(' ').slice(-1)}
      //         </div>
      //         <span className="CO2">
      //           {state['2014']}   {state.units}
      //         </span>
      //       </span>)}).sort()
      // }
