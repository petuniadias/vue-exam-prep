import { get } from '@/api/api';
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    currentPokemon: null,
    loading: false,
    error: ''
  }),

  actions: {
    async fetchRandomPokemon() {
      this.loading = true;
      this.error = '';
      this.currentPokemon = null;
      
      try {
        const randomID = Math.floor(1 + Math.random() * 151);
        this.currentPokemon = await get(`pokemon/${randomID}`);
      } catch(err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    
    async fetchPokemonById(id) {
      this.loading = true;
      this.error = '';
      this.currentPokemon = null;
      
      try {
        this.currentPokemon = await get(`/pokemon/${id}`);
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    }
  }
})
