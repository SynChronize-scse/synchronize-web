import devendraSirImage from "../assets/images/devendra-sir.jpg";
import chandansirImage from "../assets/images/chandan-sir.jpg";
import swarupsirImage from "../assets/images/swarup-sir.jpg";

const Team = () => {
  return (
    <div className="bg-dark-400 text-primary-400 h-full w-full text-center font-[AdieuRegular]">
      <h2 className="text-8xl pt-5">Team</h2>

      {/* Faculty Section */}
      <div className="mx-auto my-20">
        <h2 className="text-3xl my-8">Faculty Coordinators</h2>
        <div className="text-white text-2xl grid grid-cols-1 min-[400px]:grid-cols-3 gap-5 md:gap-10 w-fit mx-auto">
          <div className="flex flex-col items-center">
            <img
              className="h-28 w-28 rounded-full"
              src={devendraSirImage}
              alt=""
            />
            <span className="mt-2 text-base sm:text-sm">
              Dr. Devendra K Yadav
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-28 w-28 rounded-full"
              src={chandansirImage}
              alt=""
            />
            <span className="mt-2 text-base sm:text-sm">Dr. Chandan Misra</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-28 w-28 rounded-full"
              src={swarupsirImage}
              alt=""
            />
            <span className="mt-2 text-base sm:text-sm">
              Dr. Swarup Chattopadhyay
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        {/* Supervisor Section */}
        <div className="">
          <span className="text-3xl">Supervisor</span>
          <ul className="text-2xl text-white">
            <li className="text-base">Mohit Singh</li>
          </ul>
        </div>

        {/* Coordinators Section */}
        <div className="">
          <span className="text-3xl">Coordinators</span>

          <ul className="text-white text-2xl">
            <li className="text-base">Abhilasha Panda</li>
            <li className="text-base">Sumit Kumar Yadav</li>
          </ul>
        </div>

        {/* Deputy Coordinators Section */}
        <div className="">
          <span className="text-3xl">Deputy Coordinators</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Swandan Dash</li>
            <li className="text-base">Sonali Nayak</li>
          </ul>
        </div>

        {/* Treasurers Section */}
        <div className="">
          <span className="text-3xl">Treasurers</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Ansika Mohanty</li>
            <li className="text-base">Divyanshu Ajit D'Silva</li>
          </ul>
        </div>

        {/* Tech Section */}
        <div className="">
          <span className="text-3xl">Tech Team</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Ayush Tripathy</li>
            <li className="text-base">Anupam Choudhary</li>
            <li className="text-base">Bismay Sarangi</li>
            <li className="text-base">Badri Vishal Padhy</li>
            <li className="text-base">Nayab Mirza</li>
            <li className="text-base">Aryan Raj</li>
            <li className="text-base">Anusha Mohanty</li>
            <li className="text-base">Abhibita Sanya Priyadarshani</li>
            <li className="text-base">Sneha Grace</li>
            <li className="text-base">Mohammad Ayaan</li>
            <li className="text-base">Ujjwal Prajapati</li>
            <li className="text-base">Jessica Maria Ekka</li>
            <li className="text-base">Ramandeep Pattnaik</li>
            <li className="text-base">Jivitesh Barik</li>
          </ul>
        </div>

        {/* Sponsorship Section */}
        <div className="">
          <span className="text-3xl">Sponsorship Team</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Sashwat Swarup Panda</li>
            <li className="text-base">Siddharth Sushil </li>
            <li className="text-base">Varun Satapathy</li>
            <li className="text-base">Ishan Roy</li>
            <li className="text-base">Vrinda Patnaik</li>
            <li className="text-base">Ansumaan Patnaik</li>
            <li className="text-base">Colin Michael D'Rozario</li>
            <li className="text-base">Rhea Bachetti</li>
            <li className="text-base">Joe Mathew</li>
            <li className="text-base">Kaif Khurshid</li>
            <li className="text-base">Hrisita Mohapatra</li>
            <li className="text-base">Durga Dhar</li>
          </ul>
        </div>

        {/* Marketing Section */}
        <div className="">
          <span className="text-3xl">Marketing</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Soham Kundu</li>
            <li className="text-base">Siddhant Pradhan</li>
            <li className="text-base">Priyanshu Pati</li>
            <li className="text-base">Antariksh Mohapatra</li>
            <li className="text-base">Durga</li>
            <li className="text-base">Eshani</li>
            <li className="text-base">Marian</li>
            <li className="text-base">Nilesh</li>
            <li className="text-base">Reepak</li>
            <li className="text-base">Sneha</li>
            <li className="text-base">Shreeya</li>
          </ul>
        </div>

        {/* Events Section */}
        <div className="">
          <span className="text-3xl">Events</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Saishrita Mohapatra</li>
            <li className="text-base">Simran Osta</li>
            <li className="text-base">Sidhant Sharma</li>
            <li className="text-base">Subhasree Das</li>
            <li className="text-base">Durga Prasad Dhar</li>
            <li className="text-base">Subhasis Panda</li>
            <li className="text-base">Pratirupa</li>
            <li className="text-base">Abhibita Sanya</li>
            <li className="text-base">Yogapriya Sahoo</li>
            <li className="text-base">Vrinda</li>
            <li className="text-base">Eshani Mishra</li>
            <li className="text-base">Ansumaan Pattnaik</li>
            <li className="text-base">Harshita Patra</li>
            <li className="text-base">Soumya Prakash Satapathy</li>
            <li className="text-base">Mohammed Ayaan</li>
            <li className="text-base">Anam Saqib</li>
            <li className="text-base">Kaif</li>
            <li className="text-base">Manish</li>
          </ul>
        </div>

        {/* Logistics Section */}
        <div className="">
          <span className="text-3xl">Logistics</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Deepak Kumar</li>
            <li className="text-base">Manish Nanda</li>
            <li className="text-base">Aditya Pandey</li>
            <li className="text-base">Rounak Raj</li>
            <li className="text-base">Sabyasachi Tripathy</li>
            <li className="text-base">Satya Ranjan Dash</li>
            <li className="text-base">Shashikant Chinara</li>
            <li className="text-base">Swayam Suresh Tripathy</li>
            <li className="text-base">Deepak Sai Mohapatra</li>
            <li className="text-base">Mohammad Ayaan</li>
            <li className="text-base">Swayam Prakash</li>
          </ul>
        </div>

        {/* Hospitality Section */}
        <div className="">
          <span className="text-3xl">Hospitality</span>
          <ul className="text-white text-2xl">
            <li className="text-base">Adyasha Jha</li>
            <li className="text-base">Suraj Maharana</li>
            <li className="text-base">Abhisekh Dash</li>
            <li className="text-base">Ishika Bandopadhyay</li>
            <li className="text-base">Ananya Verma</li>
            <li className="text-base">Ankit Choudhury</li>
            <li className="text-base">Vrinda Patnaik</li>
            <li className="text-base">Anam Saqib</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
