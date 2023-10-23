import { ethers } from "hardhat";

const Buy=({state})=>{

    const buyCoffee = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const amount = {value:ethers.utils.parseEther("0.001")}
        const transaction = await contract.buyCoffee(name,message,amount)
        await transaction.wait();

        console.log("Transaction successful")
    }

    return <>
    <from onSubmit={buyCoffee}>
        <input id="name">
            <input id="messsage">
                <button>Pay</button>
            </input>
        </input>
    </from>
    
    </>

}
export default Buy;