import Info from "./Info";
import Button from "./Button";
import Button2 from "./Button2";

const Card = (props) => {
  return (
    <div className="relative shadow-xl bg-linear-to-b from-emerald-100 to-teal-100 rounded-2xl border-none w-64 h-83 px-1 py-1 m-4 shadow-black/70 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
      <div
        className="w-62 h-40 rounded-t-2xl border-none bg-cover"
        style={{ backgroundImage: `url(${props.cover})` }}
      ></div>

      <div
        className="absolute top-28 left-20 pl-2 rounded-[50%] border-4 border-white w-24 h-24 bg-contain bg-center"
        style={{ backgroundImage: `url(${props.pic})` }}
      ></div>

      <div>{props.follow == 1 ? <Button2 /> : <Button />}</div>

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
