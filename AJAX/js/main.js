// AJAX DISCHI
const root = new Vue({
    el: "#root",
    data: {
        discs: [],
        artists: [],
        selected: "All",
    },
    created() {
        axios
            .get("http://localhost:8888/php-ajax-dischi/AJAX/scripts/data.php")
            .then((res) => {
                this.discs = res.data.filtered;
                this.artists = res.data.artist;
                this.artists.unshift("All");
            })
            .catch((err) => {
                console.log("Errore", err);
            });
    },
    methods: {
        getAlbumArtist() {
            axios
                .get(
                    "http://localhost:8888/php-ajax-dischi/AJAX/scripts/data.php?query=" +
                        this.selected
                )
                .then((res) => {
                    this.discs = res.data.filtered;
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log("Errore", err);
                });
        },
    },
});
