import React, { useState } from 'react'
import ButtonNumbers from './ButtonNumbers'
import '../styles/inputBar.css'

const InputBar = () => {
    const [number, setNumber] = useState('')

    function addNumToInput(num){
        setNumber(prev => prev + num)
    }

    function calculateExpression(input) {
        try {
            if (!/^[0-9+\-*/.() ]+$/.test(input)) return 'Error';
            const operators = input.match(/[+\-*/]/g) || [];
            const numbers = input.split(/[+\-*/]/).map(Number);
            if (numbers.length !== operators.length + 1) return 'Error';
            let result = numbers[0];
            for (let i = 0; i < operators.length; i++) {
                switch (operators[i]) {
                    case '+': result += numbers[i + 1]; break;
                    case '-': result -= numbers[i + 1]; break;
                    case '*': result *= numbers[i + 1]; break;
                    case '/': result = numbers[i + 1] === 0 ? 'Error' : result / numbers[i + 1]; break;
                    default: return '';
                }
            }
            return result;
        } catch {
            return 'Error';
        }
    }

    const handleSolve = () => {
        
        const result = calculateExpression(number);
        setNumber(result.toString());
    };

    const handleClear = () => {
        setNumber('');
    };

    return (
        <div>
            <input 
                className='input-bar'
                type="text" 
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <ButtonNumbers addNumToInput={addNumToInput}
                            handleClear={handleClear}
                            handleSolve={handleSolve}
                            />
        </div>
    )
    }

    
    
export default InputBar
