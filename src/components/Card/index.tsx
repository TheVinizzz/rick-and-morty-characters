import { FC } from "react";
import { ICard } from "./types";
import { FaInfoCircle } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const Card: FC<ICard> = ({character}) => {

    const router = useRouter()

    const handleRedirect = () => {
        router.push(`/${character.id}`, { scroll: false })
    }

    return (
        <div 
            style={{backgroundImage: `url(${character.image})`}} 
            className='max-w-xs bg-white cursor-pointer relative w-200 h-300 bg-center'>
            <div 
                className="w-full h-full hover:bg-[rgba(0,0,0,0.6)] transition text-[rgba(0,0,0,0)] hover:text-[#fff] text-center flex flex-col justify-end p-5"
                onClick={handleRedirect}
            >
                <h1 className="font-semibold text-xl">
                    {character.name}
                </h1>
                <span className="absolute bottom-2 right-2 text-xl">
                    <FaInfoCircle />
                </span>
            </div>
        </div>
    )
}

export default Card;