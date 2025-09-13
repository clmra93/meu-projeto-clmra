import Image from "next/image";

interface FotosMarte {
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

interface PhotoCardProps {
  foto: FotosMarte;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
    return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={photo.img_src}
        alt={`Foto tirada por ${photo.rover.name} com a câmera ${photo.camera.full_name}`}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
        priority
        />
        <div className="p-4">
            <p className="text-sm text-gray-600 mb-1">Rover: {photo.rover.name}</p>
            <p className="text-sm text-gray-600 mb-1">Câmera: {photo.camera.full_name}</p>
            <p className="text-sm text-gray-600">Data na Terra: {photo.earth_date}</p>
        </div>
    </div>
  );
}

export default PhotoCard;