import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, FieldValue } from 'firebase/firestore';
import SalesPerson from './SalesPerson';

function App() {
// salesperson
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newTermDate, setNewTermDate] = useState("");
  const [newManager, setNewManager] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  

// products
  const [newName, setNewName] = useState("");
  const [newManufacturer, setNewManufacturer] = useState("");
  const [newStyle, setNewStyle] = useState("");
  const [newPurchasePrice, setNewPurchasePrice] = useState(0);
  const [newSalePrice, setNewSalesPrice] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [newCommission, setNewCommission] = useState("");
  const [products, setProduct] = useState([]);
  const productCollectionRef = collection(db, "product");


  const createSalesPerson = async() => { 
    if (newFirstName == "" || newLastName == "" || newAddress == "" || newPhone == "" || newStartDate == "" || newTermDate == "" || newManager == "") {
      alert("Your inputs is/are null. Please fill out all inputs");
    } 
    else {
      // This will add a new user 
      await addDoc(usersCollectionRef, { 
        firstName: newFirstName, 
        lastName: newLastName,
        address: newAddress,
        phone: newPhone,
        startDate: newStartDate,
        termDate: newTermDate,
        manager: newManager   
      });
    }
  }

  const createProduct = async() => { 
    if (newName == "" || newManufacturer == "" || newStyle == "" || newPurchasePrice == "" || newSalePrice == "" || newQuantity == "" || newCommission == "") {
      alert("Your inputs is/are null. Please fill out all inputs");
    } 
    else {
      // This will add a new user 
      await addDoc(productCollectionRef, { 
        name: newName,
        manufacturer: newManufacturer, 
        style: newStyle, 
        purchasePrice: Number(newPurchasePrice), 
        salePrice: Number(newSalePrice), 
        quantity: Number(newQuantity), 
        commission: newCommission 
      });
    }
  }


  const editSalesPerson = async(id, newFirstName, newLastName, newAddress, newPhone, newStartDate, newTermDate, newManager) => {

    const userDoc = doc(db, "users", id);
    /**
     *  TODO: Find a way to get current value of field from firestore
     *  You also need this to check if the user/product is already added
     */
    // const userSnap = await getDocs(userDoc);
    // if (userSnap.exists()) {
    //   console.log("Document data:", userSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }

    const newFields = { 
        firstName: newFirstName,
        lastName: newLastName,
        address: newAddress,
        phone: newPhone,
        startDate: newStartDate,
        termDate: newTermDate,
        manager: newManager
    }
    await updateDoc(userDoc, newFields);
  }

  const editProduct = async(id, newName, newManufacturer, newStyle, newPurchasePrice, newSalePrice, newQuantity, newCommission) => {

    const productDoc = doc(db, "product", id);
    const newFields = { 
      name: newName,
      manufacturer: newManufacturer, 
      style: newStyle, 
      purchasePrice: Number(newPurchasePrice), 
      salePrice: Number(newSalePrice), 
      quantity: Number(newQuantity), 
      commission: newCommission 
    }
    await updateDoc(productDoc, newFields);
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "product", id);
    await deleteDoc(productDoc);
  }

  
  // This adds information to print from the document
  useEffect(() => {
    console.log(db);
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getUsers()
    getProducts()
  }, [])

  // const onAddBtnClick = event => {
  //   editSalesPerson(<SalesPerson></SalesPerson>);
  // };

  return (
    <div className="App">
      <h1>Bespoked Bikes</h1>
      <h2>Dashboard</h2>

      <fieldset>
        <legend>SalesPerson</legend>
        <input 
          placeholder="First Name" 
          onChange={(event) => {
            setNewFirstName(event.target.value);
          }}
      
        />
        <input
          placeholder="Last Name"
          onChange={(event) => {
            setNewLastName(event.target.value);
          }}
        />
        <input
          placeholder="Address"
          onChange={(event) => {
            setNewAddress(event.target.value);
          }}
        />
        <input
          type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="###-###-####"
          onChange={(event) => {
            setNewPhone(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Start Date"
          onChange={(event) => {
            setNewStartDate(event.target.value);
          }}
        />
        <input
          type="date"
          placeholder="Termination Date"
          onChange={(event) => {
            setNewTermDate(event.target.value);
          }}
        />
        <input
          placeholder="Manager"
          onChange={(event) => {
            setNewManager(event.target.value);
          }}
        />

        <button onClick={createSalesPerson}>Create SalesPerson</button>

        {users.map((user) => { 
          return (
            <div>
              {" "}
              <h3>Name: {user.firstName} {user.lastName}</h3>
              <h5>Address: {user.address}</h5>
              <h5>Phone: {user.phone}</h5>
              <h5>Start Date: {user.startDate}</h5>
              <h5>Termination Date: {user.termDate}</h5>
              <h5>Manager: {user.manager}</h5>

              {/* <h1>Age: {user.age} </h1> */}
              {/* <button onClick={() => { updateUser(user.id, user.age)}}>Increase age</button> */}
              {/* <button onClick={() => { editSalesPerson(user.id) }}>Edit User</button> */}
              {/* <button onClick=confirm>Edit User</button> */}
              <button onClick={() => { editSalesPerson(user.id, newFirstName, newLastName, newPhone, newAddress, newStartDate, newTermDate, newManager) }}>Edit User</button>
              <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
            </div>
          )
        })}
      </fieldset>

      <fieldset>
        <legend>Products</legend>
        <input 
          placeholder="Name" 
          onChange={(event) => {
            setNewName(event.target.value);
          }}
      
        />
        <input
          placeholder="Manufacturer"
          onChange={(event) => {
            setNewManufacturer(event.target.value);
          }}
        />
        <input
          placeholder="Style"
          onChange={(event) => {
            setNewStyle(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Purchase Price"
          onChange={(event) => {
            setNewPurchasePrice(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Sales Price"
          onChange={(event) => {
            setNewSalesPrice(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Quantity on Hand"
          onChange={(event) => {
            setNewQuantity(event.target.value);
          }}
        />
        <input
          placeholder="Commission Percentage"
          onChange={(event) => {
            setNewCommission(event.target.value);
          }}
        />

        <button onClick={createProduct}>Create Product</button>

        { products.map((product) => { 
          return (
            <div>
              {" "}
              <h3>Name: {product.name}</h3>
              <h5>Manufacturer: {product.manufacturer}</h5>
              <h5>Style: {product.style}</h5>
              <h5>Purchase Price: {product.purchasePrice}</h5>
              <h5>Sale Price: {product.salePrice}</h5>
              <h5>Qty on Hand: {product.quantity}</h5>
              <h5>Commission Percentage: {product.commission} </h5>
              { <button onClick={() => { editProduct(product.id, newName, newManufacturer, newStyle, newPurchasePrice, newSalePrice, newQuantity, newCommission) }}>Edit User</button> }
              <button onClick={() => { deleteProduct(product.id) }}>Delete User</button>
              
            </div>
          )
        })} 
        {/* <button onClick={createUser}>Create User</button> */}
      </fieldset>

      <fieldset>
        <legend>Customers</legend>
        <input 
          placeholder="Name..." 
          // onChange={(event) => {
          //   setNewName(event.target.value);
          // }}
      
        />

        {/* <button onClick={createUser}>Create User</button> */}
      </fieldset>

      <fieldset>
        <legend>Sales</legend>
        <input 
          placeholder="Name..." 
          // onChange={(event) => {
          //   setNewName(event.target.value);
          // }}
      
        />

        {/* <button onClick={createSalesPerson}>Create User</button> */}
      </fieldset>
      




      
    </div>
  );
}

export default App;
