import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SongDetail() {
  const { id } = useParams();
  const url = `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`;
  const {
    data,
    loading,
    error
  } = useFetch(url);
  if (loading) {
    return <p>Cargando detalles...</p>;
  }
  if (error) {
    return <p>Error al cargar detalles</p>;
  }
  if (!data || !data.album) {
    return <p>No hay información disponible</p>;
  }
  const album = data.album[0];
  return (
    <div>
      <h2>{album.strAlbum}</h2>
      <p>Artista: {album.strArtist}</p>
      <p>Año: {album.intYearReleased}</p>
      <p>Genero: {album.strGenre}</p>
      <p>{album.strDescriptionEN}</p>
    </div>
  );
}

export default SongDetail;