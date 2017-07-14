import { connect } from 'react-redux'
import Footer from '../Footer'
import { mapStateToProps, mapDispatchToProps } from '../FooterContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
