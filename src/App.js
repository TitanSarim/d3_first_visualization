import './App.css';
import { useState } from 'react';
import BarChart from './BarChart';
import SunShine from './4.2 sunshine.json'
import Select from 'react-select';


const options = [
  {value: 'JUL', label: 'July'},
  {value: 'JUN', label: 'June'},
  {value: 'AUG', label: 'August'}
]

function App() {

  const [month, setMonth] = useState(options[0])

  const data = SunShine.map(d => {
    return {city: d.CITY, SunShine: d[month?.value]}
  }).sort((a, b) => b.SunShine - a.SunShine).slice(0, 20)

  console.log("SunShine", data);

  return (
    <div className="App">
        <h1>Select Temp</h1>
        <Select defaultValue={month} onChange={setMonth} options={options}/>
        <div>
          <BarChart height={680} width={960} data={data}/>
        </div>
    </div>
  );
}

export default App;
