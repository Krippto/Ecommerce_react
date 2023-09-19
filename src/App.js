// import AddProduct from "./components/AddProduct"
// import ShowProduct from "./components/ShowProduct"

// const App = () =>{
//     let array = []

//     const productHandler = (item) =>{
//         array.push(item)
//         // console.log(array)
//     }

//     return (
//         <>
//             <AddProduct onSetData={productHandler}/>
//             <ShowProduct items={array} />
//         </>
//     )
// }

// export default App
import { useState } from "react"
import AddProduct from "./components/AddProduct"
import ShowProduct from "./components/ShowProduct"

const App = () =>{
    let [data,setdata]=useState([])

    const productHandler = (item) =>{
      setdata((prevData)=>[...prevData,item])
        console.log(item)
    }
    // console.log(data);

    return (
        <>
            <AddProduct onSetData={productHandler}/>
            <ShowProduct items={data} />
        </>
    )
}

export default App