import React,{useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 
import {Context} from '../../context/Context'
import './NewPost.css'


function NewPost() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [file, setFile] = useState("")
    const [url, setUrl] = useState("")
    const [value, setValue] = useState('');
    const [isPending, setisPending] = useState();
    const navigate = useNavigate()
    const { user } = useContext(Context)
  
    useEffect(() => {
        if(url){
           axios.post('http://localhost:4000/api/post/new', {
                media: url,
                title: title,
                body: body,
                user: user._id,
                category: '62b437018be323632c5e1568'
            })
            .then(res => {
                console.log(res)
                setisPending(false)
                alert('Post created')
            }
            ).catch(err => {
                console.log(selectedCategory)
                console.log(err)
            }
            )
        }
    }, [url])

    useEffect(() => {
        getCategory()
    }, [])



    // upload file to cloudinary
    const handleSubmit = async (e) =>  {
        e.preventDefault()
        setisPending(true)
        var formdata = new FormData();
       
        formdata.append("file", file);
        formdata.append("cloud_name", "friend-zone");
        formdata.append("upload_preset", "blogpost");
    
        let res = await fetch(
        "https://api.cloudinary.com/v1_1/friend-zone/image/upload",
        {
            method: "post",
            mode: "cors",
            body: formdata
        }
        )
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
  
    }

    const getCategory = async () => {
        let res = await axios.get('http://localhost:4000/api/category/all')
        if(res.data){
           setCategories(res.data)
        }   
    }

    
    const changeCategory = (cat) => {
        setSelectedCategory(cat)
        console.log(cat)
    }
  
     


  return (
    <div className="container">
        <h1 className='text-center'>
            {isPending? 'loading...':'New Post' }
        </h1>
        <form onSubmit={handleSubmit}>        
            <input type="file" 
                     onChange={(e)=>setFile(e.target.files[0])}
                     className="form-control" 
             />
             <input type='text'
                    className='form-control'
                    placeholder='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /> 
             <textarea className="form-control" rows="3"
                 placeholder='body'
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
              ></textarea> 

            <div>

            <select onChange={(event) => changeCategory(event.target.value)} value={selectedCategory} >
               {categories.map(category => (
                    <option key={category._id} value={category._id}>{category.name}</option>
                ))}
            </select>
            <p>{selectedCategory}</p>
            </div>

             <button type="submit">Submit</button>
        </form>
    </div>

  )
}

export default NewPost