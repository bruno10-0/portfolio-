import { MdOutlineWork } from "react-icons/md";

const Project = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 left-0 m-4">
        <MdOutlineWork className="text-white text-4xl" />
      </div>
      <div className="absolute bottom-0 left-0 m-4">
        <p className="text-white text-2xl font-bold">Proyectos</p>
        <p className="text-white text-sm font-medium">Mis últimos <strong className="text-green-600">proyectos realizados.</strong></p>
      </div>
      <div className="flex items-center justify-center h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejk2bXkxNTh0bWlpcmZremhjZzR6ZDZ2aWh1MDFxb280Z2s5cHIzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif")' }}>
      </div>
    </div>
  );
};

export default Project;
