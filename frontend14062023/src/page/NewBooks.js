import React from 'react'
import {BsCloudUploadFill} from 'react-icons/bs'
import { Await } from 'react-router-dom'
import { ImagetoBase64 } from '../utility/ImagetoBase64'
const NewBooks = () => {

 const uploadImage = async(e) =>{
  //  console.log(e.files)
  // const data= Await ImagetoBase64(e.target.files[0])
   // console.log(data)

  }
  return (
    <div className='p-4 '>
    <form className='m-auto w-full max-w-md shadow flex flex-col p-1 bg-white'>
      <label htmlFor='name'> Name </label>
      <input type={'text'} name= "Book Title" className='bg-slate-200 p-1 m-1'/>

      <label htmlFor='category'>Category</label>
      <select className='bg-slate-200 p-1 m-1' id='category'>
        <option>Motivational</option>
        <option>Horror</option>
        <option>Biography</option>
        <option>Romance</option>
        <option>Drama</option>
      </select>

      <label htmlFor='image'>Image
      <div className='h-40 w-full bg-slate-200 my-3 rounded flex items-center justify-center cursor-pointer '>
      <span className='text-4xl flex'><BsCloudUploadFill/></span>
      <input type={'file'} accept='/image' id='image' onChange={uploadImage} className='hidden'/>
      </div>
      </label>


      

      <label htmlFor='price' className='m-1'>Price</label>
      <input type={'text'} name='category' className='bg-slate-200 p-1 m-1'/>
      
      <label htmlFor='description'>Description</label>
      <textarea rows={3} type={'text'} name='description' className='bg-slate-200 p-1 m-1 resize-none'/>
      
      <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-bold drop-shadow mt-2'>Save</button>
    </form>
    
    </div>
  )
}

export default NewBooks

















// import React, { useEffect, useState } from 'react'
// import axios from "axios";

// const NewBooks = () => {

//   const [book, setBook] = useState([]);

//   useEffect(() => {
//     loadBook();
//   },[]);

//   const loadBook= async () => {
//     const result = await axios.get("http://localhost:8090/api/v1/books")
//     setBook(result.data);
//   }

//   return (
//     <div className='container py-4'>

//       <h1><center> Study Books </center></h1>

//         <div className='py-4 '>

//   <table class="table border shadow  w-full h-full">
//     <thead class="thead-dark ">
//       <tr className='container text-center'>
//         <th scope="col  ">Sr. No</th>
//         <th scope="col">Image </th>
//         <th scope="col">Title</th>
//         <th scope="col">Author</th>
//         <th scope="col">Action</th>
//       </tr>
//     </thead>

//   <tbody>
//     {
//        book.map((book,index) => (
//         <tr className='text-center'>
//         <th scope="row" key={index} > {index+1} </th>
//         <td > {book.image} </td>
//         <td> {book.title} </td>
//         <td> {book.author}</td>
//         <td>
//           <button className='btn btn-primary mx-2'> View </button>
//         </td>
//       </tr>
//        ))
//     }
//   </tbody>
  
// </table>
//         </div>
//     </div>
//   )
// }

// export default NewBooks