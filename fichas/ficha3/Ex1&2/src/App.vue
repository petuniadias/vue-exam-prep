<template>
  <StudentCard v-for="student in students" :key="student" :name="student.name" :studentNumber="student.studentNumber" :course="student.course" :year="student.year"/>
  <ProductCard 
    v-for="product in products"
    :key="product.id"
    :product="product"
    @add-to-cart="handleAddToCart"
  />
</template>

<script>
  import ProductCard from './components/ProductCard.vue';
  import StudentCard from './components/StudentCard.vue';

  export default {
    name: "App",
    components: {
      StudentCard,
      ProductCard
    },

    data() {
      return {
        students: [
          { name: "Francisco", studentNumber: "324234329", course: "Psicologia", year: 2},
          { name: "Maria", studentNumber: "329049120", course: "Engenharia Informática", year: 1},
          { name: "Catarina", studentNumber: "32132109", course: "Ciências Biomédicas", year: 3},
        ],
        products: [
          {
            id: 1,
            name: 'Morango',
            price: 2.99,
            image: 'https://fsp.usp.br/eccco/wp-content/uploads/2022/09/isaac-quesada-DYbr5utVs8s-unsplash-1024x683.jpg',
            inStock: true,
          },
          {
            id: 2,
            name: 'Banana',
            price: 1.49,
            image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e42e',
            inStock: false,
          },
          {
            id: 3,
            name: 'Maçã',
            price: 1.99,
            image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
            inStock: true,
          },
          {
            id: 4,
            name: 'Abacate',
            price: 3.49,
            image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919',
            inStock: true,
          },
        ]
      }
    },

    methods: {
      handleAddToCart() {
        const product = this.products.find(p => p.id === product.id)
        if (product) product.inStock = false;
      }
    }
  }
</script>