import  {db , auth} from './firebase';
import React, {createContext, useState, useReducer, useEffect} from 'react'
import data from './components/context/data'

export const SimContext = createContext()

export const SimProvider = ({children}) => {
    const {products} = data
    const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map((x) => 
      x.id === product.id ? {...exist, qty:exist.qty + 1} : x));
    }else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1 ){
          setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
          setCartItems(
              cartItems.map((x) => 
              x.id === product.id ? {...exist , qty: exist.qty - 1} : x)
          );
      }
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  //user experience

  const [users, dispatch] = useReducer((state, action) => {
    const kite = action.user
      switch (action.type) {
          case 'add':
              return {
                  ...state,
                  kite
              };
          case 'minus':
              return {
                  state
              }
          default: 
              return state;
      }
  })
  
  //trying out something
  // const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signup = (email, password, fullName) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((ref) => {
          ref.user.updateProfile({
            displayName: fullName,
          });
          db.collection('userProfile')
              .doc(fullName)
              .set({
                email,
                fullName,
                photoURL:
                  'https://firebasestorage.googleapis.com/v0/b/instagram-clone-66f7a.appspot.com/o/BlankImage.jpg?alt=media&token=c4d05e11-5df1-4a8a-ba8a-9a6f0cd36c4b',
                bio: '',
                website: '',
                phone: '',
                cart: cartItems
              })
              .then(() => {
                resolve(ref);
              });
        })
        .catch((error) => reject(error));
    });
  
    return promise;
  };
  const signin = (email, password, fullName) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((ref) => {
          ref.user.updateProfile({
            displayName: fullName,
          });
          db.collection('userProfile')
              .doc(fullName)
              .set({
                email,
                fullName,
                cart: cartItems
              })
              .then(() => {
                resolve(ref);
              });
        })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  };
  const signout = () => {
    return auth.signOut();
  };
  const passwordReset = (email) => {
    let promise = new Promise(function (resolve, reject) {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve(`Password Reset Email sent to ${email}`);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return promise;
  };
  
  const updateEmail = (email) => {
    return users.updateEmail(email);
  };
  
  const updatePassword = (password) => {
  return users.updatePassword(password);
  };
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({
          type: "add",
          user
      })
      // setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
      signup,
      signin,
      signout,
      updatePassword,
      updateEmail,
      passwordReset,
      products,
      cartItems,
      setCartItems,
      onAdd,
      onRemove,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice

  }
    return(
        <SimContext.Provider value={value}>
            {children}
        </SimContext.Provider>
    );
}