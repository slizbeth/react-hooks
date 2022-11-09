import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const incrementar = useCallback(
        ( num ) => {
            setValue( (value) => value + num );
        },
        [],
    );
    
    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
