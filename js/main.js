const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            title : 'Lista Serie Tv',

            serietv: [
                {
                    name: 'How i met your mom',
                    done: true,
                    trash: true,
                },
                {
                    name: 'Friends',
                    done: true,
                    trash: true,
                },
                {
                    name: 'Peaky Blinders',
                    done: true,
                    trash: true,
                },
                {
                    name: 'Narcos',
                    done:  false,
                    trash: true,
                },
                {
                    name: 'Outer Banks',
                    done:  false,
                    trash: true,
                },
                {
                    name: 'Gossip Girl',
                    done:  false,
                    trash: true,
                },
            ],

            newserie: {
                name: '',
                done: false,
                trash: true,
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
        index.trash = true;
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