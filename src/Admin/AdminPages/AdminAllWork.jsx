import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase.config'
import '../AdminStyle/AdminAllWork.css'

export default function AdminAllWork() {
  const [posts, setPosts] = useState([])

  const allPostCollection = collection(db, 'works')

  const getAllPosts = async () => {
    try {
      const data = await getDocs(allPostCollection)
      const postsArray = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setPosts(postsArray)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async postId => {
    try {
      await deleteDoc(doc(db, 'works', postId))
      setPosts(posts.filter(post => post.id !== postId))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div className='cards'>
      {posts.map(post => (
        <div className='admin-card' key={post.id}>
          <div className='left-text'>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <div className='buttons'>
              <a href={post.link}>
                <button>More</button>
              </a>
              <button
                onClick={() => deletePost(post.id)}
                style={{ backgroundColor: 'red' }}
              >
                Delete
              </button>
            </div>
          </div>
          <div className='right-img'>
            <img src={post.imageUrl} alt={post.title} />
          </div>
        </div>
      ))}
    </div>
  )
}
