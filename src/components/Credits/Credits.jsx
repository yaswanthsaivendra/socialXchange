import './Credits.css'
import DiamondIcon from '@mui/icons-material/Diamond';
import TokenIcon from '@mui/icons-material/Token';
import OpacityIcon from '@mui/icons-material/Opacity';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SpaIcon from '@mui/icons-material/Spa';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const Credits = ()=>{

 return(
    <>
    <h3 className="text-center p-3">Our Credits</h3>
    <div className="credits-page d-flex">
        <div className="card m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
            <SpaIcon sx={{fontSize:'100px'}} color="primary"/>
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Green Credits</h5>
            <p className="text-center tsecondary px-1">
                Green credits can be gained by doing any activity to protect nature like planting trees,cleaning environment,animal welfare, producing renewable energy.
            </p>
           </div>
        </div>
        <div className="card m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
            <OpacityIcon sx={{fontSize:'100px'}} color="primary"/>
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Blue Credits</h5>
            <p className="text-center tsecondary px-1">
                Blue credits can be gained by doing any activity that reduces water pollution.
            </p>
           </div>
        </div>
        <div className="card m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
            <VolunteerActivismIcon sx={{fontSize:'100px'}} color="primary"/>
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Hunger Credits</h5>
            <p className="text-center tsecondary px-1">
            Hunger credits can be gained by donating food,water etc to reduce the hunger and malnutrition.
            </p>
           </div>
        </div>
        <div className="card m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
            <DiamondIcon sx={{fontSize:'100px'}} color="primary"/>
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Pink Credits</h5>
            <p className="text-center tsecondary px-1">
                Pink credits can be gained by improving gender equality, setting up homes and hostels for women and orphans.
            </p>
           </div>
        </div>
        <div className="card m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
            <SchoolIcon sx={{fontSize:'100px'}} color="primary"/>
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Edu Credits</h5>
            <p className="text-center tsecondary px-1">
                Edu credits can be gained by improving the education system and promoting education among children,women, elderly and differently-abled people
            </p>
           </div>
        </div>
        <div className="card m-4 p-2 py-4">
           <div className="diamond px-5 flex text-center">
            <HealthAndSafetyIcon sx={{fontSize:'100px'}} color="primary"/>
           </div>
           <div className="matter text-center">
            <h5 className='p-1'>Health Credits</h5>
            <p className="text-center tsecondary px-1">
                Health credits can be gained by promoting health care, establishing hospitals in rural areas, giving medical treatment for the needy.
            </p>
           </div>
        </div>
    </div>
    </>
 )
}
export default Credits