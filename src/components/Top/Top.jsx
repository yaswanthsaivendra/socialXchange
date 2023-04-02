import { useEffect, useState } from "react";

const Top = ({backend,account})=>{
    
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const user = await backend.users(account);
            setUserDetails(user)
        }
        
        getUser()
    }, [])
    useEffect(()=>
    {

    },[])
    return(
        <>
        <h4 className="p-2">Our Top Contributers</h4>
        <div className="profile-details rounded p-3 py-5 m-auto">
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
              Description: <p className="tsecondary"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempore quisquam! Alias minima harum commodi </p>
              Total Credits: <p className="tsecondary">1789</p>
              </div>
            </div>
        </>
    )
}
export default Top;