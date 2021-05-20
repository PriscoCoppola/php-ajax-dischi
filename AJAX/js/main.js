// AJAX DISCHI
const root = new Vue({
    el: "#root",
    data: {
        discs: [],
    },
    created() {
        axios
            .get("http://localhost:8888/php-ajax-dischi/AJAX/scripts/data.php")
            .then((res) => {
                this.discs = res.data;
            })
            .catch((err) => {
                console.log("Errore", err);
            });
    },
});
