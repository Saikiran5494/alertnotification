// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-cont">
      {children}
      <GrFormClose className="close" />
    </div>
  )
}

export default Notification
