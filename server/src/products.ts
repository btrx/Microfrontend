export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Indomie Mi Goreng',
    price: 3.300,
    description: 'Mie orisinal dengan cita rasa otentik asal Indonesia.',
    image: 'http://localhost:8080/indomie-mi-goreng-special.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 2,
    name: 'Indomie Mi Goreng Hot & Spicy',
    price: 3.300,
    description: 'Mie orisinal dengan cita rasa pedas otentik asal Indonesia.',
    image: 'http://localhost:8080/indomie-mi-goreng-hot-spicy.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 3,
    name: 'Indomie Mi Goreng Barbeque Chicken',
    price: 3.300,
    description: 'Mie goreng dengan cita rasa ayam barbekyu.',
    image: 'http://localhost:8080/mie-goreng-barbeque-chicken.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 4,
    name: 'Indomie Mi Goreng Satay',
    price: 3.300,
    description: 'Mie goreng dengan cita rasa sate khas Indonesia.',
    image: 'http://localhost:8080/indomie-mi-goreng-satay.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 5,
    name: 'Indomie Mi Goreng Rendang',
    price: 3.300,
    description: 'Mie goreng dengan cita rasa rendang khas Indonesia.',
    image: 'http://localhost:8080/indomie-mi-goreng-rendang.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 6,
    name: 'Indomie Mi Goreng Iga Penyet',
    price: 3.300,
    description: 'Mie goreng dengan cita rasa iga penyet khas Indonesia.',
    image: 'http://localhost:8080/indomie-mi-goreng-spicy-beef-ribs.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 7,
    name: 'Indomie Mi Goreng Cabe Ijo',
    price: 3.300,
    description: 'Mie goreng dengan cita rasa cabe ijo khas Indonesia.',
    image: 'http://localhost:8080/indomie-mi-goreng-cabe-ijo.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 8,
    name: 'Indomie Mi Goreng Soto',
    price: 3.300,
    description: 'Mie goreng dengan cita rasa soto khas Indonesia.',
    image: 'http://localhost:8080/indomie-goreng-rasa-soto.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 9,
    name: 'Indomie Mi Goreng Jumbo',
    price: 3.700,
    description: 'Mie orisinal dengan cita rasa otentik asal Indonesia dengan ukuran jumbo.',
    image: 'http://localhost:8080/indomie-mi-goreng-special-jumbo.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
  {
    id: 10,
    name: 'Indomie Mi Goreng Barbeque Jumbo',
    price: 3.700,
    description: 'Mie goreng dengan cita rasa ayam barbekyu dengan ukuran jumbo.',
    image: 'http://localhost:8080/indomie-goreng-barbeque-chicken-flavour-jumbo.png',
    longDescription:
      'Legenda dapur Indonesia yang selalu wajib tersedia, dari generasi emas sampai halilintar.Mi goreng dengan bumbu spesial dan taburan bawang goreng hasilkan aroma yang lezat untuk menggoreng semangat!',
  },
];

export default products;
