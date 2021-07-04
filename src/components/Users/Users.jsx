import React from 'react'
import style from './Users.module.css'
import * as axios from 'axios'
import UserPhoto from './../../assets/images/user.png'

class Users extends React.Component {
      
       /*  props.setUsers(
            [
                {id: 1, photoURL: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png', name: 'Oleksandr', followed: false, location: {city: 'Kyiv', country: 'Ukraine'}, status: 'hello'},
                {id: 2, photoURL: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png', name: 'Dima', followed: true, location: {city: 'New York', country: 'USA'}, status: 'hi'},
                {id: 3, photoURL: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png', name: 'Maksym', followed: false, location: {city: 'Warsaw', country: 'Poland'}, status: '???'},
            ]
        ) */


    render() {

        return (
            <div>
                {this.props.users.map(u => (
                    <div key={u.id}>
                        <img src={u.photos.large != null ? u.photos.large : UserPhoto} className={style.image}/>
                        <div className={style.name}>
                            {u.name}
                        </div>
                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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

    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        } )
    }
}


export default Users