import React from "react"
import {Wallet,Plus,Home, ArrowUpRight,ArrowDownLeft,DollarSign,Search,Bell, Settings,Target, CheckCircle,TrendingUp, LogOut, } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faBitcoinSign,  } from '@fortawesome/free-solid-svg-icons';
import { library,  } from '@fortawesome/fontawesome-svg-core';
import { FaPaypal, FaBitcoin,FaCreditCard } from 'react-icons/fa';
import "./Purse.css"
import History from './History'
import { useNavigate } from 'react-router-dom';
const Purse = () => {
    
    const navigate = useNavigate();
    const history = History[0];
     const history1 = History[1];
      const history2 = History[2];
       const history3 = History[3];
        const history4 = History[4];
    

    return(
        <>
        <body>
             <div>
            <div className="USerFeed">
               <div>
                <div>
                    {/* icon */}
                </div>
                <div>
                    <h3>Welcome back Elon 👋</h3>
                    <p>Save smatter, reach your goals faster</p>
                </div>
               </div>
               <div className="IconSet">
                {/* <div>
                    <div>
                        <Search size={24}/>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <Bell size={24}/>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <Settings size={24}/>
                    </div> */}
                    
                {/* </div> */}
                <div style={{display:"flex  ", alignItems:"center", gap:"1px", position:"relative", top:"-5px",}} className="LogoutBtn" onClick={() => navigate('/NivoraHomePage')}>
                    <button style={{border:"none", background:"none", color:'white'}}>Logout </button>
                    <div style={{position:"relative", top:'4px', left:"10px"}}><LogOut size={18}/></div>
                </div>
               </div>
            </div>

            <div className="AtmCArd">
                <div style={{padding:'15px 10px', color:'white'}}>
                    <div style={{display:"flex", marginBottom:"20px"}}>
                        <div className="Walet">
                    <Wallet size={30}/>
                </div>
                <div>
                    <h3>Main Wallet</h3>
                    <p>Avalaible Balance</p>
                </div>
               
                    </div>
                    <div>
                        <h3 style={{fontSize:"30px", fontWeight:"300"}}>$1500.00</h3>
                
                {/* <p>last Updated ..</p> */}
                </div>
                
               </div>
                
                <div className="MainCArd" style={{padding:'20px 10px', display:'flex', justifyContent:'space-around'}}>
                    <div className="" style={{backgroundColor:"transparent", borderRadius:"10px",border:"2px solid gray"}} >
                        
                        <button style={{background:"none",color:"white" }} > <ArrowDownLeft size={16} style={{position:"relative", top:"10px"}}/>Add Money</button>
                        </div>
                    <div className="" style={{backgroundColor:"white",borderRadius:"10px"}} >
                       
                        <button> <ArrowUpRight size={16} style={{position:"relative", top:"10px",}}/> Transfer</button>
                    </div>
                </div>

            </div>
            <div className="BodyQuickAction" style={{margin:"50px"}}>
                <h3>Payout</h3>
                <div className="QuickAction">
                    <div>
                        <button style={{background:"blue", color:"white"}}>
                            {/* <FaBank size={32} /> */}
                            <FontAwesomeIcon icon={faBuildingColumns} size={32} style={{fontSize:'30px'}}/>
                        </button>
                        {/* <h4>Transfer</h4> */}
                    </div>
                    <div>
                        <button style={{background:"green"}}>
                            <FaBitcoin size={32} />
                            {/* <FontAwesomeIcon icon={faBitcoinSign} size={50} /> */}
                            {/* <faBitcoinSign size={24}/> */}
                        </button>
                        {/* <h4>Add Money</h4> */}
                    </div>
                    <div >
                        <button style={{background:"purple"}}>
                            <FaPaypal size={32} />
                        </button>
                        {/* <h4> New Purse</h4> */}
                    </div>

                    <div >
                        <button style={{background:"brown"}}>
                            <FaCreditCard size={32} />
                        </button>
                        {/* <h4> New Purse</h4> */}
                    </div>
                    
                </div>
            </div>

            <div className="Cheivement">
            <div className="CheivementHead">
                <div>
                    <h3>Total Invested</h3>
                    <p>$500.00</p>
                </div>
                <div style={{backgroundColor:"#8fb5da40", padding:"10px", borderRadius:"10px"}}>
                    <Wallet size={30} style={{color:"blue"}}/>
                </div>
            </div>

            <div className="CheivementHead">
                <div>
                <h3>Target </h3>
                <p>$3000.00</p>

                </div>
                <div>
                    <Target size={30} style={{color:"purple",background:"#da8fcb3e",padding:"10px", borderRadius:"10px"}}/>
                </div>

            </div>
            <div className="CheivementHead">
                <div>
                    <h3>Goals Completed</h3>
                    <p>0/4</p>
                </div>
                <div>
                    <CheckCircle size={30} style={{color:"green",background:"#8fdab62a",padding:"10px", borderRadius:"10px"}}/>
                </div>
            </div>
            <div className="CheivementHead">
                <div>
                    <h3>Average Progress</h3>
                    <p>0.00</p>
                </div>
                <div>
                    <TrendingUp size={30} style={{color:"orange",background:"#ecc2882a",padding:"10px", borderRadius:"10px"}}/>
                </div>
            </div>
            </div>

            <div className="History">
                <div className="HistoryLord">
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p>Recent Actiivty</p>
                        <p>View All</p>
                    </div>
                    <div>
                        <div className="HistoryCard">
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div className="TheIcom">{history.icon}</div>
                                <div>
                                    <h4>{history.title}</h4>
                                    <p>{history.date}</p>
                                </div>
                            </div>
                            <div>
                                <h4>{history.amount}</h4>
                                <p>{history.time}</p>
                            </div>
                        </div>

                         <div className="HistoryCard">
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div className="TheIcom">{history1.icon}</div>
                                <div>
                                    <h4>{history1.title}</h4>
                                    <p>{history1.date}</p>
                                </div>
                            </div>
                            <div>
                                <h4>{history1.amount}</h4>
                                <p>{history1.time}</p>
                            </div>
                        </div>
                        
                         <div className="HistoryCard">
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div className="TheIcom">{history2.icon}</div>
                                <div>
                                    <h4>{history2.title}</h4>
                                    <p>{history2.date}</p>
                                </div>
                            </div>
                            <div>
                                <h4>{history2.amount}</h4>
                                <p>{history2.time}</p>
                            </div>
                        </div>
                        <div className="HistoryCard">
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div className="TheIcom">{history3.icon}</div>
                                <div>
                                    <h4>{history3.title}</h4>
                                    <p>{history3.date}</p>
                                </div>
                            </div>
                            <div>
                                <h4>{history3.amount}</h4>
                                <p>{history3.time}</p>
                            </div>
                        </div>
                        
                        <div className="HistoryCard">
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div className="TheIcom">{history4.icon}</div>
                                <div>
                                    <h4>{history4.title}</h4>
                                    <p>{history4.date}</p>
                                </div>
                            </div>
                            <div>
                                <h4>{history4.amount}</h4>
                                <p >{history4.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
       
        </>
    )
}
export default Purse