import ReactPlayer from "react-player"
import "./Post.css"
export default function Post(props) {
    const { id, title, url, image, body, link } = props.data;
    
    return (
        <div className="post" >
          {id && <small>{id}</small>}
          {title && <h1>{title}</h1>}
          {url && <span><ReactPlayer url = {url} /></span>}
          {image && <span><img src = {image} /></span>}
          {body && <p>{body}</p>}
          {link && <p><a href = {link} target="_blank"> Click Here </a>for further information</p>}
        </div>
    )
    
}
