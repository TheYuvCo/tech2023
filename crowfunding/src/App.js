import './App.css';
import React, { useState, useEffect } from 'react';
import { loadContract } from './utils/load-contract';
import Web3 from 'web3';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateCampaign from './pages/CreateCampaign';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import detectEthereumProvider from '@metamask/detect-provider';

function App() {
  
   const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null
  })

  const [account,setAccount]=useState(null);
  const [campaigns,setCampaigns]=useState([]);
  const [balance, setBalance] = useState(null);
  const [Hallo,setHallo]=useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    deadline: '',
    goal: '',
    image: ''
  });


  useEffect(
    () => { //פונקציה שטוענת את המאזן של החוזה
      const loadBalance = async () => {
        const {contract,web3} = web3Api
        const balance = await web3.eth.getBalance(contract.address) //פונקציה שמאפשרת לי להגיע לחוזה  
        setBalance(web3.utils.fromWei(balance, "ether")) //המרה לאיתר 
      }
      web3Api.contract && loadBalance() // לא יריץ את הפנונקציה אם עדיין לא הגיע ערך
    },[web3Api])
  
    useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()
      const contract = await loadContract("Crowdfunding", provider)
     
      
      if(provider){
        setWeb3Api(
          {
            provider:provider,
            web3: new Web3(provider),
            contract: contract
          }
        )
      }
      else {
        console.log("Please install MetaMask")
      }
    }
    loadProvider()
  }, []);

   useEffect(
      ()=> {
        const getAccount = async () => {
          const accounts = await web3Api.web3.eth.getAccounts()
          setAccount(accounts[0]) //לוקח רק את החשבון הראשון
        }
        web3Api.web3 && getAccount()
     },[web3Api.web3])   

    
    const style = {
        form:{
          backgroundColor: "black"
        },
  
        text:{
          color: "white",
        },  
  
        h1:{
          "fontFamily": "Lucida Bright",
          color: "white",
        },
  
        label:{
            color: "white",
            "fontSize": "20px",
            "marginBottom": "5px",
            "fontWeight": "bold",
            "fontFamily": "Calibri",
        },
  
        input:{
          "backgroundColor": "white",
          "border": "none",
          "borderRadius": "5px",
          "fontSsize": "16px",
          "fontFamily": "Calibri",
          "padding": "10px",
          "marginBottom": "20px",
          "width": "30%",
        },
  
        textarea:{
          "backgroundColor": "white",
          "border": "none",
          "borderRadius": "5px",
          "fontSize": "16px",
          "fontFamily": "Calibri",
          "padding": "10px",
          "marginBottom": "20px",
          "width": "30%",
        },
  
        num:{
         "backgroundColor": "white",
         "border": "none",
         "borderRadius": "5px",
         "fontSize": "16px",
         "fontFamily": "Calibri",
         "padding": "10px",
         "marginBottom": "20px",
         "width": "21%",
        },
  
        date:{
          "backgroundColor": "white",
          "border": "none",
          "borderRadius": "5px",
          "fontSize": "16px",
          "fontFamily": "Calibri",
          "padding": "10px",
          "marginBottom": "20px",
          "width": "23.5%",
         },
  
         link:{
          "backgroundColor": "white",
          "border": "none",
          "borderRadius": "5px",
          "fontSize": "16px",
          "fontFamily": "Calibri",
          "padding": "10px",
          "marginBottom": "20px",
          "width": "18.5%",
         },
  
         button:{
          "backgroundColor": "#2C74B3",
          "border": "none",
          "borderRadius": "5px",
          "color": "white",
          "cursor": "pointer",
          "fontSize": "18px",
          "fontFamily": "Calibri",
          "padding": "10px 20px",
         }  
  
      };


          
        const handleFormFieldChange = (fieldName, e) => {
          setForm({ ...form, [fieldName]: e.target.value })
        }
        const sayHallo = async () => {
          const contract = web3Api
          setHallo( await contract.contract.sayHello())
          console.log(web3Api)
        }

        async function createCampaign(e) {
            e.preventDefault();
            const { contract, web3 } = web3Api;      
            const title = form.title;
            const description = form.description;
            const goal = web3.utils.toWei(form.goal, "ether");
            const deadline =  new Date(form.deadline).getTime();
            const image = form.image;
            console.log(form)
            await contract.createCampaign( title, description, goal, deadline, image, { from: account });
          }


          const LoadCampaigns = async () => {
            const contract = web3Api 
            setCampaigns( await contract.contract.getCampaigns())
            console.log(campaigns)
          }


  return (
    <div className="App">
      <Router>
    <Navbar />
    <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route path='/CreateCampaign' element={<CreateCampaign web3Api={web3Api}/>} />
    </Routes>
    </Router>
    <button
        onClick={async () =>{
          const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
          console.log(accounts)
        }}
      >Connect to MetaMask</button>  

    <div>Current Balance is {balance} Ether</div>
    <div>Check that your account is {account}</div>

 
    <div style={style.form}>
      <div className="NewCampaign">
        <br/>
        <h1 style={style.h1}>New Campaign</h1>
        
        <form onSubmit={createCampaign} style={style.form}>
        <label style={style.label}>Title: </label>
        <br/>
        <input type="text" style={style.input} value={form.title} onChange={(e) => handleFormFieldChange('title', e)}></input>
        <br/>
        <label style={style.label}>Description: </label>
        <br/>
        <textarea type="text" style={style.textarea} value={form.description} onChange={(e) => handleFormFieldChange('description', e)}/>
        <br/>
        <label style={style.label}>Goal (in ETH): </label>
        <input type="number" style={style.num} value={form.goal} onChange={(e) => handleFormFieldChange('goal', e)}></input>
        <br/>
        <label style={style.label}>End Date:</label>
        <input type="date" style={style.date} value={form.deadline} onChange={(e) => handleFormFieldChange('deadline', e)}></input>
        <br/>
        <label style={style.label}>Campaign image: </label>
        <input type="url"  style={style.link} placeholder='Place image URL of your campaign' value={form.image} onChange={(e) => handleFormFieldChange('image', e)}></input>
        <p/>
        <button disabled={!form.title || !form.description || !form.goal || !form.image}
                style={style.button} type="submit" >Create New Campaign</button>
                
      </form>
      </div>

      <h2 className="h1">Campaigns</h2>
      <button onClick={sayHallo}>Click to say hello</button>
      <div> hi  {Hallo}</div>
      <p><button onClick={LoadCampaigns}>Click to see campaigns</button></p>
      
      <div>
      {campaigns.map((campaign) => (
        <div >
          <p>Createor: {campaign.creators}</p>
          <h2>{campaign.titles}</h2>
          <p>{campaign.descriptions}</p>
          <p>Goal: {campaign.goals}</p>
          <p>Deadline: {campaign.deadlines}</p>
          <p>image: {campaign.images}</p>
          <p>Raised Amount: {campaign.raisedAmounts}</p>
          <p>Is Complete: {campaign.isComplete}</p>
        </div>
      ))}
    </div>
          
      <p/>
     </div>
    </div>
  );
}

export default App;