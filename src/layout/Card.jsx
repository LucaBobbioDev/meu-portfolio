import './card.sass'

export default props =>
    <div className="card-container">
        <div className="card-content">
            {props.children}
        </div>
    </div>