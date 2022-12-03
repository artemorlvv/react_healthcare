import React, { useState, useEffect } from 'react';

import './leftbar.css';
import logo from '../../images/logo_big.svg';
import logo_small from '../../images/logo_small.svg';
import dash from '../../images/dashboard.svg';
import appoint from '../../images/appoint.svg';
import doctors from '../../images/doctors.svg';
import depart from '../../images/depart.svg';
import patients from '../../images/patients.svg';
import pay from '../../images/pay.svg';
import qa from '../../images/qa.svg';


function Leftbar() {

    const [turner, setTurner] = useState(false);

    useEffect(() => {
        if (turner == true) {
            document.getElementById("leftbar").classList.add("turner_leftbar");
            document.getElementById("logo").style.margin = "24px auto 30px";
            document.getElementById("med").classList.add("turner_text");
            const arr = document.querySelectorAll("[id = leftbar_text]");
            arr.forEach(element => {
                element.classList.add("turner_text");
            });
        }
        else {
            document.getElementById("leftbar").classList.remove("turner_leftbar");
            document.getElementById("logo").style.margin = "24px 0 30px 24px";
            document.getElementById("med").classList.remove("turner_text");
            const arr = document.querySelectorAll("[id = leftbar_text]");
            arr.forEach(element => {
                element.classList.remove("turner_text");
            });
        }
    });

    return (
        <div id="leftbar">
            <div id="leftbar_wrapper">
                <a href="#" onClick={() => setTurner(!turner)}>
                    <img src={turner ? logo_small : logo} id= "logo" alt="" />
                </a>
                <span id="med">Medicine</span>
                <ul id="leftbar_list">
                    <li id="leftbar_list-item">
                        <img src={dash} id="leftbar_img" alt="" />
                        <p id="leftbar_text">Dashboard</p>
                    </li>
                    <li id="leftbar_list-item">
                        <img src={appoint} id="leftbar_img" alt="" />
                        <p id="leftbar_text">Appointments</p>
                    </li>
                    <li id="leftbar_list-item">
                        <img src={doctors} id="leftbar_img" alt="" />
                        <p id="leftbar_text">Doctors</p>
                    </li>
                    <li id="leftbar_list-item">
                        <img src={depart} id="leftbar_img" alt="" />
                        <p id="leftbar_text">Departments</p>
                    </li>
                    <li id="leftbar_list-item">
                        <img src={patients} id="leftbar_img" alt="" />
                        <p id="leftbar_text">Patients</p>
                    </li>
                    <li id="leftbar_list-item">
                        <img src={pay} id="leftbar_img" alt="" />
                        <p id="leftbar_text">Payments</p>
                    </li>
                </ul>
                <p id="leftbar_qa">
                    <img src={qa} id="leftbar_img"/>
                    <span id="leftbar_text">Help</span>
                </p>
            </div>
        </div>
    );
}

export default Leftbar;