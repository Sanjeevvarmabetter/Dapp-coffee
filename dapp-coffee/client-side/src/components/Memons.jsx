import { useState,useEffect } from "react";

const Memos=({state})=>{
  const [memos,setMemos]=useState([]);
  const {contract}=state;

  useEffect(()=>{
    const memosMessage = async()=>{
      const memos = await contract.getMemos();
      console.log(memos)
    }
    contract && memosMessage()
   },[contract])
   return <>
   {memos.map((memo)=>{
      return <div>
    <p>{memo.name}</p>
    <p>{memo.message}</p>
    <p>{new Date(memo.timestamp*1000).toLocaleDateString}</p>
    <p>{memo.from}</p>
      </div>

   })}

   </>
}
export default Memos;