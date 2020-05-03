
class Renderer {
    constructor(apiManager) {
        this.data = apiManager
    }
    loadData() {
        this.data.getUsers()
        this.data.getQuote()
        this.data.getPokemon()
        this.data.getMeat()
    }
    renderUser() {
        const $user = $(".user-container")
        $user.empty()
        const userSource = $('#user-template').html();
        const userTemplate = Handlebars.compile(userSource);
        const userInfo = this.data.getData().users[0]
        const userHTML = userTemplate(userInfo);
        $user.append(userHTML)
    }
    renderFriends() {
        const $friends = $(".friends-container")
        $friends.empty()
        const friendsSource = $('#friends-template').html();
        const friendsTemplate = Handlebars.compile(friendsSource);
        const friends = [...this.data.getData().users]
        friends.shift()
        const friendsHTML = friendsTemplate({ friends });
        $friends.append(friendsHTML)
    }
    renderQuote() {
        const $quote = $(".quote-container")
        $quote.empty()
        const quoteSource = $('#quote-template').html();
        const quoteTemplate = Handlebars.compile(quoteSource);
        const quote = this.data.getData().quote
        const quoteHTML = quoteTemplate(quote);
        $quote.append(quoteHTML)
    }
    renderPokemon() {
        const $pokemon = $(".pokemon-container")
        $pokemon.empty()
        const pokemonSource = $('#pokemon-template').html();
        const pokemonTemplate = Handlebars.compile(pokemonSource);
        const pokemon = this.data.getData().pokemon
        const pokemonHTML = pokemonTemplate(pokemon);
        $pokemon.append(pokemonHTML)
    }
    renderMeat() {
        const $meat = $(".meat-container")
        $meat.empty()
        const meatSource = $('#meat-template').html();
        const meatTemplate = Handlebars.compile(meatSource);
        const meat = this.data.getData().meat
        const meatHTML = meatTemplate(meat);
        $meat.append(meatHTML)
    }


}