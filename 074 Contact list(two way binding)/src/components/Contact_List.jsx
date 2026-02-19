const Contact_List = ({allUsers}) => {
  return (
    <div className="w-1/2 h-screen px-50 py-25 flex">
        <div className="bg-white w-full h-full flex flex-col rounded-2xl items-center relative">
            <h1 className="w-full text-center text-black text-3xl font-bold pt-12 rounded-t-2xl py-4 bg-white z-10 shadow-sm sticky top-0">
                Your Contacts
            </h1>

            <div className="w-full flex-1 overflow-y-auto px-2 pb-4">
                {allUsers.map((elem, idx)=>{
                    return <div key={idx} className="w-full text-black flex-col mt-2 px-2 py-2 bg-gray-300 rounded-xl border border-black">
                                <div className="flex justify-between">
                                    <h1 className="text-xl(">{elem.name}</h1>
                                    <p>+91 {elem.phone}</p>
                                </div>
                                <p className="text-gray-600 ml-4">{elem.email}</p>
                            </div>
                })}
            </div>
        </div>
    </div>
  );
};

export default Contact_List;
