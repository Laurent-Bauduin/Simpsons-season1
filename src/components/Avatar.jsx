function Avatar (props) {
    return (
        <figure>
            <img src={props.image} alt={props.firstName} />
            <figcaption>{props.firstName} {props.lastName}</figcaption>
        </figure>
    )
};

export default Avatar;