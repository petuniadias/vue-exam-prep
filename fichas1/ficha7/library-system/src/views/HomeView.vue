<template>
    <div class="page-wrapper">
        <div class="search">
            <SearchIcon />
            <input type="text" v-model="booksStore.search" @input="booksStore.fetchBooks()" placeholder="Search...">
        </div>

        <div class="filter-wrapper">
            <select name="" id="">
                <option v-for="genre in uniqueGenres" :key="genre" :value="genre">
                    {{ genre }}
                </option>
            </select>
            <select name="" id="">
                <option value="">
                    All
                </option>
                <option value="true">
                    Available
                </option>
                <option value="false">
                    Unavailable
                </option>
            </select>
        </div>
        <div>
            <label>Ordernar por: </label>
            <select name="" id="">
                <option value="titulo">Titulo</option>
                <option value="autor">Autor</option>
                <option value="ano">Ano</option>
                <option value="avaliacao">Avaliação</option>
            </select>
        </div>

        <router-link to="/books/new">
            Adicionar Livro
        </router-link>


        <div class="lista-livros">
            <div v-for="book in booksStore.books" :key="book.id">
                <h4>{{ book.title }}</h4>
                <p>{{ book.author }}</p>
                <p>{{ book.year }}</p>
                <p>{{ book.genre }}</p>
                <p v-if="book.available">Available</p>
                <p v-else>Unavailable</p>
                <p>{{ book.rating }}</p>
                <div>
                    <router-link :to="`/books/${book.id}`">Ver Detalhe</router-link>
                </div>
                <div>
                    <router-link :to="{name: 'book-edit', params: {id: book.id}}">Editar</router-link>
                </div>
                <button @click="deleteBook(book.id)">remover</button>
            </div>
        </div>

    </div>

</template>

<script>
    import { useBooksStore } from '@/stores/books';
    import { SearchIcon } from 'lucide-vue-next';
    import { mapStores } from 'pinia';

    export default {
        name: 'HomeView',

        components: {
            SearchIcon
        },

        computed: {
            ...mapStores(useBooksStore),

            uniqueGenres() {
                const books = this.booksStore.books || [];
                const genres = books.map(b => b.genre)
                return [...new Set(genres)]
            }
        },

        created() {
            this.booksStore.fetchBooks();
        },

        methods: {
            async deleteBook(id) {
                const confirmDelete = confirm('Tens a certeza que queres remover?')

                if (!confirmDelete) return

                await this.booksStore.deleteBook(id)
            },
        }
    }
</script>

<style scoped>
    * {
        font-family: Arial, Helvetica, sans-serif;
    }

    .search {
        display: flex;
        border: 1px solid gray;
        padding: 8px 12px;
        gap: 8px;
        font-size: 14px;
        margin-bottom: 16px;
    }

    .search input {
        border: none;
        outline: none;
        flex-grow: 1;
    }

    .search input::placeholder {
        font-size: 14px;
    }

    .search input:focus {
        outline: none;
    }

    .search:focus-within {
        border-color: #4a90e2;
        box-shadow: 0 0 0 2px rgba(74,144,226,0.3);
    }

    .filter-wrapper {
        display: flex;
        gap: 8px;
    }

    label {
        font-size: 14px;
    }

    .lista-livros {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>