import React from 'react';
import './right-side.css';//right side file
import {Link,NavLink} from 'react-router-dom';
const RightSide = (props)=>{
    return(
        <div className="lists text-center">
            <div className="container col-5">
                <ul className="ul-lists">
                    <li className="active"> <Link to="/home">الرئيسية</Link> </li>
                    {/* stop it <li > <Link  to="/tabels" onClick={()=>{props.hideIt();props.addRemoveClass()}}>الجداول</Link></li>*/}
                    <li> <Link to="/group" onClick={props.addRemoveClass()}>المجموعات</Link> </li>
                    <li> <Link to="#" onClick={props.addRemoveClass()}>الاماكن</Link> </li>
                    <li> <Link  to="/pub-parts" onClick={()=>{props.hideIt();props.addRemoveClass()}}>ق.عام</Link> </li>
                    <li> <Link  to="/pri-parts" onClick={()=>{props.hideIt();props.addRemoveClass()}}>ق.خاص</Link> </li>
                    <li> <a href="https://www.facebook.com/groups/675288486298971/" onClick={props.addRemoveClass()}>ش.الطلاب</a> </li>
                    <li> <Link to="/teacher" onClick={props.addRemoveClass()}>المحاضرين</Link> </li>
                    <li> <Link to="#" onClick={props.addRemoveClass()}>معلومات</Link> </li>
                </ul>
            </div>
        </div>
    )
}
export default RightSide