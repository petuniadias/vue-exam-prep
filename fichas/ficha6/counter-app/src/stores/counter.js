import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    min: -10,
    max: 100,
    history: []
  }),

  getters: {
    isMax: (state) => state.count >= state.max,
    isMin: (state) => state.count <= state.min,
    progressPercentage: (state) => Math.floor(((state.count - state.min) / (state.max - state.min)) * 100),
    historyLength: (state) => state.history.length,
    lastFiveOperations: (state) => state.history.slice(-5).reverse()
  },

  actions: {
    increment() {
      if (this.isMax) return;
      this.count++
      this.history.push({
        operation: 'increment', 
        value: 1, 
        timestamp: new Date().toLocaleString() 
      })
    },
    
    decrement() {
      if (this.isMin) return;
      this.count--
      this.history.push({        
        operation: 'decrement', 
        value: -1, 
        timestamp: new Date().toLocaleString() 
      }) 
    },
    
    incrementBy(amount) {
      if (this.isMax) return;
      this.count += amount
      this.history.push({        
        operation: 'incrementBy(amount)', 
        value: amount, 
        timestamp: new Date().toLocaleString() 
      })  
    },

    reset() {
      this.count = 0
      this.history.push({
        operation: 'reset', 
        value: 0, 
        timestamp: new Date().toLocaleString() 
      }) 
    },
  }
})
