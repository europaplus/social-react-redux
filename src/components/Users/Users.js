import styled from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let index = 0; index < pagesCount; ++index) {
        pages.push(index + 1);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => props.onPageChanged(p)}
                                 className={props.currentPage === p ? styled.selectedPage : undefined}>{p}</span>
                })}
            </div>
            {
                props.users.map((item) => {
                    return (
                        <div key={item.id}>
                                <span>
                                    <div>
                                        <NavLink to={`/profile/${item.id}`}>
                                            <img
                                                src={item.photos.small != null ?
                                                    item.photos.small :
                                                    './images/download.png'}
                                                className={styled.avatar} alt='avatar'/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {
                                            item.followed ?
                                                <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                                    props.toggleIsFollowInProgress(true, item.id);
                                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "54bd35ae-e7ef-4521-a295-8af92c38dbfd",
                                                        }
                                                    })
                                                        .then(res => {
                                                            if (res.data.resultcode === 0) {
                                                                props.unfollow(item.id);
                                                                props.toggleIsFollowInProgress(false, item.id);
                                                            }
                                                        })
                                                }}
                                                        className="btn btn-success">
                                                    Unfollow
                                                </button> :
                                                <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                                                    props.toggleIsFollowInProgress(true, item.id);
                                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${item.id}`, {}, {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY": "54bd35ae-e7ef-4521-a295-8af92c38dbfd",
                                                        }
                                                    })
                                                        .then(res => {
                                                            if (res.data.resultcode === 0) {
                                                                props.follow(item.id);
                                                                props.toggleIsFollowInProgress(false, item.id);
                                                            }
                                                        });
                                                }}
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

export default Users;