import Image from "next/image";
import ayisha from "./ayishakhan.jpg";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row bg-black p-4 min-h-screen">
      <div className="box1 flex-1 sm:w-1/2 ml-8 mt-4 text-xl">
        <samp className="text-pink-500">NAME</samp>
        <h1 className="text-blue-400">Ayisha Khan</h1>
        <samp className="text-pink-500">EMAIL Address</samp>
        <h1 className="text-blue-400">Ayishakhan228276@gmail.com</h1>
        <samp className="text-pink-500">GIT Repository</samp>
        <h1 className="text-blue-400">
          <a href="https://github.com/Ayishaakhan786">Ayishakhan786</a>
        </h1>
      </div>

      <div className="box2 flex justify-center sm:justify-end sm:w-1/2 mt-4 sm:mt-0">
        <Image
          src={ayisha}
          alt="Ayisha Khan"
          width={200}
          height={200}
          className="h-40 w-40 sm:h-60 sm:w-60 object-cover "
        />
      </div>
    </div>
  );
}

