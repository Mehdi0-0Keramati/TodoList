import userPic from ".././assets/avatar-1.jpg";

const UserInformation = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <h2 className="font-semibold">Hi User!</h2>
      <img className="rounded-full" src={userPic} alt="" />
    </div>
  );
};

export default UserInformation;
