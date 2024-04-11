import React from 'react'

function Card2({ Dataprice }) {
    return (
        <div className='col-lg-3 '>
            <div class="card shadow-sm mt-">
                <img src={Dataprice.img}></img>
                <p class="card-text">{Dataprice.Name}</p>
                <p class="card-text">{ }</p>
                <p class="card-text">{ }</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                    </div>
                    <small class="text-body-secondary">${Dataprice.price}</small>
                </div>
            </div>
        </div>

    )
}

export default Card2
