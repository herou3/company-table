import React from "react"
import Bookmark from "./bookmark"
import Qualities from "./qualitie"

 const User = (props) => {

  return (
    <tr key={props.user._id}>
      <td>
        <span>{props.user.name}</span>
      </td>
      <td>
        {props.user.qualities.map((quality)=> {
          return <Qualities
              key={quality.name}
              {...quality}
            >
            </Qualities>
        })}
      </td>
      <td>
        <span key={props.user.profession._id}>{props.user.profession.name}</span>
      </td>
      <td>
        <span>{props.user.completedMeetings}</span>
      </td>
      <td>
        <span>{props.user.rate}</span>
      </td>
      <td>
        <Bookmark
          isBookmark = {props.user.bookmark}
          onClick={()=> props.onToggleBookMark(props.user._id)}
        />
      </td>
      <td>
        <button 
          type="button"
          className="btn btn-danger"
          onClick={()=>props.onDelete(props.user._id)}>
            delete
        </button>
      </td>
    </tr>
  )
 }

 export default User