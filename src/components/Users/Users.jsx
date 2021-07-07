import React from 'react'
import style from './Users.module.css'
import * as axios from 'axios'
import UserPhoto from './../../assets/images/user.png'

class Users extends React.Component {
      
    render() {
        let totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for(let i = 1; i <= totalPages; i++){
            pages.push(i)
        }


        return (
            <div>
                {pages.map(p => {
                    return <button className={this.props.currentPage === p && style.selected} 
                    onClick={() => this.onPageChanged(p) }>{p} </button> 
                })}
                
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

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            debugger
        } )
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            //this.props.setTotalUsersCount(response.data.totalCount)
        } )
    }
}


export default Users