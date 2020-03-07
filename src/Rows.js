import React from 'react'
import Square from './Square'

const Rows = (props) =>{
        return (
        <div className="board-row">
        {Array(3).fill(0).map((_,i) => (
            <Square
                key={i}
                value={props.squares[i]}
                onClick={() => props.onClick(i)} />
        ))}
        </div>
    );
      
}

export default Rows