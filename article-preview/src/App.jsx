import iconFacebook from "/images/icon-facebook.svg"
import iconpinterest from "/images/icon-pinterest.svg"
import iconshare from "/images/icon-share.svg"
import icontwitter from "/images/icon-twitter.svg"
import avatar from "/images/avatar-michelle.jpg"
import drawers from "/images/drawers.jpg"
import { useState } from "react"


export default function App() {
  const icons = [iconFacebook, icontwitter, iconpinterest]

  const [isClick, SetIsClick] = useState(false)

  return (
    <main className="min-h-screen flex justify-center items-center bg-LightGrayishBlue">
      <section className="sm:max-w-2xl justify-center sm:justify-normal flex flex-col sm:flex-row bg-white rounded-lg m-8 shadow-lg shadow-LightGrayishBlue">
        {/*part 1: image */}
        <div className="sm:w-1/2 ">
          <img src={drawers} alt="" className="h-full rounded-l-lg" />
        </div>
        {/* part 2: content */}
        <div className="sm:w-3/4 p-4">
          <div className="flex flex-col gap-2 p-2">
            {/* 2.1 text */}
            <h1 className="font-semibold text-xl text-VeryDarkGrayishBlue text-justify">Shift the overall look and feel by adding these wonderful
              touches to furniture in your home</h1>
            <p className="text-GrayishBlue">Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.</p>
            {/* 2.2 avatar */}
            <div className={`flex justify-between mt-2 items-center ${isClick && "hidden sm:flex"}`}>
              <div className="flex flex-row gap-2">
                <img src={avatar} alt="" className="w-12 h-12 rounded-full" />
                <span>
                  <h1 className="text-VeryDarkGrayishBlue font-medium"> Michelle Appleton</h1>
                  <p className="text-GrayishBlue">28 Jun 2020</p>
                </span>
              </div>
              <img onClick={() => SetIsClick(!isClick)} src={iconshare} alt="" className={`w-8 h-8 p-2 rounded-full ${isClick ? "bg-VeryDarkGrayishBlue" : "bg-GrayishBlue "} cursor-pointer`} />
            </div>
          </div>
          {isClick ?
          <div className="sm:absolute sm:ml-52 sm:-mt-28 flex flex-row gap-4 justify-between items-center bg-VeryDarkGrayishBlue rounded-lg p-2">
            <h1 className="text-GrayishBlue">SHARE</h1>
            {icons.map((icon, index) => (
              <span key={index} className="">
                <img src={icon} alt="" className="w-8 h-8" />
              </span>
            ))}
            <img src={iconshare} alt="" className="w-8 h-8 p-2 rounded-full bg-GrayishBlue cursor-pointer sm:hidden" />

          </div> : ""}

        </div>
        


      </section>
    </main>
  )
}