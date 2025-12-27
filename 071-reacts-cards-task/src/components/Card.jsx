import Info from "./Info";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="relative shadow-xl shadow-blue-400 bg-linear-to-b from-blue-400 to-green-200 rounded-xl border-none w-64 h-83 px-1 py-1 m-4">
      <div
        className="w-62 h-40 rounded-xl border-none bg-cover"
        style={{ backgroundImage: `url(${props.cover})` }}
      ></div>

      <div
        className="absolute top-28 left-20 pl-2 rounded-[50%] border-4 border-white w-24 h-24 bg-contain bg-center"
        style={{ backgroundImage: `url(${props.pic})` }}
      ></div>

      <div>
        <Button />
      </div>

      <h1 className="mt-10 px-3 text-center text-gray-400 text-2xl whitespace-nowrap">
        {props.title}
      </h1>

      <div className="flex justify-between items-center border-none px-4 py-1">
        <Info cnt={props.views} inf="Views" />
        <Info cnt={props.posts} inf="Posts" />
        <Info cnt={props.likes} inf="Likes" />
      </div>
    </div>
  );
};

export default Card;
