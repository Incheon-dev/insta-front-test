import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [check, setCheck] = useState('')

    useEffect(() => {
        axios.get('/api/v1/check')
        .then(response => setCheck(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {check}
        </div>
    );
}

export default App;