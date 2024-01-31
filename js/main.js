const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            title : 'Lista Serie Tv',

            serietv: [
                {
                    name: 'How i met your mom',
                    done: true,
                },
                {
                    name: 'Friends',
                    done: true,
                },
                {
                    name: 'Peaky Blinders',
                    done: true,
                },
                {
                    name: 'Narcos',
                    done:  false,
                },
                {
                    name: 'Outer Banks',
                    done:  false,
                },
                {
                    name: 'Gossip Girl',
                    done:  false,
                },
            ],

            newserie: {
                name: '',
                done: false,
            },
        };
    },

    methods: {
        savenewserie(){
            const newserieCopy = { ...this.newserie };
            this.serietv.push(newserieCopy);
            this.newserie.name = '';
        },

        rimuoviserie(index){
        this.serietv.splice(index, 1);
        },

        setserieDone(serie){
            serie.done = true;
        },

        setserieFalse(serie){
            serie.done= false;
        }
    },

    mounted(){
    },
});

app.mount('#app');