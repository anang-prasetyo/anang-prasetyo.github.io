import { ref } from "vue"

export default function useDb(){
  const project = ref([
    {
      name: 'Movies Collection',
      tag: ['']
    },
    {
      name: 'Wedding Agency',
      tag: ['']
    },
    {
      name: 'Invitation',
      tag: ['']
    },
    {
      name: 'Coffee Shop',
      tag: ['']
    },
    {
      name: 'Bookstore',
      tag: ['']
    },
    {
      name: 'Online Shop',
      tag: ['']
    },
    {
      name: 'School Profile',
      tag: ['']
    },
    {
      name: 'Company Profile',
      tag: ['']
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