import React from "react"

const Notifications = ({ notifications }) => {
  console.log(notifications)
  return (
    <div>
      <div className="card">
        <div className="content">
          <span>Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span>{item.user}</span>
                    <span>{item.content}</span>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
