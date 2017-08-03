
/* -----------------    IMPORTS     ------------------ */

import axios from 'axios'

const info = (state) => {
  return {
    name: state.data.series[0].name,
    y14: state.data.series[0].data[0],
    y04:  state.data.series[0].data[10],
    y94: state.data.series[0].data[20],
    location: state.data.series[0].geography,
    units: state.data.series[0].units,
  }
}

/* -----------------    ACTION TYPES     ------------------ */

const GET_STATE_DATA = 'GET_STATE_DATA'


/* ------------   ACTION CREATORS     ------------------ */

const getStateData = (usState) => {
  return { type: GET_STATE_DATA, usState }

}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchStateData = () => {
  return dispatch => {
    axios.all([
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-CO.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-CA.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-NY.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-MT.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-OR.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-WY.A')
      ])
      .then(axios.spread((CO, CA, NY, MT, OR, WY) => {
        const states = [CO, CA, NY, MT, OR, WY]
        states.forEach(state => dispatch(getStateData(info(state))))
      }))
      .catch(err => console.log(err))
  }
}

/* ------------       REDUCERS     ------------------ */

export default function (stateData = [], action) {
  switch (action.type) {
    case GET_STATE_DATA:
      return  [...stateData, action.usState]
    default:
      return stateData
  }
}
