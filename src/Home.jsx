import { useState, useEffect } from 'react';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import Logo from './assets/hha-logo.svg'
import folding from './assets/folding-man.png'
import chat from './assets/ai-chatroom.png'
import loaderImg from './assets/hha-loader.svg'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


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

//   redirect to app store
    const redirectToAppStore = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
        if (/android/i.test(userAgent)) {
          // User is on an Android device, redirect to the Google Play Store.
          window.location.href = 'https://play.google.com/store/apps/details?id=your-app-package-name';
        } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
          // User is on an iOS device, redirect to the Apple App Store.
          window.location.href = 'https://apps.apple.com/app/your-app-id';
        } else {
          // For other devices or when the user agent cannot be determined, you can provide a generic link.
          window.location.href = 'https://example.com/your-app';
        }
      };
  

 
  return (
    <div>
        {userData ? ( 
   <div className='w-full '>
   <div className='mb-[2rem] md:mb-[5rem]'>
  <nav className='w-full h-full max-h-[2rem] flex flex-row items-start px-4 py-8 md:px-8 md:py-8'>
    <Link to={'https://househelpapp.com'}>
  <img src={Logo} alt="HousehelpApp Logo"  className='w-full h-full max-w-[160px] max-h-[36px] md:max-w-[210px] md:max-h-[52px]'/>
    
    </Link>
  </nav>
  </div>
  <div className='flex flex-col w-full items-center justify-center font-fraunces px-2'>


  <div className=' text-center flex flex-col items-center justify-center gap-6 md:gap-12 mb-12 '>
    <p className='text-[28px] md:text-[40px] w-full max-w-[744px] font-semibold '>Hi 👋🏾 , <span className=' text-[#2AB34B]'> {userFn}.{userLn?.slice(0, 1)}  </span>  wants you to join the HouseHelpApp family today. </p>

    <p className='text-[22px] md:text-[32px]'>use the code: <span className='text-[28px] md:text-[40px] font-semibold text-[#2AB34B]'>{userCode}</span></p>
  </div>

  <div className=' text-center flex flex-col items-center justify-center gap-4 mb-16 md:mb-32 '>
    <p className='text-[18px] md:text-[24px] w-full max-w-[744px]'>sign up as a <span className='font-semibold text-[#00AAAF]'>Client</span> and get access to professional services for your everyday needs </p>
    <p>OR</p>
    <p className='text-[18px] md:text-[24px] w-full max-w-[744px]'>sign up as a <span className='font-semibold text-[#00AAAF]'>Helper</span>, offer your professional services and earn money</p>
  </div>

{/* download button */}
  <div className='s text-center flex flex-col sm:flex-row items-center justify-center gap-4 relative w-full max-w-[500px]'>
    <button onClick={redirectToAppStore} className='w-full max-w-[280px] md:max-w-[390px] h-[60px] md:h-[80px] bg-[#00AAAF] text-white flex items-center justify-center text-[24px] md:text-[32px] font-semibold rounded-md hover:cursor-pointer mx-2 '>
      Download Now
    </button>

    <img className='  w-[63px] h-[131px]  md:w-[106px] md:h-[223px]' src={folding} alt='avatar' />
    {/* <img className=' absolute top-0 left-[24rem] md:left-[30rem]' src={folding} alt='avatar' /> */}
  </div>
  </div>

  {/* ai chat */}
  <div className='bg-[#4853A4] text-white w-full h-full relative py-12 md:py-24'>
    <h2 className='text-[24px] md:text-[40px] font-semibold md:pl-24 pl-4 mb-[1rem] md:mb-[2rem]'>Don’t miss out on our <br /> exciting AI feature</h2>
    <p className=' text-[16px] md:text-[28px] w-full max-w-[800px] mb-4 md:pl-24 pl-4'>Get an immersive first-hand AI experience. Engage in conversations with your personalised AI assistant and explore the limitless potential of AI as your everyday companion.</p>
<img src={chat} alt="ai chat" />
  </div>
 
</div>
        ) : (
            <div className='w-full bg-lime-400 h-screen flex flex-row justify-center items-center '>
                <img src={loaderImg} className='animate-bounce duration-1000' alt="loadimg image" />

            
            </div>
        )}
      
    </div>
  )
}

export default Home