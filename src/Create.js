import './index.css'
import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Kaan');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title,body,author};
        setIsPending(true)
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(blog)
        }).then((res)=>{
            console.log(res)
            setIsPending(false)
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>My BLog Page</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""> Blog Title : </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>

                <label htmlFor=""> Blog Body : </label>
                <textarea
                required  value={body} onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label htmlFor="">
                    Blog Author:
                </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Kaan">Kaan</option>
                    <option value="TEST">TEST</option>
                </select>
                {!isPending && <button className='myButton'>Add Blog</button>}
                {isPending && <button className='myButton' disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}

export default Create;
