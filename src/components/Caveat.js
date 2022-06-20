import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

import { withSwal } from 'react-sweetalert2';

function Caveat({ swal }, props) {
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);


    console.log("New Paths", props);

    useEffect(() => {


        if(pathname === "/" || pathname === "/home"){
            swal.fire({
                title: `<p style="color:red">CAVEAT NOTICE!!!</p>`,
                html: `<div>
                        <p>Processing withdrawal applications on your Retirement Savings Account (RSA) is FREE. IEI-Anchor Pensions will not ask for gratification in any form, either monetary or material before or after processing your withdrawal application.</p>
                        <p style="margin:80px 0 30px 0;"><a style="color:white; background-color:#000; padding:10px; href="https://tinyurl.com/y3q9svrs">Take a survey</a></P>
                        <div>`,
                showCancelButton: false,
                showConfirmButton: false,
                didOpen: () => {
                    // run when swal is opened...
                },
                didClose: () => {
                    // run when swal is closed...
                }
            }).then(result => {
                // when confirmed and promise resolved...
            }).catch(error => {
                // when promise rejected...
            });
        }
    }, [pathname]);

    return null;
}


export default withSwal(Caveat);