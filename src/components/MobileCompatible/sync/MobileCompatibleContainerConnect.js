import { connect } from 'react-redux'
import MobileCompatible from '../MobileCompatible'
import { mapStateToProps, mapDispatchToProps } from '../MobileCompatibleContainer'

export default connect(mapStateToProps, mapDispatchToProps)(MobileCompatible)
