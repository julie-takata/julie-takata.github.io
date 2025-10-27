type CardProps = {
  icon: string;
  alt: string;
  title: string;
  href: string;
  children: React.ReactNode;
};

export function Card({ icon, alt, title, href, children }: CardProps) {
return (
    <section className="card">
        <img src={icon} alt={alt} className="icon" />
        <h3><a target="_blank" href={href}>{title}</a></h3>
        <p>{children}</p>
    </section>
);
}