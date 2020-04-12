document.addEventListener('DOMContentLoaded', () => {
  main()
})


const main = () => {
  const my = myProfile()
  document.querySelector('.description__name').innerText = `${my.name}`
  addAvatar(my,document.querySelector('.avatar'))

  function addAvatar (profile, target) {
    const avatar = document.createElement('img')
    avatar.setAttribute('src', profile.imageUrl)
    avatar.classList.add('avatar__image')
    target.appendChild(avatar)
  }
}

const myProfile = () => new Profile({
  name: '宿屋',
  imageUrl: 'https://cdn.discordapp.com/avatars/406814020511727616/2512735b32c587f8f87f7a3993937c3e.png?size=128',
})

class Profile {

  constructor (profile) {
    this._name = profile.name
    this._imageUrl = profile.imageUrl
  }

  get name () {
    return this._name
  }

  get imageUrl () {
    return this._imageUrl
  }
}
