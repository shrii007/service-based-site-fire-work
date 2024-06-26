import React, { } from 'react';
import '../index.css';

export default function Join() {

  
  return (<>
    
    <div className="mainContaner20 text-center fs- ">
      <div className="move ">
        <div className='text-light bg-primary text-center fw-bold fs-2 mb-5 p-3'>Join as Patner Forme </div>
        <form>
          <div className="form-row text-center">
            <div className="col- md- mb-4 p-2 text-dark text-center ">
              <label htmlFor="validationDefault01">First name -</label>
              <input type="text" className="mainContaner2" id="validationDefault01" placeholder="First name" required />
            </div>
            <div className="col- md- mb-4 p-3 text-black ">
              <label htmlFor="validationDefault02">Last name  -</label>
              <input type="text" className="mainContaner2" id="validationDefault02" placeholder="Last name" required />
            </div>
          </div>
          <div className="form-row text- text-center">
            <div className="col- md-0 mb-4 p-3">
              <label htmlFor="validationDefault03"> City Name  -</label>
              <input type="text " className="mainContaner2 " id="validationDefault03" placeholder="City" required />
            </div>
            <div className="col- md-0 mb-4 p-4 text- text-center">
              <label htmlFor="validationDefault04">State Name - </label>
              <input type="text" className="mainContaner2 " id="validationDefault04" placeholder="State" required />
            </div>
            <div className="col- md-0 mb-4 p-3 text- text-center">
              <label htmlFor="validationDefault04">Mobile no - </label>
              <input type="text" className="mainContaner2 text-dark " id="validationDefault04" placeholder="State" required />
            </div>
            
          </div>
          {/* <div className="form-group col-7 text-light text-center ">
            <div className="form-check col-7 text-center p-3">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
              <label className="form-check-label  col-7 " htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div> */}
          <button className="btn btn-primary col-7 md- text-center fw-bold fs- mb-4" type="submit">Submit form</button>
        </form>
        <br /><br />
        <div className='  text-center text- d-bottam justify-content-end'><h>I’m excited to invite you to connect with us and explore partnership opportunities with our new venture, Business. Your expertise in constrution filde would be a tremendous asset, and I believe we can achieve great success together.
          <br /> <br />

Please visit our website at [Www.falcon.com] to learn more about what we do. I’d love to discuss how we can collaborate. Let me know your availability for a meeting.</h></div>
      </div>
    </div>
    </>);
}
