import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "./State";
import { useEffect } from "react";
import DownloadLink from "react-download-link";
import Spinner from "./Spinner";
import "./App.css";

function Image({author, imgUrl }) {
  const downloadUrl = `${imgUrl}?force=true`;
  return (
    <div className="gallery-img">
      <img src={imgUrl} />
      <div className="about-img">
        <span>{author}</span>
        <DownloadLink
  
          label="⬇️"
          filename={`${author}.png`}
          exportFile={() => fetch(imgUrl).then((res) => res.blob())}
        />
      </div>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const {isLoading, photos} = useSelector((state) => state.gallery);
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    dispatch(getPhotos(randomNumber));
  }, []);
  if (isLoading){
    return (<div className="center"><Spinner/></div>)
  }
  return (
    <div className="app">
      <h3>PHOTO GALLERY</h3>
      <p>A simple photo gallery created using redux and redux thunk</p>
      <div className="gallery">
        {photos.map(({ id, download_url, author }) => {
          return (
            <Image
              key={id}
              imgUrl={download_url}
              author={author}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
