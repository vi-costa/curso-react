import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";
import { getPhotos, like } from "../../slices/photoSlice";
import "./styles.css"
const Home = () => {
  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage();
  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleLike = (photo) => {
    dispatch(like(photo._id));
    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="home">
      {photos && photos.map((photo) => <div key={photo._id}>
        <PhotoItem photo={photo}/>
        <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
        <Link className="btn" to={`/photos/${photo._id}`}>Ver mais</Link>
      </div>)}
        <div className="no-photos">
          Ainda não há fotos publicadas,
          <Link to={`/users/${user._id}`}>clique aqui</Link>
        </div>
    </div>
  );
};

export default Home;
