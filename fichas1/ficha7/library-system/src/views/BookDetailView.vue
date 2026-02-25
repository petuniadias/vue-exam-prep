<template>
    <div v-if="book">
        <h4>{{ book.title }}</h4>
        <p><strong>Autor:</strong> {{ book.author }}</p>
        <p><strong>ISBN:</strong> {{ book.isbn }}</p>
        <p><strong>Ano:</strong> {{ book.year }}</p>
        <p><strong>Género:</strong> {{ book.genre }}</p>
        <p><strong>Disponível:</strong> {{ book.available ? 'Sim' : 'Não' }}</p>
        <p><strong>Avaliação:</strong> ⭐ {{ book.rating }}</p>
        <router-link :to="{name: 'book-edit', params: {id: book.id}}">
            Editar
        </router-link>
        <router-link to="/">
            Voltar
        </router-link>
        <button @click="deleteBook">Remover</button>
    </div>
</template>

<script>
import { useBooksStore } from '@/stores/books';
import { mapStores } from 'pinia';

    export default {
        name: 'BookDetailView',
        
        computed: {
            ...mapStores(useBooksStore),

            id() {
                return this.$route.params.id
            },

            book() {
                return this.booksStore.books.find(
                    b => b.id == this.id
                )
            },
        },

        methods: {
            async deleteBook() {
                const confirmDelete = confirm('Tens a certeza que queres remover?')

                if (!confirmDelete) return

                await this.booksStore.deleteBook(this.id)

                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>