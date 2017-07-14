import { connect } from 'react-redux'
import ThreeSixtyDegreeView from '../ThreeSixtyDegreeView'
import { mapStateToProps, mapDispatchToProps } from '../ThreeSixtyDegreeViewContainer'

export default connect(mapStateToProps, mapDispatchToProps)(ThreeSixtyDegreeView)
