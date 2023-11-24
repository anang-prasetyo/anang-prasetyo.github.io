import { ref } from "vue"

export default function useDb(){
  const project = ref([
    {
      name: 'Movies Collection',
      tag: ['vuejs, bootstrap'],
      urlDemo: 'https://anang-prasetyo.github.io/movies-collection/',
      url: 'Movies%20Collection',
      isShowPoster: true,
      isOpen: true
    },
    {
      name: 'Wedding Agency',
      tag: [''],
      urlDemo: '',
      url: 'Wedding%20Agency',
      isShowPoster: true,
      isOpen: false
    },
    {
      name: 'Invitation',
      tag: [''],
      urlDemo: '',
      url: '',
      isShowPoster: false,
      isOpen: false
    },
    {
      name: 'Tunas Muda',
      tag: [''],
      urlDemo: '',
      url: 'Tunas%20Muda',
      isShowPoster: true,
      isOpen: false
    },
    {
      name: 'SPK-PDPS',
      tag: ['vuejs, bulma.io, firebase'],
      urlDemo: 'https://spk-dosbingskripsi.web.app/',
      url: 'SPK-PDPS',
      isShowPoster: true,
      isOpen: true
    },
    {
      name: 'Pemilihan Logo',
      tag: ['vuejs, bootstrap, firebase'],
      urlDemo: 'https://pemilihan-logo.web.app/',
      url: 'Pemilihan%20Logo',
      isShowPoster: true,
      isOpen: true
    },
    {
      name: 'Almamater Coffee And Eatery',
      tag: ['vuejs, locomotive scroll'],
      urlDemo: 'https://anang-prasetyo.github.io/almamater-coffee-and-eatery/',
      url: 'Almamater%20Coffee%20And%20Eatery',
      isShowPoster: true,
      isOpen: true
    },
    {
      name: 'Simple Shopping Cart',
      tag: ['vuejs, bootstrap'],
      urlDemo: 'https://anang-prasetyo.github.io/simple-shopping-cart/',
      url: 'Simple%20Shopping%20Cart',
      isShowPoster: true,
      isOpen: true
    },
    {
      name: 'Bookstore',
      tag: [''],
      urlDemo: '',
      url: '',
      isShowPoster: false,
      isOpen: false
    },
    {
      name: 'Woku.id',
      tag: [''],
      urlDemo: '',
      url: 'Woku.id',
      isShowPoster: true,
      isOpen: false
    },
    {
      name: 'SMK 10 November Sukodono',
      tag: ['vuejs, bootstrap, firebase'],
      urlDemo: 'https://smk-10-november-sukodono.web.app/',
      url: 'SMK%2010%20November%20Sukodono',
      isShowPoster: true,
      isOpen: true
    },
    {
      name: 'Company Profile',
      tag: [''],
      urlDemo: '',
      url: '',
      isShowPoster: false,
      isOpen: false
    },
  ])
  const skills = ref([
    {
      name: 'HTML',
      level: 5
    },
    {
      name: 'CSS',
      level: 5
    },
    {
      name: 'JavaScript',
      level: 4
    },
    {
      name: 'PHP',
      level: 3
    },
    {
      name: 'Bootstrap',
      level: 5
    },
    {
      name: 'Vuejs',
      level: 5
    },
    {
      name: 'MySQL',
      level: 3
    },
    {
      name: 'Firebase',
      level: 4
    },
    {
      name: 'Git',
      level: 4
    },
    {
      name: 'Github',
      level: 4
    },
    {
      name: 'Sass',
      level: 4
    },
    // {
    //   name: 'Codeigniter',
    //   level: 3
    // },
    // {
    //   name: 'Laravel',
    //   level: 3
    // },
  ])

  return { project, skills }
}