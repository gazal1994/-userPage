
class APIManager {
    constructor() {
        this.data = {}
    }
    getUsers() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            success: (data) => {
                this.data.users = data.results.map(user => {
                    return {
                        name: user.name.first + " " + user.name.last,
                        city: user.location.city,
                        state: user.location.state,
                        img: user.picture.large
                    }
                })
            }
        })
    }
    getQuote() {
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest?format=text',
            success: (data) => {
                this.data.quote = data
            }
        })
    }
    getPokemon() {
        const num = this.Random(900)
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${num}/`,
            success: (data) => {
                this.data.pokemon = { name: data.species.name, img: data.sprites.back_default }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("go home")
            }

        })
    }
    getMeat() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat&sentences=3&format=text',
            success: (data) => {
                this.data.meat = data
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("lalala")
            }

        })
    }
    


    getData() {
        return this.data
    }
   
    Random = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

