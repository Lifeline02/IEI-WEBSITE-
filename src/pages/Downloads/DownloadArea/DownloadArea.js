import React from "react";

import {Link} from 'react-router-dom'
import {FaDownload} from 'react-icons/fa'

import data  from '../../../data/downloadData';



const DownloadList = ({item})=>{
  return (
    <div className="rc-post">
        <ul>
          <li className="d-flex mb-20">
            <div className="rc-thumb mr-15">
              <Link to={item.link}>
                <img src="/assets/download/download_cover.png" height="60" width="55" alt="cover download" />
              </Link>
            </div>
            <div className="rc-text">
              <h6>
                <Link to={item.link}>
                    {item.name}
                </Link>
              </h6>
              <div className="rc-meta">
                <div >
                   <a href={item.link} className="btn" style={{width:'100%'}}>
                     <FaDownload />
                     Download
                   </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>

  )
}

const DownloadData = ({type}) => {
  console.log(type);
    return data.map((item, i)=>{
       if(item.type === type){
          return (
    
              <div className="col-xl-6 col-lg-6 col-md-6" key={item.id}>
                  <DownloadList  item={item}/>
              </div>
          )
       }
       return null
    })
}




const DownloadArea = () => {
  return (
    <>
      <section className="faq__area pb-200 pt-75">
        <div className="container">
          <di>
            <h3>FINANCIAL STATEMENTS</h3>
          </di>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="faq__accordion p-relative">
                <div className="card">
                  <div className="card-header" id={`fund_report1`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#nc_1`}
                        aria-expanded="true"
                        aria-controls={`nc_1`}
                      >
                        FUND REPORTS
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`nc_1`}
                    className="collapse"
                    aria-labelledby={`fund_report1`}
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body accordion-body">
                        <div className="row">
                          {<DownloadData type="fund_report"/>}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="faq__accordion p-relative">
                    <div className="card">
                      <div className="card-header" id={`fund_report2`}>
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target={`#nc_2`}
                            aria-expanded="true"
                            aria-controls={`nc_2`}
                          >
                            RETIREE REPORTS
                          </button>
                        </h5>
                      </div>
                      <div
                        id={`nc_2`}
                        className="collapse"
                        aria-labelledby={`fund_report2`}
                        data-bs-parent="#accordion2"
                      >
                        <div className="card-body accordion-body">
                            <div className="row">
                              {<DownloadData type="retiree_reports"/>}
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="faq__accordion p-relative">
                  <div className="card">
                    <div className="card-header" id={`fund_report3`}>
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#nc_3`}
                          aria-expanded="true"
                          aria-controls={`nc_3`}
                        >
                          RSA REPORTS
                        </button>
                      </h5>
                    </div>
                    <div
                      id={`nc_3`}
                      className="collapse"
                      aria-labelledby={`fund_report3`}
                      data-bs-parent="#accordion3"
                    >
                      <div className="card-body accordion-body">
                          <div className="row">
                            {<DownloadData type="rsa_reports"/>}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="faq__accordion p-relative">
                  <div className="card">
                    <div className="card-header" id={`fund_report4`}>
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#nc_4`}
                          aria-expanded="true"
                          aria-controls={`nc_4`}
                        >
                          STATEMENTS
                        </button>
                      </h5>
                    </div>
                    <div
                      id={`nc_4`}
                      className="collapse"
                      aria-labelledby={`fund_report4`}
                      data-bs-parent="#accordion4"
                    >
                      <div className="card-body accordion-body">
                          <div className="row">
                            {<DownloadData type="statements"/>}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DownloadArea;

