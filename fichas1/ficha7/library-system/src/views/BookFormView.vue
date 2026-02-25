<template>
    <form @submit.prevent="submitForm">
        <h4>{{ isEdit ? 'Editar Livro' : 'Novo Livro' }}</h4>
        <div>
            <label for="">Titulo: </label>
            <input type="text" v-model="form.title">
        </div>
        <small v-if="errors.title">
            {{ errors.title }}
        </small>
        <div>
            <label for="">Autor: </label>
            <input type="text" v-model="form.author">
        </div>
        <small v-if="errors.author">
            {{ errors.author }}
        </small>
        <div>
            <label for="">ISBN: </label>
            <input type="text" v-model="form.isbn">
        </div>
        <small v-if="errors.isbn">
            {{ errors.isbn }}
        </small>
        <div>
            <label for="">Ano: </label>
            <input type="number" v-model="form.year" min="1000">
        </div>
        <small v-if="errors.year">
            {{ errors.year }}
        </small>
        <div>
            <label for="">Genre: </label>
            <input type="text" v-model="form.genre">
        </div>
        <div>
            <label for="">Rating: </label>
            <input type="number" v-model="form.rating">
        </div>
        <small v-if="errors.rating">
            {{ errors.rating }}
        </small>
        <div>
            <label for="">URL da capa: </label>
            <input type="text" v-model="form.imageURL">
        </div>
        <div></div>
        <button type="submit">{{ isEdit ? 'Guardar alterações' : 'Adicionar Livro' }}</button>
    </form>
    <router-link to="/">
        Cancelar
    </router-link>
</template>

<script>
import { useBooksStore } from '@/stores/books';
import { mapStores } from 'pinia';

    export default {
        name: 'BookFormView',

        data() {
            return {
                form: {
                    title: '',
                    author: '',
                    isbn: '',
                    year: new Date().getFullYear(),
                    genre: '',
                    available: true,
                    rating: 0,
                    imageURL: ''
                },

                errors: {}
            }
        },

        computed: {
            ...mapStores(useBooksStore),

            id() {
                return this.$route.params.id
            },

            isEdit() {
                return this.$route.params.id ? true : false;
            },
        },

        methods: {
            async submitForm() {
                if (!this.validateForm()) return;

                if (this.isEdit) {
                    await this.booksStore.updateBook(this.id, this.form)
                } else {
                    await this.booksStore.addBook(this.form)
                }

                this.$router.push('/')
            },

            validateForm() {
                const errors = {}

                if (!this.form.title || this.form.title.length < 2) {
                    errors.title = 'Título mínimo 2 caracteres'
                }

                if (!this.form.author || this.form.author.length < 3) {
                    errors.author = 'Autor mínimo 3 caracteres'
                }

                const isbnRegex = /^[0-9-]+$/
                if (!isbnRegex.test(this.form.isbn)) {
                    errors.isbn = 'ISBN inválido'
                }

                const currentYear = new Date().getFullYear()
                if (this.form.year < 1000 || this.form.year > currentYear) {
                    errors.year = 'Ano inválido'
                }

                if (this.form.rating < 0 || this.form.rating > 5) {
                    errors.rating = 'Rating entre 0 e 5'
                }

                this.errors = errors;

                return Object.keys(errors).length === 0;
            }
        }
    }
</script>

<style scoped>

</style>