module.exports = function(Api) {
    return {
        Bendera: async () => (await Api()).get("v1/game/tebakan/bendera"),
        Gambar: async () => (await Api()).get("v1/game/tebakan/gambar"),
        Game: async () => (await Api()).get("v1/game/tebakan/game"),
        Kata: async () => (await Api()).get("v1/game/tebakan/kata"),
        Kimia: async () => (await Api()).get("v1/game/tebakan/kimia"),
        Lagu: async () => (await Api()).get("v1/game/tebakan/lagu"),
        Lirik: async () => (await Api()).get("v1/game/tebakan/lirik")
    }
};