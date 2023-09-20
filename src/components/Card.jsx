

export const Card = (props) => {
    const { img, name, address } = props.details;
    return (
        <div className="card bg-red-600 rounded-md shadow-md hover:bg-red-500 hover:text-white cursor-pointer">
            <img src={img} alt="mypic" className="card__img" />
            <div className="card__info">
                <span className="card__name">{name} </span>
                <span className="card__address">{address}</span>
            </div>
        </div>
    )
}
