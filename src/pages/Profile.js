import React from 'react';
import profileImage from "./../assets/images/frame.png"

const Profile = () => {
    return (
        <section className='w-screen bg-dark'>
            <div className="container px-5 mx-auto text-white pt-40">
                <div className="profile-top">
                    <img src={profileImage} className="w-[100px] h-[100px] rounded-full" alt="Profile Image" />
                    <h1 className='text-3xl mt-5 mb-4'>Fizz Hasif</h1>
                    <p className=''>Member since Octobor 2022</p>
                </div>
                <div className="profile-middle">
                    <h4>Info</h4>
                </div>
            </div>
        </section>
    );
};

export default Profile;