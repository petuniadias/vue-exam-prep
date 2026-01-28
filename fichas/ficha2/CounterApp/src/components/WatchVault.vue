<template>
    <form @submit.prevent="addNewItem">
        <div>
            <input type="radio" name="type" value="series" v-model="serie.type">
            <label for="">Series</label>
            <input type="radio" name="type" value="movies" v-model="serie.type">
            <label for="">Movies</label>
        </div>
        <div>
            <label for="">Name</label>
            <input type="text" class="bg-white" v-model="serie.name">
        </div>
        <div>
            <input type="radio" name="category" value="romance" v-model="serie.category">
            <label for="">Romance</label>
            <input type="radio" name="category" value="sci-fi" v-model="serie.category">
            <label for="">Sci-fi</label>
            <input type="radio" name="category" value="documentary" v-model="serie.category">
            <label for="">Documentary</label>
            <input type="radio" name="category" value="fantasy" v-model="serie.category">
            <label for="">Fantasy</label>
        </div>

        <div class="flex">
            <svg v-for="star in 10" :key="star" @click="serie.rating = star" :fill="star <= serie.rating ? 'gold' : 'none'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
        </div>

        <button type="submit">Add to Watchlist</button>
        <button type="button" @click="clearForm">Clear Form</button>
    </form>

    <div id="watchlist">
        <select name="" id="" v-model="sortBy">
            <option value="alfabeticamente">Alfabeticamente</option>
            <option value="rating">Por rating</option>
        </select>

        <div v-if="items.length > 0" v-for="item in items" :key="item.id">
            <div id="type">{{ item.type }}</div>
            <div id="name">{{ item.name }}</div>
            <div id="category">{{ item.category }}</div>
            <div id="rating">{{ item.rating }}</div>
            <button @click="removeItem(item)">x</button>
        </div>
        <div v-else>
            No items added yet. Add your first one!
        </div>
    </div>
</template>

<script>

    export default {
        name: "WatchVault",

        data() {
            return {
                items: [],
                serie: {id: "", type: "", name: "", category: "", rating: 0},
                newItem: {type: "", name: "", category: "", rating: 0},
                sortBy: "alfabeticamente",
                sortOrder: "asc",
            }
        },

        computed: {
            sortBy() {
                if(this.sortBy === "alfabeticamente") {

                } else if (this.sortBy === "rating") {

                }
            }
        },

        methods: {
            addNewItem() {
                const uuid = self.crypto.randomUUID();
                
                const newItem = {
                    id: uuid, 
                    type: this.serie.type, 
                    name: this.serie.name, 
                    category: this.serie.category, 
                    rating: this.serie.rating
                };

                this.items.push(newItem);

                console.log(`new item added: ${JSON.stringify(newItem)}`);

                this.clearForm();
            },

            clearForm() {
                this.serie = {id: "", type: "", name: "", category: "", rating: 0}
            },

            removeItem(item) {
                const confirmed = confirm(`Are you sure you want to remove ${item.name}?`);
                if (confirmed) {
                    const index = this.items.findIndex(i => i.id === item.id);
                    if (index !== -1) {
                        this.items.splice(index, 1);
                    }
                }
            }
        }
    }
</script>