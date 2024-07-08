import React from 'react'
import '../styles/work.css'
import { collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useState } from 'react'
import { getDocs } from 'firebase/firestore'
import { useEffect } from 'react'


export default function Work() {

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

    useEffect(() => {
        getAllPosts()
    }, [])

    

    return (
        <>
        <div id='work'></div>
        <section className='work'>
            <div className="name">
                <h1 className='abaut'>Work</h1>
            </div>
            <div className="cards">

            {posts.map(post => {                                                                                    
            return (
                <div className="card" data-aos="fade-down">
                    <div className="left-text" >
                        <h2>{post.title}</h2>
                        <p>{post.desc}</p>
                        <a href={post.link}><button>More</button></a>
                    </div>
                    <div className="right-img">
                        <img src={post.imageUrl} alt={post.title}   />
                    </div>
            </div>
            )
          })}

                </div>

        </section>
        </>
    )
}
