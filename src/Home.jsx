import { useState, useEffect } from 'react';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import Logo from './assets/hha-logo.svg'
import folding from './assets/folding-man.svg'
import chat from './assets/ai-chatroom.png'
import { useParams } from 'react-router-dom';


const Home = () => {

    const  {referralCode}  = useParams();
    const [userData, setUserData] = useState(null);
    const [userFn, setUserFn] = useState(null)
    const [userLn, setUserLn] = useState(null)
    const [userCode, setUserCode] = useState(null)
    // const number = '012314124';
  
    // console.log(referralCode);
  
    const getUser = async () => {
      try {
        const usersCollection = collection(db, 'accounts');
        const querySnapshot = await getDocs(usersCollection);
        const users = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
        if(users) {
      
          const user = users.find((user) => user?.promo_code?.code === referralCode);
        //   const user = users.find((user) => user?.promo_code?.code === number);
          if (user) {
            setUserData(user);
            setUserFn(user?.firstname)
            setUserLn(user?.lastname)
            setUserCode(user?.promo_code?.code)
          }
        }
  
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getUser();
    }, [referralCode]);
  
  
  

 
  return (
    <div>
        {userData ? ( 
   <div className='w-full '>
   <div className='mb-[5rem]'>
  <nav className='w-full h-full max-h-[2rem] flex flex-row items-start px-4 py-8 md:px-8 md:py-8'>
  <img src={Logo} alt="HousehelpApp Logo"  className='w-full h-full max-w-[160px] max-h-[36px] md:max-w-[210px] md:max-h-[52px]'/>
  </nav>
  </div>
  <div className='flex flex-col w-full items-center justify-center'>


  <div className='font-frauces text-center flex flex-col items-center justify-center gap-12 mb-12 '>
    <p className='text-[32px] md:text-[40px] w-full max-w-[744px]'>Hi there, <span className='text-[#2AB34B]'> {userFn} . {userLn?.slice(0, 1)}  </span>  wants you to join the HouseHelpApp family today. </p>

    <p className='text-[24px] md:text-[32px]'>use the code: <span className='text-[32px] md:text-[40px] text-[#2AB34B]'>{userCode}</span></p>
  </div>

  <div className='font-frauces text-center flex flex-col items-center justify-center gap-4 mb-32 '>
    <p className='text-[18px] md:text-[24px] w-full max-w-[744px]'>sign up as a <span className='font-semibold text-[#00AAAF]'>Client</span> and get access to professional services for your everyday needs </p>
    <p>OR</p>
    <p className='text-[18px] md:text-[24px] w-full max-w-[744px]'>sign up as a <span className='font-semibold text-[#00AAAF]'>Helper</span>, offer your professional services and earn money</p>
  </div>

{/* download button */}
  <div className='font-frauces text-center flex flex-col sm:flex-row items-center justify-center gap-4 relative w-full max-w-[500px]'>
    <div className='w-full max-w-[280px] md:max-w-[390px] h-[60px] md:h-[80px] bg-[#00AAAF] text-white flex items-center justify-center text-[24px] md:text-[32px] font-semibold rounded-md hover:cursor-pointer mx-2 '>
      Download Now
    </div>

    <img className=' ' src={folding} alt='avatar' />
    {/* <img className=' absolute top-0 left-[24rem] md:left-[30rem]' src={folding} alt='avatar' /> */}
  </div>
  </div>

  {/* ai chat */}
  <div className='bg-[#4853A4] text-white w-full h-full relative py-12 md:py-24'>
    <h2 className='text-[24px] md:text-[40px] font-semibold md:pl-24 pl-4 mb-[2rem]'>Don’t miss out on our AI feature</h2>
    <p className=' text-[16px] md:text-[28px] w-full max-w-[800px] mb-4 md:pl-24 pl-4'>Get an immersive first-hand AI experience. Engage in conversations with your personalised AI assistant and explore the limitless potential of AI as your everyday companion.</p>
<img src={chat} alt="ai chat" />
  </div>
 
</div>
        ) : (
            <div>
                <h2>User not found</h2>
            </div>
        )}
      
    </div>
  )
}

export default Home