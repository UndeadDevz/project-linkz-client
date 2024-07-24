import { SideBar } from "./sideBar/SideBar";

export const Editor = () => {
  return (
    <div className='w-full h-screen flex flex-row'>
      <div className='w-1/6 p-2'>
        <SideBar />
      </div>
      <div className='w-3/6'>Medio</div>
      <div className='w-2/6'>Derecha</div>
    </div>
  );
};
