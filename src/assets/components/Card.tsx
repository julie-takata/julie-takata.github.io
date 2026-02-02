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
        <img src={icon} alt={alt} className="icon" />
        <h3 className="text-black"><a className="text-black" target="_blank" href={href}>{title}</a></h3>
        <p className="text-black">{children}</p>
    </section>
);
}