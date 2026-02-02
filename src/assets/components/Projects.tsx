import "../../App.css";

function Projects() {
  const projects = [
    {
      name: "Quorix+",
      logo: "/quorix-logo.png",            // optional (can remove)
      images: ["/q3.png", "/q2.png", "/q1.png"],
      subheading: "AI-powered portfolio insights, reimagined",
      bullets: [
      "Quorix+ is a personal project built using React, Node, & Postgres focused on democratizing smarter investment decisions. We take in news, fundamentals, market data, and risk signals and translate them into simple, personalized insights you can actually act on. Our mission: make intelligent investing accessible to everyone. This personal project combines the important of finance with the power of technology. Although still in progress, the current beta version is published online."
      ],
      links: [
        { label: "Live Demo", href: "https://quorixx.netlify.app/" },
        { label: "GitHub", href: "https://github.com/jason-dong03/quorix/" }
      ]
    },

  ];

  return (
    <section className="projects-wrap">
      {projects.map((p, idx) => (
        <div className="project-card" key={p.name}>
          {/* title row */}
          <div className="project-title me-5">
            {p.logo && <img className="project-logo" src={p.logo} alt={`${p.name} logo`} />}
            <h2 className="project-name">{p.name}</h2>
          </div>

          <div className="project-body">
            <div className="project-media">
              <div id={`projCarousel-${idx}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {p.images.map((src, i) => (
                    <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={src}>
                      <img className="d-block w-100 project-img" src={src} alt={`${p.name} screenshot ${i + 1}`} />
                    </div>
                  ))}
                </div>

                {p.images.length > 1 && (
                  <>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#projCarousel-${idx}`}
                      data-bs-slide="prev"
                      aria-label="Previous image"
                    >
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#projCarousel-${idx}`}
                      data-bs-slide="next"
                      aria-label="Next image"
                    >
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT: text */}
            <div className="project-info">
              <h3 className="project-subheading">{p.subheading}</h3>
                {p.bullets.map((b) => (
                  <p key={b}>{b}</p>
                ))}

              <div className="project-links">
                {p.links.map((l) => (
                 <a
                    key={l.label}
                    className={`project-btn ${l.label === "Live Demo" ? "project-btn-live" : ""}`}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    >
                    {l.label}
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
