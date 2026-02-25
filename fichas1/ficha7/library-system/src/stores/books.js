import { del, get, post, put } from '@/api/api'
import { defineStore } from 'pinia'

export const useBooksStore = defineStore('books', {
  state: () => ({
    books: [],
    loading: false,
    error: '',

    // pesquisa
    search: '',

    // filtros
    genre: '',
    available: null,

    // paginação
    page: 1,
    limit: 5,
    total: 0
  }),

  actions: {
    async fetchBooks() {
      this.loading = true;
      
      try {
        const params = new URLSearchParams();

        if (this.search) {
          params.append('q', this.search);
        }

        const url = this.search ? `/books?${params.toString()}` : '/books';

        this.books = await get(url);
      } catch(err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchBookById(id) {
      this.loading = true;
      
      try {
        this.books = await get(`/books/${id}`);
      } catch(err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async addBook(book) {
      this.loading = true;
      
      try {
        this.books = await post('/books', book);
      } catch(err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async updateBook(id, book) {
      this.loading = true;
      
      try {
        this.books = await put(`/books/${id}`, book);
      } catch(err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async deleteBook(id) {
      this.loading = true;
      
      try {
        this.books = await del(`/books/${id}`);
      } catch(err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
})
