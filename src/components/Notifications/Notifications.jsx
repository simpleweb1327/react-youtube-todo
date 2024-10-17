import classes from './Notifications.module.css'
import Notification from '../Notification/Notification'

export default function Notifications({ notifications }) {
  return (
    <div className={classes['noti-wrapper']}>
      {
        notifications && notifications.map((noti) => {
          return <Notification key={`Noti-${noti.id}`} noti={noti} />
        })
      }
    </div>
  )
}