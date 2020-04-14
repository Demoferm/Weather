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
                setTemp((response.data.main.temp - 273.15).toFixed(2) + ' °C');
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
            <div className="input-group mb-3">
                <input type="text" id='city' className="form-control" placeholder="Enter the city"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                            onClick={getTodos}>OK
                    </button>
                </div>
            </div>
            {/*<input id='city2' placeholder='Enter the city'/>*/}
            {/*<button className="btn btn-success" onClick={getTodos}>OK</button>*/}
            <p className="h4">Temperature is: {tempC}</p>
            {/*<p>Temperature is: {tempC} </p>*/}

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
