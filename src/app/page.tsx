"use client"
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { getCharacters } from "@/services/characters";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Lottie from "react-lottie"
import DanceMorty from "@/lotties/danceMorty.json"
import Image from 'next/image'
import Logo from "../../public/assets/logo.png"
import {
  Navbar,
  Typography,
  Input,
  Select,
  Option
} from "@material-tailwind/react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DanceMorty,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { data, isLoading } = useQuery({
    queryFn: () => getCharacters({ page: currentPage, name: search, gender, status }),
    queryKey: ['listCharacters', currentPage, search, gender, status],
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 antialiased text-slate-500 dark:text-slate-400 bg-[#0F172A] dark:bg-slate-900">
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="mx-auto mb-5 w-full from-blue-gray-900 to-blue-gray-800 px-4 py-3"
      >
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5 self-center"
          >
            <Image alt="logo" src={Logo} width={150} />
          </Typography>
          <div className="relative flex flex-col md:flex-row w-full gap-2 md:w-max">
            <Input
              type="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              color="white"
              label="Buscar Personagem"
              crossOrigin
            />
            <Select 
              color="blue" 
              size="md" 
              label="Gênero" 
              className="text-white"
              labelProps={{
                className: "text-white",
              }}
              onChange={e => setGender(e)}
            >
              <Option defaultChecked>Ambos</Option>
              <Option value="male">Masculino</Option>
              <Option value="female">Feminino</Option>
            </Select>
            <Select 
              color="blue" 
              size="md" 
              label="Estado de vida" 
              className="text-white"
              labelProps={{
                className: "text-white",
              }}
              onChange={e => setStatus(e)}
            >
              <Option defaultChecked>Indefinido</Option>
              <Option value="alive">Vivo</Option>
              <Option value="dead">Morto</Option>
            </Select>
          </div>
        </div>
      </Navbar>
      {isLoading ? (
        <Lottie
          options={defaultOptions}
          height={400}
          width={300}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {data?.results.map((val) => (
            <Card character={val} key={val.id} />
          ))}
        </div>
      )}
      <Pagination pageIndex={currentPage} setPageIndex={(e: number) => setCurrentPage(e)} pageCount={data?.info.pages} />
    </main>
  )
}
