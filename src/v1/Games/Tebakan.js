module.exports = function(Api) {
    return {
        Bendera: async () => (await Api()).Get("v1/games/tebakan/bendera"),
        Gambar: async () => (await Api()).Get("v1/games/tebakan/gambar"),
        Game: async () => (await Api()).Get("v1/games/tebakan/game"),
        Kata: async () => (await Api()).Get("v1/games/tebakan/kata"),
        Kimia: async () => (await Api()).Get("v1/games/tebakan/kimia"),
        Lagu: async () => (await Api()).Get("v1/games/tebakan/lagu"),
        Lirik: async () => (await Api()).Get("v1/games/tebakan/lirik")
    }
};