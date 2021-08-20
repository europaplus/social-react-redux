import axios from 'axios';
import styled from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => props.setUsers(res.data.items));
    }
    return (
        <div>
            {
                props.users.map((item) => {
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
                                            <button onClick={() => props.unfollow(item.id)} className="btn btn-success">
                                                Unfollow
                                            </button> :
                                            <button onClick={() => props.follow(item.id)} className="btn btn-success">
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