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
    if (valueLessHundred > 10 && valueLessHundred < 20) return `${number} человек пойдут тусовать с тобой`
    if (valueLessTen > 1 && valueLessTen < 5) {
      return `${number} человека пойдут тусовать с тобой`
    }
    if (number === 0) {
      return `Никто с тобой не тусанет`
    }
    return `${number} человек пойдут тусовать с тобой`
  }
  return (
    <>
      {users.length > 0}
      <h2>
        <span 
          className={users.length > 0 ? "badge bg-primary" : "badge bg-danger"}>
            {renderPhrase(users.length)} 
        </span>
      </h2>
      { users.length > 0 ?
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
      : ""}
    </>
  )
 }

 export default Users