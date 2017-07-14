import { connect } from 'react-redux'
import Carousel from '../Carousel'
import { mapStateToProps, mapDispatchToProps } from '../CarouselContainer'

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
