import React from 'react'
import './user.css'
import {MdOutlinePermIdentity, 
    MdCalendarToday, 
    MdOutlinePhoneAndroid, 
    MdMailOutline, 
    MdOutlineLocationSearching, 
    MdPublish} from 'react-icons/md'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img 
                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg" 
                        alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <MdOutlinePermIdentity className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                        <MdCalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <MdOutlinePhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">+1 123 456 78</span>
                    </div>
                    <div className="userShowInfo">
                        <MdMailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <MdOutlineLocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" className="userUpdateInput" placeholder='annabeck99'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" className="userUpdateInput" placeholder='Anna Becker'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" className="userUpdateInput" placeholder='annabeck99@gmail.com'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" className="userUpdateInput" placeholder='+1 123 456 78'/>
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" className="userUpdateInput" placeholder='New York | USA'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg" 
                            alt="" className="userUpdateImg" />
                            <label htmlFor="file">
                                <MdPublish className='userUpdateIcon'/>
                            </label>
                            <input type='file' id='file' style={{display:'none'}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User