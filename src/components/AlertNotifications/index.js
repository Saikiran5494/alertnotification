// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <div className="message-container">
        <h1 className="success">Success</h1>
        <p className="message">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="Error-icon" />
      <div className="message-container">
        <h1 className="error">Error</h1>
        <p className="message">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning-icon" />
      <div className="message-container">
        <h1 className="warning">Warning</h1>
        <p className="message">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info-icon" />
      <div className="message-container">
        <h1 className="info">Info</h1>
        <p className="message">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container ">
      <div className="bg-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
