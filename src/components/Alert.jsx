import { BsCheckLg } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Alert = ({text}) => {
  return (
    <div className="w-80 md:w-auto flex items-center justify-center fixed bottom-5  left-1/2 transform -translate-x-1/2 bg-blue-500 text-white dark:bg-slate-900 dark:text-green-500 p-4 rounded-lg select-none shadow-lg">
      {text}
      <BsCheckLg className="ml-2"/>
    </div>
  )
}
export default Alert
