import React, {useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {


    const [todos, setTodos] = useState({
        main:
            {
                temp: ' ',
            }
    });
    const [tempC, setTemp] = useState();


    const getTodos = () => {
        console.log('todos is getting executed')
        // fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&APPID=23115c617732be5077c954f6e8f4d9e6')
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json)
        //         setTodos(json);
        //     })
let city = document.getElementById('city').value;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=23115c617732be5077c954f6e8f4d9e6`)
            .then(function (response) {
                // handle success
                console.log(response);
                setTodos(response.data);
                setTemp((response.data.main.temp-273.15).toFixed(2)+' °C');
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }



    return (
        <div className="App">
            <input id='city' placeholder='Enter the city'/>
            <button onClick={getTodos}>OK</button>
            <p>Temperature is: {tempC} </p>

            {/*{*/}
            {/*          todos.map(el => (*/}
            {/*              <div key={el.id}>{el.title}</div>*/}
            {/*              )*/}
            {/*        */}
            {/*         )*/}
            {/*}*/}
        </div>
    );
}

export default App;
