"use client"

import { getOneCharacter } from "@/services/characters";
import { Avatar } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/navigation'
import { MdNavigateBefore } from "react-icons/md";
import Lottie from "react-lottie";
import DanceMorty from "@/lotties/danceMorty.json"

const CharacterDetails = ({ params }: { params: { slug: string } }) => {

    const { data, isLoading } = useQuery({
        queryFn: () => getOneCharacter(params.slug),
        queryKey: ['character'],
    })

    const router = useRouter()

    const handleRedirect = () => {
        router.push(`/`, { scroll: false })
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: DanceMorty,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-10 antialiased text-slate-500 dark:text-slate-400 bg-[#0F172A] dark:bg-slate-900">
            <div
                className="w-full text-white cursor-pointer flex items-center mb-6"
                onClick={handleRedirect}
            >
                <MdNavigateBefore className="text-3xl" /> Voltar
            </div>
            {isLoading ? (
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            ) : (
                <div className="flex flex-col items-center">
                    <Avatar src={data?.image} alt="avatar" size="xxl" className="w-[300px] h-[300px]" />
                    <div className="text-center my-3 text-3xl text-white">
                        <h1 className="text-xl mb-3">Nome:</h1>
                        <span className="font-semibold">{data?.name}</span>
                    </div>
                    <div className="text-center my-3 text-3xl text-white mt-2">
                        <h1 className="text-xl mb-3">Especie:</h1>
                        <span className="font-semibold">{data?.species}</span>
                    </div>
                    <div className="text-center my-3 text-3xl text-white mt-2">
                        <h1 className="text-xl mb-3">Localização do personagem:</h1>
                        <span className="font-semibold">{data?.location?.name}</span>
                    </div>
                    <div className="text-center my-3 text-3xl text-white mt-2">
                        <h1 className="text-xl mb-3">Local de origem:</h1>
                        <span className="font-semibold">{data?.origin?.name || "Indefinido"}</span>
                    </div>
                </div>
            )}

        </main>
    )
}

export default CharacterDetails;