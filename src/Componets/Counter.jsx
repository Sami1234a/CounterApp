import { useState } from "react"
import "./Counter.css"


const Counter = () => {
    const [count, setcount] = useState(0)
    const [input , setInput] = useState("")
    const handleIncreement = () =>{
      setcount((prevstate)=>{
        return prevstate +1

      })
        
    }

    const handledecreement = () =>{
       

        if(count === 0){
          return 0
        }else{
            setcount((prevstate)=>{
                return prevstate - 1
      
                
        
              })
        }
          
      }

      const handleReset = () =>{
        setcount(0)
      }
      const handleSet = () =>{
        setcount(input)
        alert("value set")
      }

      const handleInputChange = (e) =>{
        setInput(e.target.value)

      }
  return (
    <div className='parent'>
        <div className="div">
            <div className="main">
                <h1>{count}</h1>
            </div>
            <div className="button">
                <button onClick={handleIncreement} className="Increement">+</button>
                <button onClick={handledecreement}>-</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSet}>Set</button>
            </div>

            <div className="set_defaultValue">
                <input type="text" value={input} onChange={handleInputChange} placeholder="Enter the value" />
            </div>
        </div>
    </div>
  )
}

export default Counter