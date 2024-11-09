import star from "../assets/star.svg"

export default function Carousel({image, name, desc, testimonial}: { image: string, name: string, desc: string, testimonial: string }) {
    return (
        <div className="carousel-card">
            <img src={image} width={128} height={128} />
            <span className="tertimony">
                <p>
                    {testimonial}
                </p>
            </span>
            <span className="rating">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
            </span>
            <span className="names">
                <p className="bold">{name}</p>
                <p>{desc}</p>
            </span>
        </div>
    )
}