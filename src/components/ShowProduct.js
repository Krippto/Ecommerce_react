// import { useState } from "react"

// const ShowProduct = (props) =>{
//     console.log(props.items)
//     // let sum = 0
//     const [sum, setSum] = useState(0)
//     // [arr, setArr] = useState(props.items)
    
//     return (
//         <>
//             <h1>Products</h1>
//             <ul>{props.items.map(item =>{
//                 setSum(sum+Number(item.price))
//                 return <li key={item.propId}>{item.prod} - {item.price}</li>
//             })}</ul>
//             <h3>Total value worth of products: Rs {sum}</h3>
//         </>
//     )
// }

// export default ShowProduct

import { useEffect, useState } from "react"

const ShowProduct = (props) =>{
    // console.log(props.items)
    // let sum = 0
    const [sum, setSum] = useState(0)
    // [arr, setArr] = useState(props.items)
    useEffect(()=>{
      let totalSum = 0;
        props.items.forEach(item => {
            totalSum += Number(item.price);
        });
        setSum(totalSum);
    },[props.items])
    
    return (
        <>
            <h1>Products</h1>
            <ul>{props.items.map(item =>{
                // setSum(sum+Number(item.price))
                return <li key={item.propId}>{item.prod} - {item.price}</li>
            })}</ul>
            <h3>Total value worth of products: Rs {sum}</h3>
        </>
    )
}

export default ShowProduct