import { FaDownload,FaAmazonPay } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiHappyAlt } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";

const Services = [
  {
    id: 1,
    logo: <FaDownload className="text-2xl text-indigo-500" />,
    title: "Register for free",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
  },
  {
    id: 2,
    logo: <BsFillPersonCheckFill className="text-2xl text-indigo-500" />,
    title: "Verify your indentity",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
  },
  {
    id: 3,
    logo: <CiBank className="text-2xl text-indigo-500" />,
    title: "Add reciept's bank details.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
  },
  {
    id: 4,
    logo: <FaAmazonPay className="text-2xl text-indigo-500" />,
    title: "Pay for your transfer",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
  },
  {
    id: 5,
    logo: <GiReceiveMoney className="text-2xl text-indigo-500" />,
    title: "Choose an amount to spend",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
  }, {
    id: 6,
    logo: <BiHappyAlt className="text-2xl text-indigo-500" />,
    title: "That's it.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
  },
];

export default Services;
