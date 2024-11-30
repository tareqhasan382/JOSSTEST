import Image from "next/image";
import { LuHome } from "react-icons/lu";
import imageHero from "../assets/image (1).png";
import union from "../assets/Union.png";
import icon_1 from "../assets/fi_17437326.png";
import icon_2 from "../assets/fi_7857923.png";
import icon_3 from "../assets/ranking 1.png";
import icon_4 from "../assets/fi_7857952.png";
import icon_5 from "../assets/fi_3131489.png";
import man_image from "../assets/Image.png";
import man_handShake from "../assets/Factory Image.png";
import map from "../assets/Photo Image.png";
import {
  ArrowLeft,
  ArrowRight,
  Clock9,
  MapPin,
  MapPinned,
  Phone,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className=" relative -top-[110px]  bg-[url('/assets/Image.png')] bg-cover bg-center bg-no-repeat  h-[600px] z-0">
        <div className=" w-full absolute -bottom-0 flex items-center justify-center mx-auto ">
          <div className=" w-[1170px] h-[90px] flex flex-col it justify-between mb-10 ">
            <ul className="w-full flex flex-row items-center gap-6 pl-4 text-white text-xl ">
              <li className=" pr-4 ">
                <LuHome size={30} />
              </li>
              <li className=" list-disc pr-4 capitalize ">company</li>
              <li className=" list-disc capitalize ">about us</li>
            </ul>
            <h1 className="text-white text-6xl font-bold ">About us</h1>
          </div>
        </div>
      </div>
      <div className="relative -top-[110px] bg-[#EEEDE9] h-[700px] flex flex-col items-center justify-center ">
        <div className="w-[1169px] h-[600px] grid grid-cols-2 items-center justify-between gap-10 mt-10 ">
          <Image
            src={imageHero}
            width={600}
            height={600}
            alt="image"
            priority
            className=" w-[500px] h-[500px]  "
          />
          <div className=" w-full h-full flex flex-col items-start justify-center ">
            <h1 className=" text-[#002331] text-6xl font-bold leading-[1.2] ">
              Why are we <br />
              <span className=" text-[#00A5E3] ">different?</span>
            </h1>
            <p className=" mt-6 ">
              MDF has been the front-runner in applying innovation at work. This
              simple philosophy has been the cornerstone of all our processes
              and technologies. It has led us to design and deliver contemporary
              lifestyle statements that have become synonymous with modern
              living.
            </p>
          </div>
        </div>
      </div>
      <div className="relative -top-[110px] h-[2134px] flex flex-col items-center justify-start ">
        <div className="absolute h-[100px] w-full top-0 bg-gradient-to-t from-[#FFFFFF] to-[#EEEDE9]"></div>
        <div className=" mt-[100px] w-[1170px] grid grid-cols-2 gap-10 items-center justify-center h-[450px] py-2 ">
          <div className=" w-full ">
            <h1 className=" text-6xl font-bold ">
              Our <span className=" text-[#00A5E3] ">values</span>
            </h1>
            <p className=" py-6 ">
              We believe in offering top-quality products, driving innovation,
              and <br /> being eco-friendly
            </p>
            <div className=" w-full flex flex-col items-start gap-3 ">
              <div className=" w-full flex items-center justify-start ">
                <div className=" w-[50px] h-[50px] bg-black rounded "></div>
                <div className=" pl-4  ">
                  <h1 className=" text-lg font-semibold ">Quality</h1>
                  <p>We never compromise on the quality of our products.</p>
                </div>
              </div>
              <div className=" w-full flex items-center justify-start ">
                <div className=" w-[50px] h-[50px] bg-black rounded "></div>
                <div className=" pl-4  ">
                  <h1 className=" text-lg font-semibold ">Innovation</h1>
                  <p>
                    We are constantly innovating to bring the best solutions to
                    our customers.
                  </p>
                </div>
              </div>
              <div className=" w-full flex items-center justify-start ">
                <div className=" w-[50px] h-[50px] bg-black rounded "></div>
                <div className=" pl-4  ">
                  <h1 className=" text-lg font-semibold ">Sustainability</h1>
                  <p>
                    We are committed to eco-friendly practices and materials.
                  </p>
                </div>
              </div>
              <div className=" w-full flex items-center justify-start ">
                <div className=" w-[50px] h-[50px] bg-black rounded "></div>
                <div className=" pl-4  ">
                  <h1 className=" text-lg font-semibold ">Innovation</h1>
                  <p>
                    We are constantly innovating to bring the best solutions to
                    our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={union}
            width={400}
            height={400}
            alt="union-image"
            priority
          />
        </div>
        <div className=" w-[1172px] h-[627px] mt-24 ">
          <div className=" w-full h-[86px] ">
            <h1 className=" text-6xl font-bold ">
              Code of <span className=" text-[#00A5E3] ">conduct</span>
            </h1>
          </div>
          <div className=" w-full h-[450px] flex mt-10 rounded border border-1 border-black ">
            <div className=" flex flex-col items-start justify-between w-[370px] h-[450px] border border-r-1 border-black px-6 py-10 ">
              <div className=" bg-[#213A59] w-[50px] h-[50px] rounded flex items-center justify-center ">
                <Image
                  src={icon_1}
                  width={40}
                  height={40}
                  alt="icon"
                  priority
                  className="w-[30px] h-[30px]  "
                />
              </div>
              <div className=" w-full flex flex-col items-start gap-6   ">
                <h4 className=" font-semibold ">Responsibility</h4>
                <p>
                  We are committed to ethical decision-making, environmental
                  sustainability, and social responsibility in all aspects of
                  our business.
                </p>
                <button className=" flex flex-col items-center justify-center ">
                  <span className=" flex items-center justify-center ">
                    Download PDF <ArrowRight />
                  </span>
                  <span className=" w-full h-[1px] bg-black "></span>
                </button>
              </div>
            </div>
            <div className=" w-[200px] h-[450px] border border-r-1 border-black flex flex-col items-start justify-between px-6 py-10">
              <div className=" bg-[#213A59] w-[50px] h-[50px] rounded flex items-center justify-center ">
                <Image
                  src={icon_2}
                  width={40}
                  height={40}
                  alt="icon"
                  priority
                  className="w-[30px] h-[30px]  "
                />
              </div>
              <div className=" w-full flex flex-col items-start gap-6   ">
                <button className=" flex items-center justify-center font-semibold ">
                  Accountability
                </button>
              </div>
            </div>
            <div className=" w-[200px] h-[450px] border border-r-1 border-black flex flex-col items-start justify-between px-6 py-10">
              <div className=" bg-[#213A59] w-[50px] h-[50px] rounded flex items-center justify-center ">
                <Image
                  src={icon_3}
                  width={40}
                  height={40}
                  alt="icon"
                  priority
                  className="w-[30px] h-[30px]  "
                />
              </div>
              <div className=" w-full flex flex-col items-start gap-6   ">
                <button className=" flex items-center justify-center font-semibold ">
                  Compliance
                </button>
              </div>
            </div>
            <div className=" w-[200px] h-[450px] border border-r-1 border-black flex flex-col items-start justify-between px-6 py-10">
              <div className=" bg-[#213A59] w-[50px] h-[50px] rounded flex items-center justify-center ">
                <Image
                  src={icon_4}
                  width={40}
                  height={40}
                  alt="icon"
                  priority
                  className="w-[30px] h-[30px]  "
                />
              </div>
              <div className=" w-full flex flex-col items-start gap-6   ">
                <button className=" flex items-center justify-center font-semibold ">
                  Integrity
                </button>
              </div>
            </div>
            <div className=" w-[200px] h-[450px] border border-r-1 border-black flex flex-col items-start justify-between px-6 py-10">
              <div className=" bg-[#213A59] w-[50px] h-[50px] rounded flex items-center justify-center ">
                <Image
                  src={icon_5}
                  width={40}
                  height={40}
                  alt="icon"
                  priority
                  className="w-[30px] h-[30px]  "
                />
              </div>
              <div className=" w-full flex flex-col items-start gap-6   ">
                <button className=" flex items-center justify-center font-semibold ">
                  Teamwork
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start w-[1307px] h-[626px] mt-24 ">
          <div className=" w-full flex items-center justify-center ">
            <div className=" w-[835px] h-[800px] ">
              <h1 className=" w-full text-center text-4xl font-bold py-6 ">
                Our <span className=" text-[#00A5E3] ">Milestones</span>
              </h1>
              <Image
                src={man_image}
                width={800}
                height={600}
                alt="man_image"
                priority
                className=" h-[500px] object-cover "
              />
            </div>
            <div className=" flex flex-col gap-10 w-[391px] h-[525px]  ">
              <div className=" w-full flex items-start justify-center gap-10 ">
                <h1 className=" font-bold text-xl ">2025</h1>
                <h1 className=" font-bold text-xl ">2024</h1>
                <h1 className=" font-bold text-xl ">2023</h1>
                <h1 className=" font-bold text-xl ">2022</h1>
                <h1 className=" font-bold text-xl ">2021</h1>
              </div>
              <h1 className=" text-2xl font-bold ">
                A Legacy of Craftsmanship and Innovation
              </h1>
              <p>
                Founded with a passion for wood craftsmanship, MDF Muliboard
                Industries Ltd has grown into a trusted name in the industry.
                Our journey is marked by continuous improvement, innovative
                product development, and a steadfast commitment to customer
                satisfaction.
              </p>
              <div className=" w-full flex items-center gap-10 text-[#00A5E3] ">
                <button>
                  <ArrowLeft />
                </button>
                <button>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[200px] w-full bottom-0 bg-gradient-to-t from-[#EEEDE9] to-[#FFFFFF]"></div>
      </div>
      <div className="relative -top-[110px] w-full h-[700px] bg-[#EEEDE9] flex items-center justify-center ">
        <div className=" w-full flex items-center justify-center gap-20 ">
          <div className=" w-[500px] h-[600px] flex flex-col items-start gap-8 ">
            <h1 className=" text-4xl font-bold ">
              Our <hr />
              <span className=" text-blue-400 ">commitment</span>
            </h1>
            <p>Dedicated to Excellence and Responsibility</p>
            <div className=" w-full flex flex-col items-start gap-6 mt-6 ">
              <div className=" flex items-center ">
                <div className=" w-[50px] h-[50px] bg-black rounded "></div>
                <div className=" pl-2 ">
                  <h1 className=" font-bold ">Sustainable Practices</h1>
                  <p>Using eco-friendly materials and processes.</p>
                </div>
              </div>
              <div className=" flex items-center ">
                <div className=" w-[50px] h-[50px] bg-black rounded "></div>
                <div className=" pl-2 ">
                  <h1 className=" font-bold ">Customer Satisfaction</h1>
                  <p>Exceeding customer expectations with every product.</p>
                </div>
              </div>
              <div className=" flex items-center ">
                <div className=" w-[50px] h-[50px] bg-black rounded "></div>
                <div className=" pl-2 ">
                  <h1 className=" font-bold ">Community Impact</h1>
                  <p>Contributing positively to the communities we serve.</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[500px] h-[600px] ">
            <Image
              src={man_handShake}
              width={500}
              height={600}
              alt="Man Image"
              priority
              className="w-[500px] h-[550px]  "
            />
          </div>
        </div>
      </div>
      <div className="relative -top-[110px] w-full h-[700px] bg-[#EEEDE9] flex items-center justify-center ">
        <div className=" w-full flex items-center justify-center gap-20 ">
          <div className=" w-[500px] h-[600px] ">
            <Image
              src={map}
              width={500}
              height={600}
              alt="Man Image"
              priority
              className="w-[500px] h-[550px]  "
            />
          </div>
          <div className=" w-[500px] h-[600px] flex flex-col items-start gap-8 ">
            <h1 className=" text-4xl font-bold ">
              Our
              <span className=" text-blue-400 "> factory</span>
            </h1>
            <p>
              We have dealer’s all over in the country and around the glove,
              supporting us with every requirements.
            </p>
            <div className=" w-full flex flex-col items-start gap-6 mt-6 ">
              <div className=" pl-2 ">
                <div className=" w-full flex items-center ">
                  <MapPin className=" text-[#00A5E3]  " />
                  <h1 className=" pl-2 font-bold ">Located in:</h1>
                </div>
                <p>Al Amin Icon Center</p>
              </div>
              <div className=" pl-2 ">
                <div className=" w-full flex items-center ">
                  <MapPinned className=" text-[#00A5E3]  " />
                  <h1 className=" pl-2 font-bold ">Address:</h1>
                </div>
                <p>6th Floor, Icon Center, 57/4</p>
                <p> Progoti Shoroni Vatara, Dhaka 1229</p>
              </div>
              <div className=" pl-2 ">
                <div className=" w-full flex items-center ">
                  <Clock9 className=" text-[#00A5E3]  " />
                  <h1 className=" pl-2 font-bold ">Hours:</h1>
                </div>
                <p>9:30 AM (Sat - Thu)</p>
              </div>
              <div className=" pl-2 ">
                <div className=" w-full flex items-center ">
                  <Phone className=" text-[#00A5E3]  " />
                  <h1 className=" pl-2 font-bold ">Phone:</h1>
                </div>
                <p>+880 1888-826300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative -top-[109px] w-full h-[200px] ">
        <div className=" absolute w-full bg-white h-[309px] flex items-center justify-center gap-20 ">
          <div className=" w-[500px] h-[200px] flex flex-col items-start justify-between   ">
            <h1 className=" text-4xl font-semibold ">
              Order our products to <br /> build your dream.
            </h1>
            <button className=" text-left flex items-center ">
              <span className=" pr-4 ">Quiry now</span> <ArrowRight />
            </button>
          </div>
          <div className=" flex items-start gap-6 ">
            <div className=" w-[290px] h-[250px] bg-black rounded "></div>
            <div className=" w-[290px] h-[250px] bg-black rounded "></div>
          </div>
        </div>
      </div>
    </>
  );
}
