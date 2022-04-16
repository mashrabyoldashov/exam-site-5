import React,{ useEffect, useState,useContext } from 'react';
import { Context } from '../Context/savedCardContext';
import './admin.scss'

const Admin = () => {

    const {userData, saveKorzinka} = useContext(Context)

    console.log(userData);

    return (
        <>
           <section className="Admin">
               <div className="container">
               <div class="accordion" id="accordionExample">
                    {
                        userData?.map((user, index) => {
                            return (
                                <>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id={"headingOne" + index}>
                                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne" + index} aria-expanded="true" aria-controls={"collapseOne" + index}>
                                            User #{index + 1}
                                          </button>
                                        </h2>
                                        <div id={"collapseOne" + index} class="accordion-collapse collapse show" aria-labelledby={"headingOne" + index} data-bs-parent={"#accordionExample" + index}>
                                          <div class="accordion-body">
                                          <table class="container-table">
                                          	<tbody>
                                          		<tr>
                                          			<td>UserCity</td>
                                          			<td>{user.userCity}</td>
                                          		</tr>
                                          		<tr>
                                          			<td>userLocation</td>
                                          			<td>{user.userLocation}</td>
                                          		</tr>
                                          		<tr>
                                          			<td>userDom</td>
                                          			<td>{user.userDom}</td>
                                          		</tr>
                                              <tr>
                                          			<td>userPodez</td>
                                          			<td>{user.userDom}</td>
                                          		</tr>
                                              <tr>
                                          			<td>userKvartira</td>
                                          			<td>{user.userKvartira}</td>
                                          		</tr>
                                              <tr>
                                          			<td>userPhoneNumber</td>
                                          			<td>{user.userPhoneNumber}</td>
                                          		</tr>
                                          	</tbody>
                                          </table>
                                          </div>
                                        </div>
                                    </div> 
                                </>
                            )
                        })
                    }
                    </div>
               </div>
           </section>
        </>
    );
}

export default Admin;
