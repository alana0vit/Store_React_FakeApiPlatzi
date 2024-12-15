export default function Card(props) {
    return (<div key={props.produto.id} className="col-md-5 pokemon-card mb-4">
        <div className="card h-100 d-flex flex-column">
            <img src={props.produto.images} className="card-img-top img-fluid" alt='...' style={{width: '40%', alignSelf: 'center', padding: '15px', borderRadius: '50px' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.produto.title}</h5>
                <p className="card-text category">{props.produto.category.name}</p>
                <p className="card-text">R$ {props.produto.price}</p>
                <button type="button" class="btn btn-dark">Comprar</button>
            </div>
        </div>
    </div>)
}