
import { useEffect} from 'react';
import mainPic from '../Images/main.png'

const LeftSection = ({myObjects,currentSection,sectionRef_1, sectionRef_2, sectionRef_3 ,sectionRef_4}) => {

 
  useEffect(() => 
  {
    const handleScroll = () => {
      const sections = ['mySection_1', 'mySection_2', 'mySection_3','mySection_4'];
  
      for (const section of sections) {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
  
        if (rect.top <= 10 && rect.bottom >= 0) {
            currentSection(section)
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);
  
  return (
    <div className="w-full hideIndex:w-4/6 flex flex-col">
        <div className="flex justify-center w-full rounded-2xl">
            <img src={mainPic} alt="Sorry" className="w-full max-w-full"/>
            
        </div>
        <div className="flex flex-col w-full max-w-full px-3.5 ">
            <h3 className="font-bold text-sm leading-5 shrink-0 font-montserrat text-[#4C4C4C] mt-[46px]">By <span className="text-[#592EA9]">John Doe</span>   l   May 23, 2022</h3>
            <div className="mt-3.5 w-full max-w-full">
                <h1 className="font-montserrat font-medium lg:text-2xl lg:leading-10">Top 10 Mobile App Development Companies In The US (Updated List 2024)</h1>
            </div>
            <div className="flex flex-col w-full max-w-full mt-[30px]">
                <h2 className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">Finding the finest options in the always-changing world of food delivery services can be challenging, especially for foodies looking for delicious foods and practical dining experiences. As 2023 September approaches, the culinary world is excited about the newest developments in food delivery apps and the variety of delectable gastronomic treats at our disposal. The gems that satisfy the needs and tastes of discerning foodies across the United States must be found among the wide sea of food delivery apps in this era of unmatched convenience and choice.</h2>
            </div>

            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h2 ref={sectionRef_1} className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">This guide will reveal the top 5 food delivery apps in the USA for 2024. These apps have not only endured over time, but they have also continually changed to satisfy their users’ changing demands. These platforms offer a gastronomic journey, whether you are yearning for a gourmet meal, demanding international flavors, or simply looking for comfort food delivered right to your house.</h2>
            </div>
            {myObjects.map((myObject) => (
                <div className="flex flex-col w-full max-w-full mt-[40px]" >
                    <h1 ref={myObject.ID === "mySection_1" ? sectionRef_1 : myObject.ID === "mySection_2" ? sectionRef_2 : myObject.ID === "mySection_3" ? sectionRef_3 : sectionRef_4 } id={myObject.ID}  className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">{myObject.HEADING}</h1>
                    <h2 className={`font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76] ${myObject.PARA === null ? ' hidden' : 'block'}`}>{myObject.PARA}</h2>
                    <ul className={`list-disc ml-[30px] mt-1 ${myObject.ListItemFirst === null ? ' hidden' : 'block'}`}>
                        <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">{myObject.ListItemFirst}</li>
                        <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">{myObject.ListItemSecond}</li>
                    </ul>
                </div>
            ))}

            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h1  className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">Development of Apps for Food Delivery:</h1>
                <ul className="list-disc ml-[30px] mt-1">
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">The demand for quick dining options, increasing smartphone usage, and evolving customer preferences have collectively fueled the remarkable growth of the best delivery food near me industry in the USA.</li>
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">With a large concentration of users and restaurant partners, major cities like New York City, Los Angeles, Chicago, and San Francisco have been at the forefront of this trend.</li>
                </ul>
            </div>
            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h1  className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">Development of Apps for Food Delivery:</h1>
                <ul className="list-disc ml-[30px] mt-1">
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">The demand for quick dining options, increasing smartphone usage, and evolving customer preferences have collectively fueled the remarkable growth of the best delivery food near me industry in the USA.</li>
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">With a large concentration of users and restaurant partners, major cities like New York City, Los Angeles, Chicago, and San Francisco have been at the forefront of this trend.</li>
                </ul>
            </div>
            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h1  className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">Development of Apps for Food Delivery:</h1>
                <ul className="list-disc ml-[30px] mt-1">
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">The demand for quick dining options, increasing smartphone usage, and evolving customer preferences have collectively fueled the remarkable growth of the best delivery food near me industry in the USA.</li>
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">With a large concentration of users and restaurant partners, major cities like New York City, Los Angeles, Chicago, and San Francisco have been at the forefront of this trend.</li>
                </ul>
            </div>
            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h1  className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">Development of Apps for Food Delivery:</h1>
                <ul className="list-disc ml-[30px] mt-1">
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">The demand for quick dining options, increasing smartphone usage, and evolving customer preferences have collectively fueled the remarkable growth of the best delivery food near me industry in the USA.</li>
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">With a large concentration of users and restaurant partners, major cities like New York City, Los Angeles, Chicago, and San Francisco have been at the forefront of this trend.</li>
                </ul>
            </div>
            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h1  className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">Development of Apps for Food Delivery:</h1>
                <ul className="list-disc ml-[30px] mt-1">
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">The demand for quick dining options, increasing smartphone usage, and evolving customer preferences have collectively fueled the remarkable growth of the best delivery food near me industry in the USA.</li>
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">With a large concentration of users and restaurant partners, major cities like New York City, Los Angeles, Chicago, and San Francisco have been at the forefront of this trend.</li>
                </ul>
            </div>
            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h1 className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">Development of Apps for Food Delivery:</h1>
                <ul className="list-disc ml-[30px] mt-1">
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">The demand for quick dining options, increasing smartphone usage, and evolving customer preferences have collectively fueled the remarkable growth of the best delivery food near me industry in the USA.</li>
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">With a large concentration of users and restaurant partners, major cities like New York City, Los Angeles, Chicago, and San Francisco have been at the forefront of this trend.</li>
                </ul>
            </div>
            <div className="flex flex-col w-full max-w-full mt-[40px]">
                <h1 className="font-montserrat font-semibold text-base leading-7 not-italic text-[#000000]">Development of Apps for Food Delivery:</h1>
                <ul className="list-disc ml-[30px] mt-1">
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">The demand for quick dining options, increasing smartphone usage, and evolving customer preferences have collectively fueled the remarkable growth of the best delivery food near me industry in the USA.</li>
                    <li className="font-montserrat font-normal text-base leading-7 not-italic text-[#6D6E76]">With a large concentration of users and restaurant partners, major cities like New York City, Los Angeles, Chicago, and San Francisco have been at the forefront of this trend.</li>
                </ul>
            </div>

        </div>
        
    </div>
  )
}

export default LeftSection