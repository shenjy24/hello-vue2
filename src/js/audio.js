import {Howl} from 'howler';

export const SoundType = {
    RING: 0,
}

export function getSoundSource(type) {
    switch (type) {
        case SoundType.RING:
            return require('@/assets/media/audio/phone_ring.mp3')
        default:
            return null
    }
}

// 官方文档：https://howlerjs.com/
export function playSound(soundType, loop = false) {
    let audio = new Howl({
        src: [getSoundSource(soundType)],
        loop: loop
    })
    audio.play()
    return audio
}
