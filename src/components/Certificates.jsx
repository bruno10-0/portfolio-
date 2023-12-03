import { FaCertificate } from "react-icons/fa6";

const Certificates = () => {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 m-4">
          <FaCertificate className="text-yellow-500 text-4xl" />
        </div>
        <div className="absolute bottom-0 left-0 m-4">
          <p className="text-white text-2xl font-bold">Certificados</p>
          <p className="text-white text-sm font-medium">Mis logros perosnales.</p>
        </div>
        <div className="flex items-center justify-center h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://media4.giphy.com/media/U8NAdn927q0tTF5cAM/giphy.gif?cid=ecf05e47r1krhxd60sw44df2tlkh0gq28jerw3zq2ss1ll3j&ep=v1_gifs_search&rid=giphy.gif&ct=g")' }}>
        </div>
      </div>
    </>
  )
}

export default Certificates