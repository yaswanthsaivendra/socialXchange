
import './Dashboard.css'
import badge from '../../images/award.png'
import TokenIcon from '@mui/icons-material/Token';
import OpacityIcon from '@mui/icons-material/Opacity';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DiamondIcon from '@mui/icons-material/Diamond';
import SpaIcon from '@mui/icons-material/Spa';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useState, useEffect } from 'react';


const Dashboard = ({isUser, account, backend}) =>{

    const [userDetails, setUserDetails] = useState({})
    const [companyDetails, setCompanyDetails] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const user = await backend.users(account);
            setUserDetails(user)
        }
        const getCompany = async () => {
            const company = await backend.organizations(account);
            setCompanyDetails(company)
        }
        getUser()
        getCompany()
    }, [])


    
    return(
        <>
        {isUser?<>
            <div className="container d-flex top-dashboard">
            <div className="profile-details rounded p-3 py-5">
              <div className="right px-2">
                <img src="https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?w=2000" className="profile-container "/>

                <div className="name text-center py-2">
                    <h6>{userDetails.name}</h6>
                    <p className="tsecondary">Joined on 18th Feb,2023</p>
                </div>
              </div>
              <div className="left px-3">
              Email: <p className="tsecondary">{userDetails.email}</p>
              Phone : <p className="tsecondary">{userDetails.ph_num}</p>
              Description: <p className="tsecondary">{userDetails.description}</p>

              </div>
            </div>
            <div className="badge bgsecondary p-5 mx-2">
                     <h4>Your Badge</h4>
                     <div className="image py-4">
                        <img src={badge} alt="" className='w-50' />
                     </div>
            </div>

        </div>
        <div className="container activities p-3">
            <h5>Your Social Credits:</h5>

            <div className="credits-page d-flex">
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Green Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                {userDetails.greenCredit?<>{userDetails.greenCredit.toNumber()}</>:<>0</>}
            <SpaIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
      
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Blue Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {userDetails.blueCredit?<>{userDetails.blueCredit.toNumber()}</>:<>0</>}
            <OpacityIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Hunger Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {userDetails.hungerCredit?<>{userDetails.hungerCredit.toNumber()}</>:<>0</>}
            <VolunteerActivismIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Pink Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>

            {userDetails.pinkCredit?<>{userDetails.pinkCredit.toNumber()}</>:<>0</>}

            <DiamondIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Edu Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {userDetails.eduCredit?<>{userDetails.eduCredit.toNumber()}</>:<>0</>}

            <SchoolIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="text-center">
            <h5 className='p-1'>Health Credits</h5>
            
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {userDetails.healthCredit?<>{userDetails.healthCredit.toNumber()}</>:<>0</>}
            <HealthAndSafetyIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        
       
    </div>
        </div>
        </>:<>
        <div className="container d-flex top-dashboard">
            <div className="profile-details rounded p-3 py-5">
              <div className="right px-2">
                <img src="https://as2.ftcdn.net/v2/jpg/02/60/12/11/1000_F_260121137_3To0EdxvWR3f5IqiwqkmGvHN9MSOM4HG.jpg" className="profile-container "/>

                <div className="name text-center py-2">
                    <h6>{companyDetails.name}</h6>
                    <p className="tsecondary">Joined on 18th Feb,2023</p>
                </div>
              </div>
              <div className="left px-3">
              Email: <p className="tsecondary">{companyDetails.email}</p>
              Phone : <p className="tsecondary">{companyDetails.ph_num}</p>
              Description: <p className="tsecondary"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempore quisquam! Alias minima harum commodi </p>
              Total Credits: <p className="tsecondary">1789</p>
              </div>
            </div>
            <div className="badge bgsecondary p-5 mx-2">
                     <h4>Your Badge</h4>
                     <div className="image py-4">
                        <img src={badge} alt="" className='w-50' />
                     </div>
            </div>

        </div>
        <div className="container activities p-3">
            <h5>Your Social Credits:</h5>

            <div className="credits-page d-flex">
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Green Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
                {userDetails.greenCredit?<>{userDetails.greenCredit.toNumber()}</>:<>0</>}
            <SpaIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
      
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Blue Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {companyDetails.blueCredit?<>{companyDetails.blueCredit.toNumber()}</>:<>0</>}
            <OpacityIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Hunger Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {companyDetails.hungerCredit?<>{companyDetails.hungerCredit.toNumber()}</>:<>0</>}
            <VolunteerActivismIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Pink Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>

            {companyDetails.pinkCredit?<>{companyDetails.pinkCredit.toNumber()}</>:<>0</>}

            <DiamondIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Edu Credits</h5>
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {companyDetails.eduCredit?<>{companyDetails.eduCredit.toNumber()}</>:<>0</>}

            <SchoolIcon color="primary" sx={{fontSize:'50px'}}/>
            </p>
           </div>
        </div>
        <div className="card mycredits m-4 p-2 py-4">
           <div className="text-center">
            <h5 className='p-1'>Health Credits</h5>
            
            <p className="text-center tsecondary px-1" style={{fontSize:'50px'}}>
            {companyDetails.healthCredit?<>{companyDetails.healthCredit.toNumber()}</>:<>0</>}
            <HealthAndSafetyIcon color="primary" sx={{fontSize:'50px'}}/>

            </p>
           </div>
        </div>
        
       
    </div>
        </div>
        </>}

      
        </>
    )
}
export default Dashboard