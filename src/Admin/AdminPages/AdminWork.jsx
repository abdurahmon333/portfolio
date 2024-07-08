import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import { v4 } from 'uuid'
import { db, imgdb } from '../../firebase.config'
import '../AdminStyle/AdminWork.css'

export default function AdminWork() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [link, setLink] = useState('')
  const [img, setImg] = useState(null) // Use null for file input

  const enterWork = collection(db, 'works')

  const createWork = async () => {
    try {
      let imageUrl = ''
      if (img) {
        const imgRef = ref(imgdb, `files/${v4()}`)
        await uploadBytes(imgRef, img)
        imageUrl = await getDownloadURL(imgRef)
      }

      await addDoc(enterWork, {
        title: title,
        desc: desc,
        link: link,
        imageUrl: imageUrl, // Save image URL in Firestore
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='adminform'>
      <div className='name'>
        <h1>About</h1>
      </div>

      <input
        type='text'
        placeholder='Title'
        onChange={event => setTitle(event.target.value)}
      />
      <br />
      <textarea
        placeholder='Text'
        onChange={event => setDesc(event.target.value)}
      ></textarea>

      <input
        type='url'
        placeholder='Link'
        onChange={event => setLink(event.target.value)}
      />

      <input
        type='file'
        onChange={event => setImg(event.target.files[0])}
        accept='image/*,.png,.jpg,.gif,.web'
      />
      <br />
      <button className='button' onClick={createWork}>
        Submit
      </button>
    </div>
  )
}
