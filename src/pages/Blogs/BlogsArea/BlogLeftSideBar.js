import React from "react";
import { FaRegComment, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogLeftSideBar = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="blog__sidebar">
          <div className="sidebar__widget mb-50 ">
            <div className="sidebar__widget-content">
              <div className="search">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button type="button">
                    <i>
                      {" "}
                      <FaSearch />{" "}
                    </i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-75 ">
            <div className="sidebar__widget-title mb-50">
              <h4>Recent News</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="rc-post">
                <ul>
                  <li className="d-flex mb-20">
                    <div className="rc-thumb mr-15">
                      <Link to="/blogDetails">
                        <img src="assets/img/blog/rc/rc-1.jpg" alt="rc-post" />
                      </Link>
                    </div>
                    <div className="rc-text">
                      <h6>
                        <Link to="/blogDetails">
                          Best website traffice Booster with great tools.
                        </Link>
                      </h6>
                      <div className="rc-meta">
                        <span>Jan 01, 2022</span>{" "}
                      </div>
                    </div>
                  </li>
                  <li className="d-flex mb-20">
                    <div className="rc-thumb mr-15">
                      <Link to="/blogDetails">
                        <img src="assets/img/blog/rc/rc-2.jpg" alt="rc-post" />
                      </Link>
                    </div>
                    <div className="rc-text">
                      <h6>
                        <Link to="/blogDetails">
                          Google take latest step & Catch the black SEO
                        </Link>
                      </h6>
                      <div className="rc-meta">
                        <span>Jan 02, 2022</span>{" "}
                      </div>
                    </div>
                  </li>
                  <li className="d-flex mb-20">
                    <div className="rc-thumb mr-15">
                      <Link to="/blogDetails">
                        <img src="assets/img/blog/rc/rc-3.jpg" alt="rc-post" />
                      </Link>
                    </div>
                    <div className="rc-text">
                      <h6>
                        <Link to="/blogDetails">
                          How to become a best sale marketer in a year!
                        </Link>
                      </h6>
                      <div className="rc-meta">
                        <span>Jan 03, 2022</span>{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-75 ">
            <div className="sidebar__widget-title mb-50">
              <h4>Categories</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="cat-link">
                <ul>
                  <li>
                    <Link to="/blogDetails">penCom</Link>
                  </li>
                  <li>
                    <Link to="/blogDetails"> Politics</Link>
                  </li>
                  <li>
                    <Link to="/blogDetails">Entertainment</Link>
                  </li>
                  <li>
                    <Link to="/blogDetails">Sports</Link>
                  </li>
                  <li>
                    <Link to="/blogDetails">Oppurtunities</Link>
                  </li>
                  <li>
                    <Link to="/blogDetails">Finanace</Link>
                  </li>
                  <li>
                    <Link to="/blogDetails">Music</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-60 ">
            <div className="sidebar__widget-title mb-50">
              <h4>Recent Comments</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="rc__comments">
                <ul>
                  <li className="d-flex mb-25">
                    <div className="rc__comments-icon mr-30">
                      <i>
                        <FaRegComment style={{ marginTop: "-2px" }} />
                      </i>
                    </div>
                    <div className="rc__comments-content">
                      <h6>Justin Okenwa</h6>
                      <p>My lady mush hanky panky young delinquent.!</p>
                    </div>
                  </li>
                  <li className="d-flex mb-25">
                    <div className="rc__comments-icon mr-30">
                      <i>
                        <FaRegComment style={{ marginTop: "-2px" }} />
                      </i>
                    </div>
                    <div className="rc__comments-content">
                      <h6>Eric Adeosun</h6>
                      <p>My lady mush hanky panky young delinquent.!</p>
                    </div>
                  </li>
                  <li className="d-flex mb-25">
                    <div className="rc__comments-icon mr-30">
                      <i>
                        <FaRegComment style={{ marginTop: "-2px" }} />
                      </i>
                    </div>
                    <div className="rc__comments-content">
                      <h6>Musa Musa</h6>
                      <p>My lady mush hanky panky young delinquent.!</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-50 ">
            <div className="sidebar__widget-title mb-50">
              <h4>Popular Tags</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="tags">
                <Link to="/blogDetails">Business</Link>
                <Link to="/blogDetails">Politics</Link>
                <Link to="/blogDetails">Entertainment</Link>
                <Link to="/blogDetails">Sport</Link>
                <Link to="/blogDetails">Musics</Link>
                <Link to="/blogDetails">Oppurtunities</Link>
                <Link to="/blogDetails">Finance</Link>
                <Link to="/blogDetails">Politics</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLeftSideBar;
