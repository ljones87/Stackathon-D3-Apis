 constructor() {
   super()
   this.projection = d3.geoAlbersUsa().scale(1280)
   this.quantize = d3.scaleQuantize()
   this.state = {
     CO: {},
     CA: {},
     NY: {},
     MT: {},
     OR: {},
     WY: {}
   }
 }

 componentDidMount() {
    axios.all([
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-CO.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-CA.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-NY.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-MT.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-OR.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-WY.A')
      ])
      .then(axios.spread((CO, CA, NY, MT, OR, WY) => {
        this.setState({
          //stateinfo: [info(CO), ]
          CO: info(CO),
          CA: info(CA),
          NY: info(NY),
          MT: info(MT),
          OR: info(OR),
          WY: info(WY)
        })
      }))
 }
