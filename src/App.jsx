import Contact from "./components/Contact"
import { storeData } from "./components/Data"

import './App.css'
function App() {
    
  return (

    <>  
      <div className=""> 
      <h3 className="text-center font-poppins 
            pt-5 text-xl font-bold  shadow-xl">Exercise 4</h3>
      </div>
      <div className="container mx-auto 
            shadow-xl flex justify-center mt-2 
            max-w-3xl min-w-min">
              
              
        
            <div className="grid grid-cols-2 gap-12 
            pt-2">
            {storeData.map((item, e) => (
            <Contact 
              key={e}
              item={item}
            />
          ))}
            </div>
         
      </div>
    </>
  )
}

export default App
