import { connect } from 'react-redux'
import Nav from '../Nav'
import { mapStateToProps, mapDispatchToProps } from '../NavContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
