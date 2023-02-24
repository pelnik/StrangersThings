import React,{ useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function PostEdit () {
    const location = useLocation();

    const [newPosts, setPosts] = useState(location.state.title);
    const [newfilter, setPostFilter] = useState (location.state.description);
    const [newPrice, setNewPrice] = useState(location.state.price);

    const navigate = useNavigate();

    async function postForm(id, title, description, price) {
        try {
            await postEdit (id, title , description, price);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div>
        <button onClick={() => deletePostFromDOM(post._id, idx)}>delete me</button>
        <Link><button>Edit Me</button></Link>
    </div>
    )
}

export default PostEdit;