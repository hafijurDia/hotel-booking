import React from 'react';
import { Container } from 'react-bootstrap';



const Booking = () => {
    return (
        <>
            <Container>
                <div className='w-50 mx-auto shadow p-3 m-5 bg-body-tertiary rounded'>
                    <h4 className='text-center py-2 '>Reservation</h4>
                    <form>
                        <div class="row">
                            <div class="col">
                            <label htmlFor="firstname" class="form-label">First Name</label>
                                <input type="text" name='firstname' class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col">
                            <label htmlFor="lastname" class="form-label">Last Name</label>
                                <input type="text" name='lastname' class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>

                        </div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label htmlFor="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label htmlFor="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label htmlFor="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="col-12">
                                <label htmlFor="inputAddress2" class="form-label">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div class="col-md-6">
                                <label htmlFor="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-md-4">
                                <label htmlFor="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <label htmlFor="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>

                            <div class=" form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Comments</label>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Reserve Now</button>
                            </div>
                        </div>


                    </form>
                </div>

            </Container>
        </>
    );
};




export default Booking;
