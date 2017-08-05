
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


