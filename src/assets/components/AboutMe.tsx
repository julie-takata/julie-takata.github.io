
function AboutMe(){
    return(<>
     <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="display-name lh-1 mb-3">
                Julie<br />Takata
              </h1>
              <div className="intro-text fs-4 fw-normal">
                <div>B.S. in Commerce (Finance &amp; Technology)</div>
                <div>Minor in C.S.</div>
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
              <div className="photo-frame">
                <img
                  src="/profile.jpg"
                  alt="Portrait of Julie Takata"
                  className="img-fluid rounded-1"/>
              </div>
            </div>
    </>);
}
export default AboutMe;