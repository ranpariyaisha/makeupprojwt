import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function MakeupForm(){
    const [data, setData] = useState({})
    const navigate = useNavigate()

    return(
        <>
            <div className='m-4'>
                <label>enter date</label>
                <br></br>
                <input type='date' onChange={(e) => {
                setData({ ...data, date: e.target.value })
                }} />
            </div>
            
            {/* <div className='m-4'>
                <label>enter Amount</label>
                <br></br>
                <input type='Numbers' onChange={(e) => {
                setData({ ...data, amount: e.target.value })
                }} />
            </div> */}
            <div className='m-4'>
                <label>enter sale:</label>
                <br></br>
                <input type="number"
                placeholder="Enter sales"
                onChange={(e) => {
                setData({ ...data, sale: e.target.value })
                }} />
            </div>
            <div className='m-4'>
                <label>enter expense</label>
                <br></br>
                <input type='number' onChange={(e) => {
                setData({ ...data, expense: e.target.value })
                }} />

            <button className='btn btn-success m-2' type="submit"
                onClick={()=>{
                    fetch("http://localhost:5001/makeup/add",
                    {
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                        "Content-Type":"application/json"
                        }
                    })
                    .then((res)=>{
                        navigate("/makeup")
                    }
                    )
                }} >Submit</button>
            </div>                                    
        </>
    )
}   
export default MakeupForm;
// const TransactionForm = ({ addTransaction }) => {
//     const [sales, setSales] = useState('');
//     const [expense, setExpense] = useState('');

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (!sales || !expense) return;
        
//         addTransaction({
//             sales: parseFloat(sales),
//             expense: parseFloat(expense),
//             date: new Date().toLocaleDateString()
//         });

//         setSales('');
//         setExpense('');
//     }

//      (
//         <form returnonSubmit={onSubmit}>
//             <div>
//                 <label>Sales:</label>
//                 <input 
//                     type="text" 
//                     value={sales}
//                     onChange={(e) => setSales(e.target.value)} 
//                     placeholder="Enter sales" 
//                 />
//             </div>
//             <div>
//                 <label>Expense:</label>
//                 <input 
//                     type="text" 
//                     value={expense}
//                     onChange={(e) => setExpense(e.target.value)} 
//                     placeholder="Enter expense" 
//                 />
//             </div>
//             <button type="submit">Add Transaction</button>
//         </form>
//     );
// }


