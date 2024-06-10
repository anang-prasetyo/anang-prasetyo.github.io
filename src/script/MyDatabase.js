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
      name: 'SMK 10 November Sukodono',
      tag: ['vuejs, bootstrap, firebase'],
      urlDemo: 'https://smk-10-november-sukodono.web.app/',
      url: 'SMK%2010%20November%20Sukodono',
      isShowPoster: true,
      isOpen: true
    },
  ])
  const projectDraft = ref([
    {
      name: 'Wedding Agency',
      tag: [''],
      urlDemo: '',
      url: 'Wedding%20Agency',
      isShowPoster: true,
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
      name: 'Invitation',
      tag: [''],
      urlDemo: '',
      url: '',
      isShowPoster: false,
      isOpen: false
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
      name: 'Company Profile',
      tag: [''],
      urlDemo: '',
      url: '',
      isShowPoster: false,
      isOpen: false
    },
  ])
  const webDev = ref([
    {
      name: 'SPK-PDPS',
      tag: ['vuejs, bulma.io, firebase'],
      urlDemo: 'https://spk-dosbingskripsi.web.app/',
      url: 'SPK-PDPS',
      isShowPoster: true,
      isOpen: true,
      desc: 'SPKPDPS (Sistem Pendukung Keputusan Pemilihan Dosen Pembimbing Skripsi) adalah web SPK yang dibangun dengan menggunakan Framework Vuejs, Bulma.io dan Firebase firestore database. Memiliki fitur-fitur unggul seperti avatar custom, progres bar, pesan realtime, database realtime, UI trend 2022 dan UX optimal.'
    },
    {
      name: 'Woku.id',
      tag: [''],
      urlDemo: '',
      url: 'Woku.id',
      isShowPoster: true,
      isOpen: false,
      desc: 'Sebuah web untuk warung sederhana yang dibangun dengan menggunakan Bootstrap, JavaScript dan PHP Statis. Memiliki fitur seperti menambah barang, menampilkan barang, mengedit barang, menghapus barang dan mencetak transaksi penjualan.'
    },
    {
      name: 'SMK 10 November Sukodono Sragen',
      tag: ['vuejs, bootstrap, firebase'],
      urlDemo: 'https://smk-10-november-sukodono.web.app/',
      url: 'SMK%2010%20November%20Sukodono',
      isShowPoster: true,
      isOpen: true,
      desc: 'Web sekolah untuk SMK 10 November Sukodono Sragen yang dibangun dengan menggunakan Bootstrap, Vuejs dan Firebase. Tampilan telah dioptimalkan sehingga lebih menarik untuk web sekolahan. Fitur-fitur masih standar dan masih memungkinkan untuk dikembangkan di masa depan.'
    },
  ])
  const webDesign = ref([
    {
      name: 'Movies Collection',
      tag: ['vuejs, bootstrap'],
      urlDemo: 'https://anang-prasetyo.github.io/movies-collection/',
      url: 'Movies%20Collection',
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
  ])
  const skills = ref([
    {
      name: 'HTML',
      url: 'HTML',
      level: 5
    },
    {
      name: 'Adobe Photoshop',
      url: 'Adobe%20Photoshop',
      level: 5
    },
    {
      name: 'Adobe Illustrator',
      url: 'Adobe%20Illustrator',
      level: 5
    },
    {
      name: 'CSS',
      url: 'CSS',
      level: 5
    },
    {
      name: 'JavaScript',
      url: 'JavaScript',
      level: 4
    },
    {
      name: 'PHP',
      url: 'PHP',
      level: 3
    },
    {
      name: 'Bootstrap',
      url: 'Bootstrap',
      level: 5
    },
    {
      name: 'Vuejs',
      url: 'Vuejs',
      level: 5
    },
    {
      name: 'MySQL',
      url: 'MySQL',
      level: 3
    },
    {
      name: 'Firebase',
      url: 'Firebase',
      level: 4
    },
    {
      name: 'Git',
      url: 'Git',
      level: 4
    },
    {
      name: 'Github',
      url: 'Github',
      level: 4
    },
    {
      name: 'Sass',
      url: 'Sass',
      level: 4
    },
    // {
    //   name: 'Codeigniter',
    // url: '',   
    // level: 3
    // },
    // {
    //   name: 'Laravel',
    // url: '',  
    // level: 3
    // },
  ])
  const docs = ref([
    {
      name: 'SASS / SCSS',
      chapter: [
        {
          name: 'nesting class',
          lists: ['Selector Lists', 'Selector Combinators']
        }
      ]
    },
    {
      name: 'Vuejs',
      chapter: [
        {
          name: 'membuat aplikasi vue',
          lists: ['teknik modular', 'melalui CDN']
        },
      ]
    },
  ])

  return { project, skills, docs, webDev, webDesign, projectDraft }
}