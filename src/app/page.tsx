import Filters from "./components/Filters";''
import Pagination from "./components/Pagination";
import PhotoCard from "./components/PhotoCard";

interface MarsPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  rover: {
    name: string;
  };
  camera: {
    full_name: string;
  };
}

async function getMarsPhoto(searchParams:{ [key: string]: string | string[] | undefined}) {
  const rover = searchParams.rover || "curiosity";
  const earthDate = searchParams.earth_date || '2020-07-01';
  const camera = searchParams.camera || '';
  const page = searchParams.page || '1';
  const apiKey = process.env.NASA_API_KEY;
  let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&page=${page}&api_key=${apiKey}`;
  if (camera) {
    apiUrl += `&camera=${camera}`;
  }

  try {
    const response = await fetch(apiUrl, {cache: 'no-store'});
    if (!response.ok) {
      throw new Error(`Failed to fetch data from NASA API: ${response.status}`);
    }
    const data = await response.json();
    return data.photos as MarsPhoto[];
  }
  catch (error) {
    console.error("Error fetching data from NASA API:", error);
    return [];
  }
}

export default async function HomePage({searchParams}:{ searchParams:{ [key: string]: string | string[] | undefined}}) {
  const photos = await getMarsPhoto(searchParams);
  const currentPage = parseInt((searchParams.page as string) || '1', 10);
  
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-center">Fotos de Marte</h2>
      <Filters />

      {photos && photos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Nenhuma foto encontrada para os filtros selecionados.</p>
      )}

      {photos && photos.length > 0 && (
        <Pagination currentPage={currentPage} />
      )}
    </section>
  );
}

