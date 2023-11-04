import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

const App = () => {

  // const [userData, setUserData] = useState(null);
  // const [userFn, setUserFn] = useState(null)
  // const [userLn, setUserLn] = useState(null)
  // const [userCode, setUserCode] = useState(null)
  // const number = '012314124';

  // // console.log(referralCode);

  // const getUser = async () => {
  //   try {
  //     const usersCollection = collection(db, 'accounts');
  //     const querySnapshot = await getDocs(usersCollection);
  //     const users = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  //     if(users) {
  //       // const user = users.find((user) => user?.firstname === referralCode);
  //       const user = users.find((user) => user?.promo_code?.code === number);
  //       if (user) {
  //         setUserData(user);
  //         setUserFn(user?.firstname)
  //         setUserLn(user?.lastname)
  //         setUserCode(user?.promo_code?.code)
  //       }
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, [referralCode]);




  // useEffect(() => {
  //   getUser();
  // }, [number]);





// console.log(userData);
 
  return (
    <div>

  <Router>
      <Routes>
        <Route path="/invite/:referralCode" element={<Home />} />
      </Routes>
    </Router>

    </div>
  );
};

export default App;
