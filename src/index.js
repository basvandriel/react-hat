import { HatContext } from './HatContext'
import PropTypes from 'prop-types'

export const Hat = ({ children }) => {
  return <HatContext.Consumer></HatContext.Consumer>
}

Hat.propTypes = { children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]) }
