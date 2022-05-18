import React,{ useContext, useRef, useState } from 'react';
import { Context } from '../../Context/savedCardContext';
import star from '../../assets/svg/star.svg'
import './admin.scss'

const Admin = () => {

    const {userData, saveKorzinka, smartphone} = useContext(Context)

    const [change, setChange] = useState("")

    const input = useRef()
    const h3 = useRef()

    const handleDelete = (id) => {
      fetch(`https://my-servesis.herokuapp.com/products/${id}`, {
        method: "DELETE"
      })
    }
    
    const handleEdit = (id) => {
      return console.log(!smartphone?.find((e) => e.id == id).like)
    }

    return (
        <>
           <section className="Admin">
               <div className="container">
                 
                   <div className="accordion" id="accordionExample">
                    {
                        userData?.map((user, index) => {
                            return (
                                <>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={"headingOne" + index}>
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne" + index} aria-expanded="true" aria-controls={"collapseOne" + index}>
                                            User #{index + 1}
                                          </button>
                                        </h2>
                                        <div id={"collapseOne" + index} className="accordion-collapse collapse show" aria-labelledby={"headingOne" + index} data-bs-parent={"#accordionExample" + index}>
                                          <div className="accordion-body">
                                          <table className="container-table">
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
                                              <tr>
                                                {
                                                  saveKorzinka?.map(e => {
                                                    return (
                                                      <>
                                                        <td>{e.title} ({e.money}ta)</td>
                                          		  	     <td>{e.price} UZS</td>
                                                      </>
                                                    )
                                                  })
                                                }
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
