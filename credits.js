export const data = [
    {
        link: 'https://pillowfort.social/posts/1632320',
        validate (filename) {
            return filename.startsWith('flag-')
        }
    },
	{
		link: 'https://rekkanogotoku.com/',
		files: ['viperbtn.gif']
	},
    {
        link: 'https://niv.gay/',
        files: ['niv-banner.gif']
    },
    {
        link: 'https://kernel.org',
        validate (filename) {
            return filename.startsWith('xenia_')
        }
    },
    {
        link: 'https://heckscaper.com',
        validate (filename) {
            return filename.startsWith('hs8831') ||
                [
                    'emma.gif',
                    'emmalink.gif'
                ].includes(filename)
        }
    },
    {
        link: `http://www.mabsland.com/Adoption.html`,
        validate (filename) {
            return filename.startsWith('Censor_')
        }
    },
    {
        link: 'https://lapfox.com',
        validate (filename) {
            return filename.startsWith('lapfox') || filename.startsWith('rotteen') || filename.startsWith('kitcaliber')
        }
    },
    {
        link: 'https://en.pronouns.page/',
        files: [
            'pronouns.page'
        ]
    },
    {
        link: 'https://notepad.org',
        files: [
            'button_np.gif'
        ]
    },
    {
        link: 'https://mogai-genders.fandom.com/wiki/Catgender',
        files: ['catgender.gif']
    },
    {
        link: 'https://ada.untergrund.net/',
        files: ['ada.gif']
    },
    {
        link: 'https://pouet.net',
        files: ['pouet.gif']
    },
    {
        link: 'https://otherkin.fandom.com/wiki/Therians',
        files: ['therian.png']
    },
    {
        link: 'https://code.visualstudio.com',
        files: ['vscode.gif']
    },
    {
        link: 'https://en.wikipedia.org/wiki/Source_(game_engine)',
        validate (filename) {
            return filename.startsWith('source-')
        }
    },
    {
        link: 'https://yesterweb.org/no-to-web3/',
        files: ['noweb3.gif', 'roly-saynotoweb3.gif']
    },
    {
        link: 'https://nikutrax.neocities.org/',
        files: ['niku.png']
    },
    {
        link: 'https://casey.pet/',
        files: ['casey.png']
    },
    {
        link: 'https://yesterweb.org',
        files: ['yesterweb.png']
    },
    {
        link: 'https://crushcapitalism.com/',
        files: ['crushcapitalism.png']
    },
    {
        link: 'https://sanya.gay',
        files: ['sanya.png']
    },
    {
        link: 'https://exo.pet',
        validate (filename) {
            return filename.startsWith('exopet') || filename == 'fdfdfd.gif'
        }
    },
    {
        link: 'https://web.archive.org/web/20110513011151/http://graphics.rootmode.com/',
        validate (filename) {
            return filename.includes('-gnu-')
        }
    },
    {
        link: 'https://kate.pet',
        files: ['kate.gif']
    },
    {
        link: 'http://creativecommons.org/publicdomain/zero/1.0/',
        files: ['public-domain.png']
    },
    {
        link: 'https://treblesand.dreamwidth.org/',
        files: ['plural_ALT.png', 'plural.png']
    },
	{
		link: `https://88x31.kate.pet/`,
		files: ['_88x31.kate.pet']
	},
    {
        link:  'https://hyenatown.nekoweb.org/',
        files: ['vscodium100.gif', 'hyenatown_city_limits.gif']
    },
    {
        link: 'https://forum.artixlinux.org/index.php/topic,3871.0.html',
        files: ['artix.png', 'artix.gif']
    },
    {
        link: 'https://wiki.ubuntu.com/WebsiteButtons',
        validate (filename) {
            return filename.match(/^(ubuntu|getubuntu|poweredby(|_)ubuntu)/gi)
        }
    },
    {
        link: 'https://transistorcafe.net/~voltbun/artwork.html',
        files: ['vbwebspace.gif', 'xenia-now.gif', 'xeniatrans_now.gif']
    },
    {
        link: 'http://transistorcafe.net/',
        files: ['TransistorCafeButton.gif']
    },
    {
        link: 'https://www.sominemo.com/',
        files: ['sominemo.gif']
    },
    {
        link: 'https://github.com/IShouldTestMyCode/hrt-cafe-archive',
        files: ['hrtcafe.gif']
    },
    {
        link: 'https://hazelisonthewifi.com/',
        files: ['arc.gif']
    },
    {
        link: 'https://ezri.pet',
        files: ['ezri.png']
    },
    {
        link: 'https://ezri.cloud',
        files: ['ezricloud.png']
    },
    {
        link: 'https://alyx.sh/posts/hrt-geocities-buttons/',
        files: ['hrt-e2.gif', 'hrt-e2vial.gif', 'hrt-tc.gif']
    },
	{
		link: 'https://aseprite.org/',
		files: ['aseprite.png']
	},
	{
		link: 'https://wyrmwood.garden/',
		files: ['wyrmwoodgarden.png']
	}
]
