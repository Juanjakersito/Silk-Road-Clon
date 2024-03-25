import './News.css'
function News() {
  return (
    <div className="news">
      <span className="sidebar-title"><u>News:</u> </span>
      <ul>
        <li>The gift that keeps on  <span className='green'>giving</span></li>
        <li>Whos your <span className='green'>favorite</span>?</li>
        <li>Acknowledging  <span className='green'>Heroes</span></li>
        <li>A new anonymous market <span className='green'>The Armory</span>!</li>
        <li> <span className='green'>State of the road Address</span></li>
      </ul>
    </div>
  )
}

export default News