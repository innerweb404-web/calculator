import React from 'react'
import  '../styles/buttonNumbers.css'
const ButtonNumbers = ({ addNumToInput, handleClear, handleSolve }) => {
    function handleBtn(num){
        addNumToInput(num)
    }

    return (
        <div className='btn-container'>
            <div className="input-btns">
                <div className="num-btns">
                    {['1','2','3','4','5','6','7','8','9','0','.','%'].map(num => (
                        <button className='num-btn' key={num} onClick={() => handleBtn(num)}>{num}</button>
                    ))}
                </div>

                <div className="symbols">
                    {['/','*', '+','-'].map(symbol =>(
                        <button className='num-btn black-btn' key={symbol} onClick={() => handleBtn(symbol)}>{symbol}</button>
                    ))}
                </div>
            </div>
            <div className="fun-btns">
                <button className='num-btn' onClick={()=> handleClear()}>Clear</button>
                <button className='num-btn black-btn' onClick={()=> handleSolve()}>=</button>
            </div>
        </div>
    )
}

export default ButtonNumbers
