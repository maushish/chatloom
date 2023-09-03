import React,{useState} from 'react';

function Login() {
  const[avatar, setAvatar]=useState(null);
  const avatarInputRef=React.createRef();

  const handleAvatarChange=(e)=>{
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const openAvatarInput =()=>{
    avatarInputRef.current.click();
  }
  return (
    <div className='bg-mainBlack flex flex-col justify-center h-screen'>
      <div className=' text-txt1 mt-[-15%] '>
        <h1 className='px-10 text-5xl '>Set up your profile!</h1>
        <h2 className='text-4xl px-10 py-5'>
          in <span className='text-customGreen font-bold'>2 </span>simple steps
        </h2>
      </div>
      <div className='flex flex-co items-center justify-center'>
        <div className=' bg-form w-96 p-20 rounded-lg text-txt1 mt-[5%] flex flex-col justify-center items-center'>
          <form className='flex flex-col justify-center items-center py-0'>          <div className='flex flex-col '>
              <label className='py-4 ' htmlFor='username'><span className='font-semibold text-lg'>Name</span></label>
              <input
                className='rounded-md pl-2'
                type='text'
                id='username'
                name='username'
                placeholder='  Your username'
              />
              <label className='py-4' htmlFor='bio'><span className='font-semibold text-lg'>Bio</span></label>
              <textarea
                className='rounded-md py-4 pl-2  text-black text-sm'
                type='text'
                id='bio'
                name='vio'
                placeholder=' Bio'
              />
              <label className='py-4' htmlFor='avatar' onClick={openAvatarInput} style={{ cursor: 'pointer' }}>
                <span className='font-semibold text-lg'>Avatar</span>
              </label>
              <div className='relative w-16 h-16 rounded-full overflow-hidden mt-2' onClick={openAvatarInput} style={{ cursor: 'pointer' }}>
                <img
                  src={avatar || '/default-avatar.png'}
                  alt='Avatar'
                  className='object-cover w-full h-full'
                />
              </div>
              <input
                type='file'
                accept='image/*'
                onChange={handleAvatarChange}
                id='avatar'
                name='avatar'
                ref={avatarInputRef }
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
