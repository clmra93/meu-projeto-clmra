'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const rovers = ['Curiosity', 'Opportunity', 'Spirit'];

const cameras = [
  'FHAZ',
  'RHAZ',
  'MAST',
  'CHEMCAM',
  'MAHLI',
  'MARDI',
  'NAVCAM',
  'PANCAM',
  'MINITES',
];

const Filters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const createQueryString = useCallback((rover: string, camera: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);

        if (name !== 'page') {
            params.set('page', '1');
        }
        
        return params.toString();
    },
    [searchParams]
);

return (
    <div className="flex space-x-4 mb-6">
        <div>
            <label htmlFor="rover" className="block text-sm font-medium text-gray-700">Rover</label>
            <select
                name="rover"
                id="rover"
                value={}
        </div>
)

}

interface FiltersProps {
  selectedRover: string;
  setSelectedRover: (rover: string) => void;
  selectedCamera: string;
  setSelectedCamera: (camera: string) => void;
}