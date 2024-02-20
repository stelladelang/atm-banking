function AtmBank(){
const [amount, setAmount]=React.useState(0);
const [isDeposit, setIsDeposit]=React.useState(true);
const [balance, setBalance]=React.useState(0);

const handleSubmit = e => {
    e.preventDefault();
    const value = parseFloat(amount);
    if(isDeposit){
setBalance( (lastBalance) => lastBalance + value)
    } else{
        if(balance < amount){
alert("Not enough money in your balance.")
return;
        }
        setBalance( (lastBalance) => lastBalance - value)

    }

}







return(
    <div>
        <div><h1>ATM BANKING</h1></div>
        <form onSubmit={handleSubmit}>
            <div>
            <input type="radio"
             id="depositChoice" 
             name="deposit" 
             value="isDeposit"
             checked={isDeposit} 
                onChange={e => setIsDeposit(true)}/>
      <label htmFor="depositChoice">Deposit</label>

      <input type="radio"
             id="withdrawChoice" 
             name="withdraw" 
             value="isDeposit"
             checked={!isDeposit}
             onChange={e => setIsDeposit(false)}/> 
      <label htmFor="withdrawChoice">withdraw</label>
            </div>
            <div>
            <input type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeHolder="amount"/>
            <button type="submit">Action</button>
            </div>
            <div>
                <h2>Balance:${balance}</h2>
            </div>

        </form>

    </div>

);


};

ReactDOM.render(
    <AtmBank/>,
    document.getElementById('root')
)