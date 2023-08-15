import Link from 'next/link';
import blogData from "../../lib/blogData";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>This is my Blog Page</h1>
      <div className={styles.post}>
        {blogData.map((data)=>{
          return (
            <p key={data.id} className={styles.postPara}> <Link href={{pathname:"/post",query:{id:data.id}}}>{data.title}</Link></p>
          )
        })}
      </div>
    </div>
    
  )
}
