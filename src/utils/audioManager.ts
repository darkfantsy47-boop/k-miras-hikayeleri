class AudioManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();
  private music: HTMLAudioElement | null = null;
  private soundVolume: number = 0.5;
  private musicVolume: number = 0.3;
  private isMuted: boolean = false;

  loadSound(name: string, url: string) {
    const audio = new Audio(url);
    audio.volume = this.soundVolume;
    this.sounds.set(name, audio);
  }

  playSound(name: string) {
    if (this.isMuted) return;
    const sound = this.sounds.get(name);
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  }

  playMusic(url: string, loop: boolean = true) {
    if (this.isMuted) return;
    if (this.music) {
      this.music.pause();
    }
    this.music = new Audio(url);
    this.music.volume = this.musicVolume;
    this.music.loop = loop;
    this.music.play().catch(() => {});
  }

  stopMusic() {
    if (this.music) {
      this.music.pause();
      this.music.currentTime = 0;
    }
  }

  setSoundVolume(volume: number) {
    this.soundVolume = Math.max(0, Math.min(1, volume));
    this.sounds.forEach(sound => {
      sound.volume = this.soundVolume;
    });
  }

  setMusicVolume(volume: number) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
    if (this.music) {
      this.music.volume = this.musicVolume;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopMusic();
    }
    return this.isMuted;
  }

  getMusicVolume(): number {
    return this.musicVolume;
  }

  getSoundVolume(): number {
    return this.soundVolume;
  }

  getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const audioManager = new AudioManager();
