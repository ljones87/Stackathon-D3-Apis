
import React from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchStateData } from '../store'
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
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Main)



    //  {
    //     states && states.map(state => {
    //       return (
    //         <span className="headr" key={state.location}>
    //           <div >
    //             {state.name.split(' ').slice(-1)}
    //           </div>
    //           <span className="CO2">
    //             {state['2014']}   {state.units}
    //           </span>
    //         </span>)}).sort()
    //   }
