
//import React, { useState, useEffect } from 'react';

  
const CreateCampaign = (props) => {
  /*    
    const web3Api = props;
    const [Hallo,setHallo]=useState(null);
  
    console.log(web3Api)
    
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
    
      const [campaigns, setCampaigns] = useState([{
          "title": 'A',
          "description": "Leanne Graham FNGNG",
          "goal": '40',
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/640px-Square_-_black_simple.svg.png",
          },
          {
            "title": 'B',
            "description": "ERTGFD",
            "goal": '55',
            "image": "https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png",
            },
        ]);
       
  
        const [form, setForm] = useState({
          title: '',
          description: '',
          deadline: '',
          goal: '',
          image: ''
        });
          
        const handleFormFieldChange = (fieldName, e) => {
          setForm({ ...form, [fieldName]: e.target.value })
        }
        const sayHallo = async () => {
          const contract = web3Api
          setHallo( await contract.contract.sayHello())
          console.log(web3Api)
        }
  
     
        //console.log(web3Api)
        async function handleCreateCampaign(e) {
          e.preventDefault();
          const contract = web3Api
          await contract.contract.createCampaign(form.title,form.description,form.goal,form.deadline,form.image)
          let addData = {
            title: form.title, 
            description: form.description, 
            goal: form.goal,
            deadline: form.deadline, 
            image: form.image}
            console.log(form)
  
          setCampaigns([...campaigns, addData])
          
          }
  
      
    
    return (
      <div style={style.form}>
        <div className="NewCampaign">
          <br/>
          <h1 style={style.h1}>New Campaign</h1>
          
          <form onSubmit={handleCreateCampaign} style={style.form}>
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
                  style={style.button} type="submit">Create New Campaign</button>
        </form>
        </div>
  
        <h2 style={style.h1}>Campaigns</h2>
        <button onClick={sayHallo}>dd</button>
            
            <div> hi  {Hallo}</div>
        <p/>
       
          <table align="center">
            <tr>
              <th style={style.text}>Title</th>
              <th style={style.text}>Description</th>
              <th style={style.text}>Goal (In ETH)</th>
              <th style={style.text}>Image</th>
            </tr>
  
            {campaigns.map((campaign) => (
              <tr>
                <td style={style.text}>{campaign.title}</td>
                <td style={style.text}>{campaign.description}</td>
                <td style={style.text}>{campaign.goal}</td>
                <td style={style.text}>{campaign.image}</td>
              </tr>
            ))}
           
          </table>
      </div>
    );
  };
  */ }
  export default CreateCampaign;