import { connect } from 'react-redux'
import LandingPage from '../LandingPage'
import { mapStateToProps, mapDispatchToProps } from '../LandingPageContainer'

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
