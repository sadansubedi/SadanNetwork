import React from 'react'
import "./Rightbar.css"
const Rightbar = () => {
  return (
    <>
    <div className="rightBar">
      <div className="container-right">
        <div className="item-right">
          <span>Suggestions for you </span>
          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jhon Lenon</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismissed</button>
            </div>
          </div>

          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Jhon Lenon</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismissed</button>
            </div>
          </div>
       </div>
       <div className="item-right">
        <span>Latest Activities</span>
        <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
              <span>Jhon Lenon</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
              <span>Jhon Lenon</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
              <span>Jhon Lenon</span> changed their cover picture
              </p>
            </div>
            <span> 1 min ago</span>
          </div>

          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
              <span>Jhon Lenon</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
       </div>
       <div className="item-right">
        <span>Online Friends</span>
        <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online"/>{/*this just a component to give online notation by giving green at top right side in pic */}
              <span >Jhon Lenon</span> 
            </div>
          </div>
          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online"/>{/*this just a component to give online notation by giving green at top right side in pic */}
              <span >Jhon Lenon</span> 
            </div>
          </div>
          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online"/>{/*this just a component to give online notation by giving green at top right side in pic */}
              <span >Jhon Lenon</span> 
            </div>
          </div>
          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online"/>{/*this just a component to give online notation by giving green at top right side in pic */}
              <span >Jhon Lenon</span> 
            </div>
          </div>
          <div className="user-right">
            <div className="userinfo">
              <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online"/>{/*this just a component to give online notation by giving green at top right side in pic */}
              <span >Jhon Lenon</span> 
            </div>
          </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Rightbar