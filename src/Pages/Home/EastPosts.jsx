import React from 'react'
import Post from '../../Components/Post/Post'

const EastPosts = () => {
    return (
        <div className='east-info'>
            <div className="new-post-container card">
                <img src='Assets/profile-pic.png' className='profile-pic' />
                <textarea placeholder='Post Something...' />
                <img src="Assets/Hompage-Login- Post Something - Image Icon 1.svg" />
            </div>

            <Post
                text="Peace On Earth A Wonderful Wish But No Way"
            />

            <Post
                text="One of the perks of working in an international company is sharing knowledge with your colleagues. "
                showImages={true}
            />
        </div>
    )
}

export default EastPosts