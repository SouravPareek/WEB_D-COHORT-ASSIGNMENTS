import Card from "./components/Card";

const App = () => {
  const users = [
    {
      fullName: "Tony Stark",
      title: "Iron Man",
      profileImage:
        "https://image.tmdb.org/t/p/w500/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg",
      coverImage:
        "https://wallpapers4screen.com/Uploads/16-4-2025/73190/thumb2-4k-iron-man-battle-superheroes-marvel-comics.jpg",
      likesCount: 1247,
      postCount: 83,
      viewsCount: 53892,
      followed: true,
    },
    {
      fullName: "Steve Rogers",
      title: "Captain America",
      profileImage:
        "https://image.tmdb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
      coverImage: "https://images.alphacoders.com/137/1370316.jpeg",
      likesCount: 982,
      postCount: 71,
      viewsCount: 41736,
      followed: false,
    },
    {
      fullName: "Bruce Wayne",
      title: "Batman",
      profileImage:
        "https://image.tmdb.org/t/p/w500/seyWFgGInaLqW7nOZvu0ZC95rtx.jpg",
      coverImage:
        "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      likesCount: 1534,
      postCount: 109,
      viewsCount: 68491,
      followed: true,
    },
    {
      fullName: "Peter Parker",
      title: "Spider-Man",
      profileImage:
        "https://w0.peakpx.com/wallpaper/389/808/HD-wallpaper-tom-holland-spiderman-spider-man.jpg",
      coverImage:
        "https://4kwallpapers.com/images/wallpapers/marvels-spider-man-3840x2160-11990.jpeg",
      likesCount: 2018,
      postCount: 134,
      viewsCount: 75264,
      followed: true,
    },
    {
      fullName: "Thor Odinson",
      title: "God of Thunder",
      profileImage:
        "https://i.pinimg.com/736x/55/6a/e7/556ae726c3fa153be58acabe8cdc951e.jpg",
      coverImage:
        "https://wallpapers.com/images/hd/4k-thor-the-god-of-thunder-su07x18uhh1c7dar.jpg",
      likesCount: 1769,
      postCount: 97,
      viewsCount: 61358,
      followed: false,
    },
    {
      fullName: "Natasha Romanoff",
      title: "Black Widow",
      profileImage:
        "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
      coverImage:
        "https://image.tmdb.org/t/p/w500/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg",
      likesCount: 1412,
      postCount: 86,
      viewsCount: 55921,
      followed: true,
    },
    {
      fullName: "Clark Kent",
      title: "Superman",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTt12LQ6xxEKYnH06WUdVuKTkfF1-2tv_fOw&s",
      coverImage:
        "https://preview.redd.it/superman-and-krypto-4k-upscaled-wallpaper-used-1080p-clean-v0-kgcheawgo5vd1.png?auto=webp&s=9b1b527d776bf20dbed832e85659baecee0c1a81",
      likesCount: 2231,
      postCount: 162,
      viewsCount: 90348,
      followed: false,
    },
    {
      fullName: "Diana Prince",
      title: "Wonder Woman",
      profileImage:
        "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      coverImage:
        "https://images.wallpapersden.com/image/download/wonder-woman-4k-cool-logo_bG1pZm2UmZqaraWkpJRobWllrWdma2U.jpg",
      likesCount: 1876,
      postCount: 118,
      viewsCount: 71984,
      followed: true,
    },
    {
      fullName: "Barry Allen",
      title: "The Flash",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiMzT_zE8qXpKKVW_KIndTIHcB8udWYWQgg&s",
      coverImage: "https://wallpaperaccess.com/full/8483.jpg",
      likesCount: 1293,
      postCount: 92,
      viewsCount: 50371,
      followed: false,
    },
    {
      fullName: "T’Challa",
      title: "Black Panther",
      profileImage:
        "https://media.newyorker.com/photos/5a87650156b75c08a3e5bbb6/1:1/w_2400,h_2400,c_limit/Cobb-Black-Panther.jpg",
      coverImage:
        "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
      likesCount: 2094,
      postCount: 143,
      viewsCount: 82766,
      followed: true,
    },
  ];

  return (
    <div className="bg-linear-to-t from-blue-400 to-green-200 flex flex-wrap justify-center items-center w-screen h-auto">
      {users.map(function (elem) {
        return (
          <Card
            name={elem.fullName}
            title={elem.title}
            pic={elem.profileImage}
            cover={elem.coverImage}
            likes={elem.likesCount}
            posts={elem.postCount}
            views={elem.viewsCount}
          />
        );
      })}
    </div>
  );
};

export default App;
