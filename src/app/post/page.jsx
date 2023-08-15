import blogData from "../../lib/blogData";
import styles from './Post.module.css';

// getting the single post as json array of object
let getPost =(id)=>{
  let data = blogData.filter((item)=> item.id ===id);
  return data;
}

export default function Post({ searchParams }) {
  // getting the post id through the search params
  const id= searchParams.id;
  let data = getPost(id);
  return (
    <div>
      <h1 className={styles.text}>This is Details Page From Post</h1>
      <div className={styles.wrapperDetails}>
        {data.map((post)=>{
            return (
              <div key={post.id}>
                <div className={styles.flex}>
                  <span className={styles.id}>ID:&nbsp;{post.id}</span>
                  
                </div>
                <p className={styles.id}>Date:&nbsp;{post.date}</p>
                <p className={styles.title}>Title :&nbsp;{post.title}</p>
                <p className={styles.contentAll}><span className={styles.content}>Content :</span>&nbsp;{post.content}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
