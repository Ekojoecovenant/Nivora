import React from 'react'
import './NivoraHomePage.css'
import London from './Images/London.jpg'
import Logo from './Images/Logo.png'
import Team from './Images/Team.jpg'
import { TrendingUp,PiggyBank,Building,Shield,Calculator,CreditCard,Globe,TrendingUpIcon,Star,Quote,Users,Trophy,ShieldIcon } from "lucide-react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaStar, FaBitcoin,FaCreditCard,FaFacebook,FaTwitter,FaLinkedin, FaInstagram } from 'react-icons/fa';
const NivoraHomePage = () => {
    return (
        <div className='bodyddd'>
            <div className='Navboss'>
                <nav >
                    <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                        <img src={Logo} alt="" style={{width:'80px'}} />
                        <h3>Nivora Financial Group</h3>
                    </div>
                    <div>
                        <button>Service</button>
                        <button>About</button>
                        <button>Investments</button>
                        <button>Contact</button>
                    </div>
                    <div>
                        <button>Sign In</button>
                        <button className='startednsvbtn'>Get Started</button>
                    </div>
                </nav>
            </div>

            <div className='maindivv'>
                <div>
                    <h3>Your Future, Our Expertise</h3>
                    <p>Nivora Financial Group empowers your financial journey with cutting-edge investment solutions, personlized banking services, and expert guidance to help you achieve your financial goals.</p>

                    <div className='threee'>
                        <div><ShieldIcon style={{color:"green",position:"relative", top:"10px"}}/>FDIC Insred</div>
                        <div><TrendingUp style={{color:"blue",position:"relative", top:"10px"}}/> Award-Winning Platform</div>
                         <div><Users style={{color:"purple",position:"relative", top:"10px"}}/>500k+ Satisfied Clients</div>
                    </div>

                    <div className='buttongroup'>
                        <button className='btnfroupsss'>Start Investing Today </button>
                        <button>Schedule Consultation</button>
                    </div>

                    {/* <div className='stats' style={{display:"flex", width:"300px", marginTop:"40px"}}>
                        <div>
                            <h5>$2.5B+</h5>
                            <p style={{fontSize:"10px"}}>Assests Under Management</p>
                        </div>
                        <div>
                            <h5>15+</h5>
                            <p style={{fontSize:"10px"}}>Years of Excellence</p>
                        </div>
                        <div>
                            <h5>98%</h5>
                            <p style={{fontSize:"10px"}}>Client Satisfaction</p>
                        </div>
                    </div> */}
                </div>

                <div className='imggg'>
                    <img src={London} alt="" />
                </div>
            </div>

            <div>

            <div className='servicee'>
                <h3>Comprehensive Financial Services</h3>
                <p className='minpservic'>From invstment management to personal banking, we offer a full suite of financial services designed to help you build, protect, and grow your wealth.</p>
            </div>

            <div className='allservices'>
                <div className='servicesdivv'>
                    <div className='ServiceIcon'>
                        <TrendingUp/>
                    </div>
                    <div>
                        <h3>Investment Management</h3>
                        <p>Proffesional portfolio management with personalized investment strategies tailord to your risk tolerance and financial goals</p>
                    </div>
                    <div>
                        <ul>
                            <li>Diversified Portfolios</li>
                            <li>Risk Assesment </li>
                            <li> Regular Rebalancing</li>
                           
                        </ul>
                    </div>
                    <div>
                        <button>Learn More</button>
                        {/* <div>icon</div> */}
                    </div>
                </div>

                 <div className='servicesdivv'>
                    <div className='ServiceIcon'>
                       <PiggyBank/>
                    </div>
                    <div>
                        <h3>Personal Banking</h3>
                        <p>Comprehensive banking solutions including saving account, checking account, and competitive interest rates </p>
                    </div>
                    <div>
                        <ul>
                            <li>High-Yeild Savings</li>
                            <li>No Monthly Fees</li>
                            <li>Mobile Banking</li>
                        </ul>
                    </div>
                    <div>
                        <button>Learn More</button>
                        {/* <div>icon</div> */}
                    </div>
                </div> 
                
                <div className='servicesdivv'>
                    <div className='ServiceIcon'>
                        <Building/>
                    </div>
                    <div>
                        <h3>Buisness Banking </h3>
                        <p>Tailored financial solutions for buisnesses of all sizes, from startups to established enterprise </p>
                    </div>
                    <div>
                        <ul>
                            <li>Buisness Loans </li>
                            <li>Merchant Services</li>
                            <li>Cash Management</li>
                        </ul>
                    </div>
                    <div>
                        <button>Learn More</button>
                        {/* <div>icon</div> */}
                    </div>
                </div>
                
                 <div className='servicesdivv'>
                    <div className='ServiceIcon'>
                       <Shield  />
                    </div>
                    <div>
                        <h3>Wealth Protection</h3>
                        <p>Safeguard your assets with our comprehensive insurance and estate planning service</p>
                    </div>
                    <div>
                        <ul>
                            <li>Life Inusrance</li>
                            <li>Estate Planning</li>
                            <li>Tax Optimization</li>
                        </ul>
                    </div>
                    <div>
                        <button>Learn More</button>
                        {/* <div>icon</div> */}
                    </div>
                </div>
                
                 <div className='servicesdivv'>
                    <div className='ServiceIcon'>
                       <Calculator/>
                    </div>
                    <div>
                        <h3>Financial Planning</h3>
                        <p>Expert Financial advisors help you create a road map to achieve your shorts and long term </p>
                    </div>
                    <div>
                        <ul>
                            <li>Retiement Planning</li>
                            <li>Goal Setting</li>
                            <li>Budget Analysist</li>
                        </ul>
                    </div>
                    <div>
                        <button>Learn More</button>
                        {/* <div>icon</div> */}
                    </div>
                </div> 
                
                <div className='servicesdivv'>
                    <div className='ServiceIcon' >
                       <CreditCard />
                    </div>
                    <div>
                        <h3>Credit Solution</h3>
                        <p>Access competitive loan rate and credit options designed to meet your finanial </p>
                    </div>
                    <div>
                        <ul>
                            <li>Personal Loans </li>
                            <li>Mortgages</li>
                            <li>Credit Cards</li>
                        </ul>
                    </div>
                    <div>
                        <button>Learn More</button>
                        {/* <div>icon</div> */}
                    </div>
                </div>
            </div>
            </div>

            <div style={{textAlign:"center", margin:"120px 100px"}} className='consultationn'>
                <h3>Ready To Get Statrted?</h3>
                <p>Schredule a free consultation with our fiinancial expert to discuss your goals and find the perfect solution for your needs</p>
                <div className='conultationbutton'>
                    <button>Schedule a Free Consultation</button>
                </div>
            </div>

            <div className='aboutusdivv'>

            <div style={{display:"flex"}} className='missionandimg'>
                <div className='Missionn'>
                    <h3 className=''>Building Financial Features Since 2008</h3>
                    <p>At Nivora Financial Group, we believe that everyone deserves access to exceptional financial services. Founded with a mission to democratize wealth management, we combine cutting-edge technology with personlized service to deliver unparrareled financial solutions.</p>
                    <p>
                        Our team of financial planners and advisors are dedicated to helping you navigate the complexities of the financial world, providing expert guidance every step of the way. Whether you're looking to grow your investments, manage your wealth, or secure your financial future, Nivora Financial Group is here to help you achieve your goals with confidence.
                    </p>
                    <div className='missiondivv'>
                        <h3 style={{fontSize:'25px'}}>Our Mission</h3>
                        <p>
                            "To empower individuals and businesses to achieve their financial goals through innovative solutions, expert guidance, and unparalleled service."
                        </p>
                    </div>
                </div>
                <div className='Teamimg'>
                    <img src={Team} alt="" />
                </div>
            </div>

            <div className='achievements'>
                <div className='achievment1234'>
                      <div className='Achievmenicon'><Trophy/></div>
                    <h3>Industry Recognition</h3>
                    <p>Winner of Financial Exellence Award for 3 consecutive years</p>
                </div>
                <div className='achievment1234'>
                     <div className='Achievmenicon'><Users/></div>
                    <h3>Expert Team</h3>
                    <p>Over 200 certified financial professionals and advisors</p>
                </div> 
                
                <div className='achievment1234'>
                    <div className='Achievmenicon'><Globe/></div>
                    <h3>Global Reach</h3>
                    <p>Serving clients across 25+ Countries with the local expertise</p>
                </div>
                
                 <div className='achievment1234'>
                    <div className='Achievmenicon'><TrendingUpIcon/></div>
                    <h3>Proven result </h3>
                    <p>Average Portfolio growth of 12.5% annually over the past decade</p>
                </div>
            </div>

            <div style={{textAlign:"center", margin:"120px 100px"}} className='corevaluesdivv'>
            <h3>Our Core Values </h3>
            <div className='corevalues'>
                <div>
                    <div style={{fontSize:"25px", borderRadius:"50%", margin:"30px",fontWeight:"600", color:"blue", }} className='ValuesSub'>T</div>
                    <h3>Transperency</h3>
                    <p>Clean communication and honsest advice in all our interactions</p>
                </div>

                <div>
                    <div style={{fontSize:"25px", borderRadius:"50%", margin:"30px",fontWeight:"600",color:"green"}} className='ValuesSub2'>I</div>
                    <h3>Innovation</h3>
                    <p>Leveraging cutting-edge technology to enhance your financial experience</p>
                </div>

               <div>
                    <div style={{fontSize:"25px", borderRadius:"50%", margin:"30px",fontWeight:"600", color:"purple"}}className='ValuesSub3'>E</div>
                    <h3> Excellence</h3>
                    <p>Commitment to delivering exceptional serviice and superior result</p>
                </div>

            </div>
            </div>

            </div>

            <div>
            <div style={{textAlign:"center", margin:"120px 100px"}} className='testimonialsdivv'>
                
            <h3>Trusted By Thousaands of Clients</h3>
            <p>Don't Just take our word for it . See What our clients have to say about thier experiance with Nivora Financial Group and how we have helped them achieve thir Financial Goals.</p>

            </div>

            <div style={{ gap:"20px", margin:"20px"}} className='testimonials'>
                <div className='testimonial123'>
                    <div><Quote size={40} color='lightblue'/></div>
                     <div><FaStar size={24} style={{color:"gold"}}/><FaStar size={24}   style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/></div>
                    <p>
                        "Nivora Financial Group has transformed my financial life. Their expert advice and personalized approach helped me grow my investment portfolio significantly. I couldn't be happier with the results!"
                        "
                    </p>
                    <hr />
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                        <div style={{fontWeight:'600'}} className='NAmesofUSersss'>SJ</div>
                        <div>
                            <h4>Sarah Johsnon</h4>
                            <p>Small Buisness Owner</p>
                            <p>Johnson and Aassiciates</p>
                        </div>
                    </div>
                </div>
                 <div className='testimonial123'>
                     <div><Quote size={40} color='lightblue'/></div>
                  <div><FaStar size={24} style={{color:"gold"}}/><FaStar size={24}   style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/></div>
                    <p>"The investment management team at Nivora Financial Group is top-notch. They took the time to understand my financial goals and created a tailored investment strategy that has delivered impressive returns. Highly recommend their services!
                        "
                    </p>
                    <hr />
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                        <div style={{fontWeight:'600'}} className='NAmesofUSersss'>MC</div>
                        <div>
                            <h4>Micheal Chen</h4>
                            <p>Investment proffesional</p>
                            <p>Tech Startup Founder</p>
                        </div>
                    </div>
                </div>
                 <div className='testimonial123'>
                    <div><Quote size={40} color='lightblue'/></div>
                   <div><FaStar size={24} style={{color:"gold"}}/><FaStar size={24}   style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/></div>
                    <p>"From retirement planning to our children's education fund, Nivora Financial Group has been an invaluable partner in helping us achieve our financial goals. Their team is knowledgeable, responsive, and truly cares about their clients' success.
                        "
                    </p>
                    <hr />
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                        <div style={{fontWeight:'600'}} className='NAmesofUSersss'>ER</div>
                        <div>
                            <h4>Emily Rodrigez</h4>
                            <p>Financial Planner</p>
                            <p>Rodrigez Family</p>
                        </div>
                    </div>
                </div>
                 <div className='testimonial123'>
                    <div><Quote size={40} color='lightblue'/></div>
                    <div><FaStar size={24} style={{color:"gold"}}/><FaStar size={24}   style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/></div>
                    <p>"The Commercial Landing team at Nivora Financial Group provided exceptional service and expertise throughout the entire process. They helped us secure the funding we needed to expand our business, and their guidance was instrumental in our success.
                        "
                    </p>
                    <hr />
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                       <div style={{fontWeight:'600'}} className='NAmesofUSersss'>DT</div>
                        <div>
                            <h4>David Thomson</h4>
                            <p>Real Estate Developer</p>
                            <p>Thomson Properties</p>
                        </div>
                    </div>
                </div>
                <div className='testimonial123'>
                   <div><Quote size={40} color='lightblue'/></div>
                   <div><FaStar size={24} style={{color:"gold"}}/><FaStar size={24}   style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/></div>
                    <p>"
                        Switching to Nivora Financial Group was the best decision I made for my personal banking needs. Their high-yield savings account and no-fee checking account have helped me save more money while enjoying convenient mobile banking features.
                        "
                    </p>
                    <hr />
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                      <div style={{fontWeight:'600'}} className='NAmesofUSersss'>LP</div>
                        <div>
                            <h4>Lisaa Park</h4>
                            <p>Marketing Executive</p>
                            <p>Global Makerting Inc.</p>
                        </div>
                    </div>
                </div>
                 <div className='testimonial123'>
                   <div><Quote size={40} color='lightblue'/></div>
                   
                    <div><FaStar size={24} style={{color:"gold"}}/><FaStar size={24}   style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/><FaStar size={24}  style={{color:"gold"}}/></div>
                    <p>"The wealth protection services provided by Nivora Financial Group have given me peace of mind knowing that my assets are safeguarded. Their team helped me create a comprehensive estate plan that aligns with my wishes and protects my family's future.
                        "
                    </p>
                    <hr />
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                        <div style={{fontWeight:'600'}} className='NAmesofUSersss'>RW</div>
                        <div>
                            <h4>Robert Williams</h4>
                            <p>Retired Engineer</p>
                            <p>Willams Consulting </p>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <footer>

            <div className='footerdivv'>
                <div>
                    <div>
                        {/* icon */}
                        <h3>Nivora Financial Group</h3>
                       
                    </div>
                         <p style={{width:"70%"}}>Empowering your financial journey with innovative solutions, expert guidance and personlized service to help you achieve your financial goals and secure your future</p>
                         <div style={{display:"flex", gap:"10px", fontSize:"20px", color:"gray"}} className='socialmediaicons'>
                            <div><FaFacebook/></div>
                            <div><FaTwitter/></div>
                            <div><FaInstagram/></div>
                            <div><FaLinkedin/></div>
                         </div>
                </div>
                <div>
                    <h3>Services</h3>
                    <div>
                        <button style={{textWrap:'norap'}}>Investment Management</button>
                        <button>Personal Banking</button>
                        <button>Buisness Banking</button>
                        <button>Wealth Protection</button>
                        <button>Financial Planning</button>
                        <button>Credit Solutions</button>
                    </div>
                </div>
                <div>
                    <h3>Company</h3>
                    <div>
                        <button>About Us</button>
                        <button>Our Team</button>
                        <button>Careers</button>
                        <button>News and Updates</button>
                        <button>Security </button>
                        <button>Contact</button>
                    </div>
                </div>
                <div>
                    <h3>Contact Info</h3>
                    <div>
                        <div>
                            {/* <div>icons</div> */}
                             <p>123 Finance Street, New York, NY 10001</p>
                        </div>
                         <div>
                            {/* <div>icons</div> */}
                             <p>1-800-NIVORA-1</p>
                        </div>
                         <div>
                            {/* <div>icons</div> */}
                             <p>hello@nivora.com</p>
                        </div>
                       
                       
                    </div>
                </div>

            </div>

            <div style={{display:"flex", justifyContent:"space-between", padding:"20px 50px", borderTop:"1px solid gray"}} className='lastdivv'>
                <div>
                    <p>2024 Nivora Financial Group. All right reserved</p>
                </div>
                <div className='lastfoot'>
                    <button>Privacy Policy</button>
                    <button>Terms of Service</button>
                    <button>Cooky Policy</button>
                    <button>Disclosures</button>
                </div>
            </div>

            </footer>
        </div>
    )
}
export default NivoraHomePage;