import React from 'react';

const Grudge = ({grudge, onForgive})=>{
    const forgive = () => onForgive(grudge.id)

    return(
        <article className="Grudge">
            <h3>{grudge.person}</h3>
            <p style={{textDecoration:grudge.forgiven ? "line-through" : ""}}>{grudge.person}</p>
            <div className="Grudge-controls">
                <label className="Grudge-forgiven">
                    <input type="checkbox" checked={grudge.forgiven} onChange={forgive}/>{''}
                    Forgiven
                </label>
            </div>
        </article>
    )
};
export default Grudge;