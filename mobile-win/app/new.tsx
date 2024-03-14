import { View, Text, TouchableOpacity, Switch, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Feather'

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function NewMemory() {
  const [isPublic, setIsPublic] = useState(false)
  const { bottom, top } = useSafeAreaInsets()

  return (
    <ScrollView className='flex-1 px-8' contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
      <View className='mt-4 flex-row items-center justify-between'>
        <NLWLogo />
        <Link href='/memories' asChild>
          <TouchableOpacity className='h-10 w-10 items-center justify-center rounded-full bg-purple-500'>
            <Icon name='arrow-left' size={16} color='#fff' />
          </TouchableOpacity>
        </Link>
      </View>

      <View className='mt-6'>
        <View className='flex-row items-center gap-2'>
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
            trackColor={{ false: '#767577', true: '#372560' }}
            thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
          />
          <Text className='font-body text-base text-gray-200'>
            Tornar memória pública
          </Text>
        </View>
      </View>
      <TouchableOpacity
        className='h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20'
      >
        <View className='flex-row items-center gap-2'>
          <Icon name='image' color='#fff' />
          <Text className='text-sm font-bold text-gray-200'>Adicionar foto ou vídeo de capa</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        multiline
        className='p-0 font-body text-lg text-gray-50'
        placeholderTextColor="#56565a"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que voce quer lembrar para sempre"
      />
    </ScrollView>
  )
}
