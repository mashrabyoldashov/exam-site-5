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
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Update Card</button>

                    {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                <input type="text" className="form-control" id="recipient-name" />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">Message:</label>
                                <textarea className="form-control" id="message-text"></textarea>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="accordion" id="accordionExample">
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
                    </div> */}
               </div>
               <div className='container'>
               <div className='naushnik__cards'>
                    {
                        smartphone?.map(s => {
                            return (
                            <>
                                     <div key={s.id} className='naushnik__card'>    
                                         <button onClick={e => handleDelete(e.target.id)} className='naushnik__likeSvg-btn'>
                                              <i id={s.id} className="bi bi-trash naushnik__card__delete"></i>
                                         </button>

                                            <img width="219" height="237" className='naushnik__card__img' src={s.img_link} alt="" />

                                              <div className='naushnik__link'>
                                                 <div className="naushnik__card__body">
                                                      <h3 id={s.id} ref={h3} style={s.like == true ? {display: "none"} : {display: "block"}} className='naushnik__card__title'>
                                                         {s.title}
                                                      </h3>
                                                      <input ref={input} id={s.id} onChange={(e) => setChange(e.target.value)} defaultValue={s.title} style={s.like == true ? {display: "block"} : {display: "none"}} type="text" />
                                                      <button onClick={e => handleEdit(e.target.id)}>
                                                        <i id={`${s.id}`} className="bi bi-pencil mx-2"></i>
                                                      </button>
                                                    
                                                    <div className='naushnik__card__price'>
                                                         <p>{s.price} <span>UZS</span></p>
                                                         <del>{s.old_price} <span>UZS</span></del>
                                                    </div>
                                                 </div>
                                                 <div className="naushnik__reting">
                                                        <img width="23" height="21" src={star} alt="" />
                                                        <p>
                                                            {s.reting}
                                                        </p>
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
