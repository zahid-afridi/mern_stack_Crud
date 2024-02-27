import React, { useState } from 'react'

export default function UpdatedUser({ handleOnSubmit, value, handlechange }) {



    return (
        <>


            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update User</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={value.name} name='name' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Father</label>
                                    <input type="text" value={value.fathername} name='fathername' onChange={handlechange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" value={value.email} name='email' onChange={handlechange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Phone</label>

                                    <input type="text" value={value.phone} name='phone' onChange={handlechange} className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
