module.exports = function(Api) {
    return {
        TextOnly: {
            Generate: async function(options) {
                const { model, text } = options;
    
                if (model === "Pencil") return (await Api()).Get("v1/creator/textpro/pencil", { text });
                if (model === "Glitch1") return (await Api()).Get("v1/creator/textpro/glitch1", { text });
                if (model === "Glitch2") return (await Api()).Get("v1/creator/textpro/glitch2", { text });
                if (model === "Blackpink") return (await Api()).Get("v1/creator/textpro/blackpink", { text });
                if (model === "Berry") return (await Api()).Get("v1/creator/textpro/berry", { text });
                if (model === "Neon") return (await Api()).Get("v1/creator/textpro/neon", { text });
                if (model === "LogoBear") return (await Api()).Get("v1/creator/textpro/logo-bear", { text });
                if (model === "Christmas3D") return (await Api()).Get("v1/creator/textpro/3d-christmas", { text });
                if (model === "Boxtext3D") return (await Api()).Get("v1/creator/textpro/3d-boxtext", { text });
                if (model === "NeonLight3D") return (await Api()).Get("v1/creator/textpro/3d-neon-light", { text });
                if (model === "OrangeJuice3D") return (await Api()).Get("v1/creator/textpro/3d-orange-juice", { text });
                if (model === "Thunder1") return (await Api()).Get("v1/creator/textpro/thunder1", { text });
                if (model === "Thunder2") return (await Api()).Get("v1/creator/textpro/thunder2", { text });
                if (model === "GreenHorror") return (await Api()).Get("v1/creator/textpro/green-horror", { text });
                if (model === "Magma") return (await Api()).Get("v1/creator/textpro/magma", { text });
                if (model === "ChocolateCake") return (await Api()).Get("v1/creator/textpro/chocolate-cake", { text });
                if (model === "Strawberry") return (await Api()).Get("v1/creator/textpro/strawberry", { text });
                if (model === "Paper") return (await Api()).Get("v1/creator/textpro/paper", { text });
                if (model === "HarryPotter") return (await Api()).Get("v1/creator/textpro/harry-potter", { text });
                if (model === "Embossed") return (await Api()).Get("v1/creator/textpro/embossed", { text });
                if (model === "Broken") return (await Api()).Get("v1/creator/textpro/broken", { text });
                if (model === "Glosy") return (await Api()).Get("v1/creator/textpro/glosy", { text });
                if (model === "Bear") return (await Api()).Get("v1/creator/textpro/bear", { text });
                if (model === "Devil") return (await Api()).Get("v1/creator/textpro/devil", { text });
                if (model === "Christmas") return (await Api()).Get("v1/creator/textpro/christmas", { text });
                if (model === "Dropwater") return (await Api()).Get("v1/creator/textpro/dropwater", { text });
                if (model === "Carbon") return (await Api()).Get("v1/creator/textpro/carbon", { text });
                if (model === "ImgGlitch") return (await Api()).Get("v1/creator/textpro/img-glitch", { text });
                if (model === "Gradient") return (await Api()).Get("v1/creator/textpro/gradient", { text });
                if (model === "Glue") return (await Api()).Get("v1/creator/textpro/glue", { text });
                if (model === "Bood") return (await Api()).Get("v1/creator/textpro/bood", { text });
                if (model === "Firework") return (await Api()).Get("v1/creator/textpro/firework", { text });
                if (model === "Stone") return (await Api()).Get("v1/creator/textpro/stone", { text });
                if (model === "Metalic") return (await Api()).Get("v1/creator/textpro/metalic", { text });
                if (model === "Metallic") return (await Api()).Get("v1/creator/textpro/metallic", { text });
                if (model === "Discovery") return (await Api()).Get("v1/creator/textpro/discovery", { text });
                if (model === "Circuit") return (await Api()).Get("v1/creator/textpro/circuit", { text });
                if (model === "Sketch") return (await Api()).Get("v1/creator/textpro/sketch", { text });
                if (model === "Skeleton") return (await Api()).Get("v1/creator/textpro/skeleton", { text });
                if (model === "Light") return (await Api()).Get("v1/creator/textpro/light", { text });
                if (model === "Transformer") return (await Api()).Get("v1/creator/textpro/transformer", { text });
                if (model === "VideoGame") return (await Api()).Get("v1/creator/textpro/video-game", { text });
                if (model === "Fiction") return (await Api()).Get("v1/creator/textpro/fiction", { text });
                if (model === "CaptainAmerica") return (await Api()).Get("v1/creator/textpro/captain-america", { text });
            }
        },
        DoubleText: {
            Generate: async function(options) {
                const { model, text1, text2 } = options;
    
                if (model === "GlitchTiktok") return (await Api()).Get("v1/creator/textpro/glitch-tiktok", { text1, text2 });
                if (model === "LogoNinja") return (await Api()).Get("v1/creator/textpro/logo-ninja", { text1, text2 });
                if (model === "VideoGameClassic") return (await Api()).Get("v1/creator/textpro/video-game-classic", { text1, text2 });
                if (model === "MarvelStudios") return (await Api()).Get("v1/creator/textpro/marvel-studios", { text1, text2 });
                if (model === "Layered") return (await Api()).Get("v1/creator/textpro/layered", { text1, text2 });
                if (model === "Pornhub") return (await Api()).Get("v1/creator/textpro/pornhub", { text1, text2 });
                if (model === "AGlitch") return (await Api()).Get("v1/creator/textpro/aglitch", { text1, text2 });
                if (model === "CHoror") return (await Api()).Get("v1/creator/textpro/choror", { text1, text2 });
                if (model === "Spooky") return (await Api()).Get("v1/creator/textpro/spooky", { text1, text2 });
            }
        },
    }
};