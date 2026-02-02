type CardProps = {
  icon: string;
  alt: string;
  title: string;
  href: string;
  children: React.ReactNode;
};

export function Card({ icon, alt, title, href, children }: CardProps) {
return (
    <section className="card text-black">
      <a className="text-black" style={{textDecoration: "none"}} target="_blank" href={href}>
        <img src={icon} alt={alt} className="icon" />
        <h3 className="text-black">{title}</h3>
        <p className="text-black">{children}</p>
    </a>
    </section>
);
}