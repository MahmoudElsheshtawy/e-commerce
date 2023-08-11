import React,{useState} from 'react';
import Form from '../layout/Form';
import Button from '../layout/Button';

const AddUser = ({modle}) => {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');


  const handleSubmit =(e)=>{
  
        e.preventDefault();
        console.log(name ,age ,phone)
  }

  return (
  <>
        <form onSubmit={handleSubmit} >
         <Form.Controller>
           <label htmlFor='name'>Name:</label>
           <input  id='name' type='text' placeholder='Enter name'value={name} onChange={(e)=>setName(e.target.value)} />
         </Form.Controller>
         <Form.Controller>
           <label htmlFor='age'>age:</label>
           <input  id='age' type='text' placeholder='Enter your age'value={age} onChange={(e)=>setAge(e.target.value)} />
         </Form.Controller>
         <Form.Controller>
           <label htmlFor='Phone'>Phone:</label>
           <input  id='Gmail' type='text' placeholder='Enter your phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
         </Form.Controller>
           <div>
           <Button type="submit">
             save
           </Button>
           <Button type="reset">reset</Button>
         </div>
      </form>
  </>
  );
}
export default AddUser

// scound way
// const [input, setInput] = useState({
  //   name: '',
  //   age: '',
  //   address: '',
  //   phone: '',
  // });

  // const inputHandler = (e) => {
  //   const key = e.target.id;
  //   const value = e.target.value;
  //   setInput((prevState) => {
  //     return { ...prevState, [key]: value };
  //   });
  // };