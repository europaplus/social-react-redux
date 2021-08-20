import React from "react";
import axios from 'axios';
import styled from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setUsersTotalCount(res.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => this.props.setUsers(res.data.items));
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let index = 0; index < pagesCount; ++index) {
            pages.push(index + 1);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => this.onPageChanged(p)}
                                     className={this.props.currentPage === p && styled.selectedPage}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map((item) => {
                        return (
                            <div key={item.id}>
                                <span>
                                    <div>
                                       {
                                           item.photos.small ?
                                               <img src={item.photos.small} className={styled.avatar} alt='avatar'/> :
                                               <img src='./images/download.png' className={styled.avatar} alt='avatar'/>
                                       }
                                    </div>
                                    <div>
                                        {
                                            item.followed ?
                                                <button onClick={() => this.props.unfollow(item.id)}
                                                        className="btn btn-success">
                                                    Unfollow
                                                </button> :
                                                <button onClick={() => this.props.follow(item.id)}
                                                        className="btn btn-success">
                                                    Follow
                                                </button>
                                        }
                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>{item.name}</div>
                                        <div>{item.status}</div>
                                    </span>
                                    <span>
                                        <div>"item.location.city"</div>
                                        <div>"item.location.country"</div>
                                    </span>
                                </span>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
}

export default Users;