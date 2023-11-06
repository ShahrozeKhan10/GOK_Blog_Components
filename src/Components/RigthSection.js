import React, {useState} from 'react'

const RigthSection = ({currentSec,scrollToSection_1,scrollToSection_2,scrollToSection_3,scrollToSection_4}) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };
  return (
    <nav className=" hidden hideIndex:block p-6 fixed max-w-1/4 bg-[#F3F3F3] rounded-lg float-right top-12 right-0 lg:right-[97px] w-1/4 min-h-2/3 ">
        <h1 className=" font-semibold text-3xl font-montserrat">On this Article</h1>
        <ul>
            <li onClick={() => {scrollToSection_1()}} className="hover:cursor-pointer"><p className={`mt-2 font-montserrat font-medium text-lg ${currentSec === "mySection_1" ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'} `}>Food delivery apps in USA:</p></li>
            <li onClick={() => {scrollToSection_2()}} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg   ${currentSec === "mySection_2" ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Apps for foodies:</p></li>
            <li onClick={() => {scrollToSection_3()}} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${currentSec === "mySection_3" ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Overview of the market:</p></li>
            <li onClick={() => {scrollToSection_4()}} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${currentSec === "mySection_4" ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Development of Apps for Food Delivery:</p></li>
            <li onClick={() => handleButtonClick(5)} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${activeButton === 5 ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>A Variety of Food Options:</p></li>
            <li onClick={() => handleButtonClick(6)} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${activeButton === 6 ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Practicality and Accessibility:</p></li>
            <li onClick={() => handleButtonClick(7)} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${activeButton === 7 ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Delivery Accuracy and Speed:</p></li>
            <li onClick={() => handleButtonClick(8)} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${activeButton === 8 ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Restaurant Collaborations:</p></li>
            <li onClick={() => handleButtonClick(9)} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${activeButton === 9 ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Reward Systems and Discounts:</p></li>
            <li onClick={() => handleButtonClick(10)} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${activeButton === 10 ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Repercussions on restaurants</p></li>
            <li onClick={() => handleButtonClick(11)} className="hover:cursor-pointer"><p className= {`mt-2 font-montserrat font-medium text-lg ${activeButton === 11 ? 'text-[#CD353E] pl-2 border-l border-l-4 border-red-500' : 'text-[#000000]'}`}>Upcoming Trends:</p></li>
        </ul>
    </nav>
  )
}

export default RigthSection
