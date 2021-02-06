import React from 'react';
import cs1 from './cs1.png';
import is1 from './is1.jpg';
import it1 from './it1.jpg';
import networks1 from './networks1.jpg';
import './component2.css';
const Departments = ()=>{
    return(
        <div className="dep text-center">
            <div className="container">
                <h3>أقسام الكلية</h3>
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="cont cs">
                            <a href="https://mawdoo3.com/%D8%AA%D8%AE%D8%B5%D8%B5_%D8%B9%D9%84%D9%88%D9%85_%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8"> <img src= {cs1} title="علوم حاسب" className="anim"/> </a> <br/>
                            <p></p>{/*علشان ميبوظش التنسيق معرفش اي ده.. */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="cont is">
                           <a href="https://mawdoo3.com/%D9%85%D8%A7_%D9%87%D9%88_%D8%AA%D8%AE%D8%B5%D8%B5_%D9%86%D8%B8%D9%85_%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA"> <img src={is1} title="تكنولوجيا المعلومات" className="anim"/> </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="cont it">
                            <a href="https://searchdatacenter.techtarget.com/definition/IT"> <img src={it1} title="نظم المعلومات" className="anim"/> </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="cont net">
                            <a href="https://blog.bradford-jo.com/network-engineering-materials/"> <img src={networks1} title="شبكات" className="anim"/> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Departments