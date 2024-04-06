import { Link } from 'expo-router'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from '@expo/vector-icons/Feather'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import * as SecureStore from 'expo-secure-store'
import { useRouter } from 'expo-router'

export default function Memories() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()

  async function signOut() {
    await SecureStore.deleteItemAsync('token')


    router.push('/')
  }

  return (
    <ScrollView className='flex-1 px-8' contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
      <View className='mt-4 flex-row items-center justify-between'>
        <NLWLogo />
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={signOut}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <Icon name="log-out" size={16} color="#000" />
          </TouchableOpacity>

          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Icon name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View className='mt-6 space-y-10'>
        <View className='space-y-4'>
          <View className='flex-row items-center gap-2'>
            <View className='h-px w-5 bg-gray-50' />
            <Text className='font-body text-sm text-gray-100'>12 de Abril. 2024</Text>
          </View>
          <View className='space-y-4 px-8'>
            <Image
              source={{ uri: 'http://10.0.2.2:3333/uploads/f884df70-2986-4acc-bcc0-98560ca75804.jpg' }}
              className='aspect-video w-full rounded-lg'
              alt=''
            />
            <Text className='font-body text-base leading-relaxed text-gray-100'>
              Lorem ipsom
            </Text>
            <Link href='/memories/id' asChild>
              <TouchableOpacity className='flex-row items-center gap-2'>
                <Text className='font-body text-sm text-gray-200'>Ler mais</Text>
                <Icon name='arrow-right' size={16} color="#9e9ea0" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        <View className='space-y-4'>
          <View className='flex-row items-center gap-2'>
            <View className='h-px w-5 bg-gray-50' />
            <Text className='font-body text-sm text-gray-100'>12 de Abril. 2024</Text>
          </View>
          <View className='space-y-4 px-8'>
            <Image
              source={{ uri: 'http://10.0.2.2:3333/uploads/f884df70-2986-4acc-bcc0-98560ca75804.jpg' }}
              className='aspect-video w-full rounded-lg'
              alt=''
            />
            <Text className='font-body text-base leading-relaxed text-gray-100'>
              Lorem ipsom
            </Text>
            <Link href='/memories/id' asChild>
              <TouchableOpacity className='flex-row items-center gap-2'>
                <Text className='font-body text-sm text-gray-200'>Ler mais</Text>
                <Icon name='arrow-right' size={16} color="#9e9ea0" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        <View className='space-y-4'>
          <View className='flex-row items-center gap-2'>
            <View className='h-px w-5 bg-gray-50' />
            <Text className='font-body text-sm text-gray-100'>12 de Abril. 2024</Text>
          </View>
          <View className='space-y-4 px-8'>
            <Image
              source={{ uri: 'http://10.0.2.2:3333/uploads/f884df70-2986-4acc-bcc0-98560ca75804.jpg' }}
              className='aspect-video w-full rounded-lg'
              alt=''
            />
            <Text className='font-body text-base leading-relaxed text-gray-100'>
              Lorem ipsom
            </Text>
            <Link href='/memories/id' asChild>
              <TouchableOpacity className='flex-row items-center gap-2'>
                <Text className='font-body text-sm text-gray-200'>Ler mais</Text>
                <Icon name='arrow-right' size={16} color="#9e9ea0" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
