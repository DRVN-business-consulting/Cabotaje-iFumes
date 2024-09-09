import { SectionList, Text, View } from 'react-native'
import React from 'react'
import ListHeader from '../components/list_header'
import SectionHeader from '../components/section_header'
import Item  from '../components/item'
import { myTheme, themeColors } from '../themes/myTheme'
import { useTheme } from '../providers/theme_provider'

const MusicList = () => {
  const { theme } = useTheme()
  const musicList = [
    {
      title: 'OPM',
      data: [
        {
          title: 'Oh, Giliw',
          albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqVK_hWkXeeVv8o0Tr8Cm07trf0lriZ2Skg&s',
          artist: 'Adie',
          duration: 4
        },
        {
          title: 'Before It Sinks In',
          albumCover: 'https://i.scdn.co/image/ab67616d00001e0269dcb3f892ec9c2e2d81d3dc',
          artist: 'Moira Dela Torre',
          duration: 5
        },
      ]
    },
    {
      title: 'JPOP',
      data: [
        {
          title: 'Show',
          albumCover: 'https://upload.wikimedia.org/wikipedia/en/5/57/Ado_-_Show.png',
          artist: 'Ado',
          duration: 3
        },
        {
          title: 'Comet/Yasashii Suisei',
          albumCover: 'https://i.namu.wiki/i/tIhoTtCG3YMi6pkZ5JsTmogqN5i5o4p46-OQGiOlpOj639VY1wMKHTP9Vga28uWLoy6iv89w2pCvyeu2BkQw2A.webp',
          artist: 'Yoasobi',
          duration: 4
        }
      ]
    },
    {
      title: 'JAZZ',
      data: [
        {
          title: 'Falling Behind',
          albumCover: 'https://t2.genius.com/unsafe/252x252/https%3A%2F%2Fimages.genius.com%2F6e2d1f08c5efb41a9b870c248a95113d.1000x1000x1.png',
          artist: 'Laufey',
          duration: 3
        },
        {
          title: 'Promise',
          albumCover: 'https://images.genius.com/78f51488478adb399013e7b57857615e.1000x1000x1.png',
          artist: 'Laufey',
          duration: 4
        }
      ]
    },
    {
      title: 'POP',
      data: [
        {
          title: 'Trouble is a friend',
          albumCover: 'https://i1.sndcdn.com/artworks-000050124070-srb942-t500x500.jpg',
          artist: 'Lenka',
          duration: 3
        },
        {
          title: 'Please Please Please',
          albumCover: 'https://i.scdn.co/image/ab67616d0000b273de84adf0e48248ea2d769c3e',
          artist: 'Sabrina Carpenter',
          duration: 4
        }
      ]
    },
  ]
  return (
    <SectionList
        sections={musicList}
        ListHeaderComponent={ListHeader}
        renderSectionHeader={({ section : {title}}) => <SectionHeader title={title}/>}
        renderItem={({item }) => <Item item={item}/>}
    />
  )
}

export default MusicList