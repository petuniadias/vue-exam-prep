import { defineStore } from 'pinia'
import { get } from '@/api/api';
export const usePokemonStore = defineStore('pokemon', {
    state: () => ({
        currentPokemon: null,
        loading: false,
        error: ''
    }),

    actions: {
        async fetchRandomPokemon() {
            try {
                this.loading = true;
                this.error = ''
                const id = Math.floor(1 + Math.random() * 151);
                this.currentPokemon = get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            } catch (err) {
                this.error = err.message
            } finally {
                this.loading = false;
            }

        },

        async fetchPokemonById(id) {
            try {
                this.loading = true;
                this.error = ''
                this.currentPokemon = get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            } catch (err) {
                this.error = err.message
            } finally {
                this.loading = false;
            }
        }
    }
})
