const Info = (props) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[18px] font-semibold">{props.cnt}</h3>
      <h5 className="text-[14px] text-gray-500">{props.inf}</h5>
    </div>
  );
};

export default Info;
