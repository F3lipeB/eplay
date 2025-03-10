import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/starWars.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     title: 'Resident Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     title: 'Resident Evil 4',
//     system: 'PS5',
//     infos: ['5%', 'R$ 290,00'],
//     image: resident
//   },
//   {
//     id: 3,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     title: 'Resident Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 4,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     title: 'Resident Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'RPG',
//     description:
//       'Diablo IV é um GPR de ação em desenvolvimento pela Blizzard Entertainment.',
//     title: 'Diablo 4',
//     system: 'Windows',
//     infos: ['17/05'],
//     image: diablo
//   },
//   {
//     id: 6,
//     category: 'RPG',
//     description:
//       'Diablo IV é um GPR de ação em desenvolvimento pela Blizzard Entertainment.',
//     title: 'Zelda',
//     system: 'Windows',
//     infos: ['17/05'],
//     image: zelda
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description:
//       'Diablo IV é um GPR de ação em desenvolvimento pela Blizzard Entertainment.',
//     title: 'Star Wars',
//     system: 'Windows',
//     infos: ['17/05'],
//     image: starWars
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
//     title: 'Resident Evil 4',
//     system: 'Nintendo Switch',
//     infos: ['17/05'],
//     image: resident
//   }
// ]
