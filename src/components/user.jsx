import React, { useState } from "react"
import api from "../api"

 const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter(user => user._id != userId))
  }
  const renderPhrase = (number) => {
    let valueLessHundred = (Math.abs(number) % 100)
    let valueLessTen = valueLessHundred % 10
    if (valueLessHundred > 10 && valueLessHundred < 20) return "человек"
    if (valueLessTen > 1 && valueLessTen < 5) {
      return "человека"
    } else {
      return "человек"
    }
  }
  return (
    <>
      <span 
        className={users.length > 0 ? "m-2 badge rounded-pill bg-primary" : "m-2 badge rounded-pill bg-danger"}>
          {users.length} {renderPhrase(users.length)} пойдут тусовать с тобой
      </span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.name}>
                <td>
                  <span>{user.name}</span>
                </td>
                <td>
                  {user.qualities.map((quality)=> {  
                    return (
                      <span 
                      key={quality._id}
                      className={String("m-1 badge rounded-pill bg-" + quality.color)}>
                        {quality.name} 
                      </span>
                      )
                    })}
                </td>
                <td>
                  <span key={user.profession._id}>{user.profession.name}</span>
                </td>
                <td>
                  <span>{user.completedMeetings}</span>
                </td>
                <td>
                  <span>{user.rate}</span>
                </td>
                <td>
                  <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>handleDelete(user._id)}>
                      delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
 }

 export default Users