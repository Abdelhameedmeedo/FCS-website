import React from 'react';
import './component4.css';
const Contact = ()=>{
    return(
        <footer className="contact-us text-center" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-6">
                        <div className="cont">
                            <h4>تواصل معنا عبر</h4>
                            <div className="row">
                                <div className="col-lg-4 col-4">
                                    <a href="https://www.facebook.com/groups/675288486298971/"><i className="fa fa-facebook-square" title="فيسبوك"></i></a>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <a href="#"><i className="fa fa-whatsapp" title="واتس اب"></i></a>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <a href="#"><i className="fa fa-phone" title="هاتف"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-6">
                        <div className="cont">
                            <h4>للملاحظات</h4>
                            <div className="row">
                                <div className="col-lg-10">
                                    <textarea placeholder="......اكتب ملاحظاتك هنا"></textarea>
                                </div>
                                
                                <div className="col-lg-10">
                                    <button className="btn btn-danger btn-block">send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Contact