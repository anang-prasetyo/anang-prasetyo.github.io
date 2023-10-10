import { ref } from "vue"

export default function useDb(){
  const project = ref([
    {
      name: 'Movies Collection',
      tag: [''],
      urlDemo: 'https://anang-prasetyo.github.io/movies-collection/',
      url: 'Movies%20Collection',
      isOpen: true
    },
    {
      name: 'Wedding Agency',
      tag: [''],
      urlDemo: '',
      url: '',
      isOpen: false
    },
    {
      name: 'Invitation',
      tag: [''],
      urlDemo: '',
      url: '',
      isOpen: false
    },
    {
      name: 'Coffee Shop',
      tag: [''],
      urlDemo: '',
      url: '',
      isOpen: false
    },
    {
      name: 'Simple Shopping Cart',
      tag: [''],
      urlDemo: 'https://anang-prasetyo.github.io/simple-shopping-cart/',
      url: 'Simple%20Shopping%20Cart',
      isOpen: true
    },
    {
      name: 'Bookstore',
      tag: [''],
      urlDemo: '',
      url: '',
      isOpen: false
    },
    {
      name: 'Online Shop',
      tag: [''],
      urlDemo: '',
      url: '',
      isOpen: false
    },
    {
      name: 'School Profile',
      tag: [''],
      urlDemo: '',
      url: '',
      isOpen: false
    },
    {
      name: 'Company Profile',
      tag: [''],
      urlDemo: '',
      url: '',
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
      level: 4
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
      name: 'Codeigniter',
      level: 3
    },
    {
      name: 'Laravel',
      level: 3
    },
  ])

  return { project, skills }
}