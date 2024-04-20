import { useState } from 'react'
import './App.css'
import './index.css'
// function createButton(props) {
//   props.colorArr.forEach(clr => {
//     const div = document.createElement('div');
//     const btn = document.createElement('button');
//     btn.innerHTML = clr;
//     btn.style.backgroundColor = clr;

//     btn.addEventListener('click', () => changeColor(clr));

//     document.querySelector('div').appendChild(btn);
//   })

// }

function App() {
  let [color, setColor] = useState('black');
  const colors = ['red', 'blue', 'yellow', 'grey', 'green', 'orange'];

  // function changeColor(colorCh) {
  //   color = colorCh;
  //   setColor(color);
  // }
  // let i = -


  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-800"
      style={{ backgroundColor: color }} >
      <div className='mx-2 py-1 h-fit flex-col w-fit justify-around bg-transparent'>

        {
          colors.map((clr, i) => (
            <div className='my-2 w-fit h-fit rounded-lg shadow-black shadow-lg '>
              <button key={i}
                onClick={() => setColor(clr)}>
                {clr}
              </button>
            </div>

          ))}
      </div>
    </div >
  )
}

export default App
