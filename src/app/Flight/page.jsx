import Link from "next/link";
import style from '../page.module.css'
import './Flight.css'

function Flight() {
  return (
    <div className={style.page}>
        <h1>i am inside the flight</h1>
        <div className="nav-link-Flight">
        <Link className="button" href="/Flight/airIndia">airIndia</Link>

        <Link  className="button" href="/Flight/Indigo">Indigo</Link>

        <Link  className="button" href="/Flight/Spice Get">Spice Get</Link>
        </div>
    </div>
  )
}

export default Flight