import React,{ useEffect, useState,useContext } from 'react';
import { Context } from '../Context/savedCardContext';
import './admin.scss'

const Admin = () => {

    const {userData} = useContext(Context)

    return (
        <>
           <section className="Admin">
               <div className="container">
                   
                    {
                        userData?.map(user => {
                            return (
                                <>
                                <table className='table' width="100%" border="2">
                                    <tr>
                                        <td>
                                            userCity
                                        </td>
                                        <td>
                                            {user.userCity}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            userDom
                                        </td>
                                        <td>
                                            {user.userDom}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        userKvartira
                                        </td>
                                        <td>
                                            {user.userKvartira}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        userPhoneNumber
                                        </td>
                                        <td>
                                            {user.userPhoneNumber}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        userPodez
                                        </td>
                                        <td>
                                            {user.userPodez}
                                        </td>
                                    </tr>
                                </table>
                                </>
                            )
                        })
                    }
               
               </div>
           </section>
        </>
    );
}

export default Admin;
