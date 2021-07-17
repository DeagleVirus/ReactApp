import style from './Users.module.css'
import UserPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const Users = (props) => {

    let totalPages = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && style.selected} 
                onClick={() => props.onPageChanged(p) }>{p} </button> 
            })}
            
            {props.users.map(u => (
                <div key={u.id}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.large != null ? u.photos.large : UserPhoto} className={style.image}/>
                    </NavLink>
                    <div className={style.name}>
                        {u.name}
                    </div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    <div>
                        <span>{"u.location.city"} </span>
                        <span>{"u.location.country"}</span>
                    </div>
                    <div>
                        {u.status}
                    </div>
                </div>                
                )
            )}
        </div>
    )
    
}

export default Users