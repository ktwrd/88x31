module.exports = [
    {
        name: 'flags',
        expression: /^(flag-|plural|pronouns|pride|therian|catgender)/gi
    },
    {
        name: 'powered by',
        expression: /^(emacs|power-button|powered|made(on|with)|vscodium|php|nts_iis|msfrontpage2000|hackerpowered|twopaws|notepad|button_np|redhat|win98_891|thevoid)/gi
    },
    {
        name: 'people',
        expression: /^(niku|niv|kate|emma(link|)|sanya|kitcaliber|lapfox|viper|rotteen|hs|hl|exopet|casey|fdfdfd)/gi
    },
    {
        name: 'services',
        expression: /^(mastodon|twitter|discord|revolt|github|lastfm|netflix)/gi
    },
    {
        name: 'games',
        expression: /^(steam|duke|source|3dr|aniquake)/gi
    },
    {
        name: 'software',
        expression: /^(rp|plgn_rp|download_(download|jukebox|player|rec)|mirc|get_java|getrealplayer|vscod(e|ium)|nsie|ie2|button_np|catscape|any_brow(|ser)|winamp|walisten|wa-button|realone|rp(7|)|plgn_rp|freeplayer|getfree|get_player|freeplayer|50_button_static|GetWinMP)/gi
    },
    {
        name: 'gnu',
        expression: /^(button\-[0-9]+x[0-9]+\-gnu|button-powered_by_gnu)/gi
    },
    {
        name: 'linux',
        expression: /^(xenia|visitmini|redhat|netbsd|ubuntu|getubuntu|artix)/gi
    }
]