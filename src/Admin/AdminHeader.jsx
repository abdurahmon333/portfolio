import { Link } from "react-router-dom";
import '../Admin/AdminStyle/AdminHeader.css'

export default function Header() {
  return (
    <div className="header">
        <ul>
             <li><Link to="">Create Work</Link></li>
             <li><Link to='AllWork'>All Work</Link></li>
        </ul>
    </div>
  )
}
