import "../../App.css";

function AboutMe(){
  const hobbyImgs = ["/hobby1.jpg", "/hobby2.jpg"];
  const skills = [
    "/tableau.png",
    "/r.png",
    "/excel.png",
    "/indesign.png",
    "/python.png",
    "/java.png",
    "/onepercent.png",
    "/ppt.png",
    "/figma.png"
  ];

  return (
   <section className="about-card yellow-card">
  <div className="glow top-left" aria-hidden="true"></div>
  <div className="glow bottom-right" aria-hidden="true"></div>

  <div className="ps-5 about-mask">
    <div className="about-inner-scroll">
      <div className="about-top">
        <div className="row gx-3 align-items-center">
          <div className="about-content col-12 col-lg-6 d-flex flex-column justify-content-center">
            <h3 className="display-name lh-1 mb-3">Julie Takata</h3>
            <div className="intro-text fs-4 fw-normal">
              <div className="fw-bold">UVA - McIntire School of Commerce</div>
              <div className="mb-3">B.S. in Commerce (Finance), Minor in CS</div>
            </div>
          </div>

          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end ms-5">
            <div className="photo-frame" tabIndex={0}>
              <img src="/profile.png" alt="Portrait of Julie Takata" className="img-fluid rounded-2 profile-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <div className="row gx-4 gy-5 align-items-start justify-content-center me-5">

          {/* HOBBIES = title spans images + text */}
          <div className="col-12 col-lg-8">
            <h2 className="section-title">Hobbies</h2>

            <div className="row gx-4 gy-4 align-items-start">
              {/* images */}
              <div className="col-12 col-md-6">
                <div className="d-grid gap-4">
                  {hobbyImgs.map(src => (
                    <img key={src} src={src} alt="Hobby" className="hobby-img" />
                  ))}
                </div>
              </div>

              {/* text (under the same Hobbies title) */}
              <div className="col-12 col-md-6">
                <p className="fs-5 mb-4">
                  In my free time I enjoy creating art, and specialize in mixed media and
                  digital art styles. I hope to submit my art to a gallery in the future.
                  In addition, I love cooking, and I have figure skated for over 8 years!
                </p>

                <p className="fs-5 mb-4">
                  I’m also passionate about investing, and I’ve expanded my experience
                  beyond my personal portfolio to include trading options.
                </p>

                <p className="fs-5 mb-0">
                  I have also achieved 70%+ portfolio growth over 7 months and perform my
                  own industry and company research.
                </p>
              </div>
            </div>
          </div>

          {/* SKILLS = separate column */}
          <div className="col-12 col-lg-4">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {skills.map(src => (
                <img key={src} src={src} alt="Skill" className="skill-icon" />
              ))}
            </div>
          </div>

        </div>

        <div style={{ height: 24 }} />
      </div>

    </div>
  </div>
</section>

  );
}

export default AboutMe;
