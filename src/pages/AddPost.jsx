import {useState} from "react";

const AddPost = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const handleChangePostTitle = (event) => {
        setPostTitle(event.target.value);
    }

    const handleChangePostContent = (event) => {
        setPostContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.prevent.default;
    }
    return (
        <>
            <h1>Add a post</h1>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={postTitle} id="title" onChange={handleChangePostTitle}/>
                </div>
                <div>
                    <label htmlFor="post-content"></label>
                    <textarea name="post-content" id="post-content" cols="30" rows="10" value={postContent}
                              onChange={handleChangePostContent}></textarea>
                </div>
                <input type={"submit"} onSubmit={handleSubmit} value={"Add"}/>
            </form>
        </>
    )
}

export default AddPost;
