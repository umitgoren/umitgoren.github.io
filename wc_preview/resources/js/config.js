if(typeof wordPressParams == "undefined"){
    wordPressParams = {
        resourcePath: "",
        console_log: true,
        single_random_reveal_cost: 100,
        multi_random_reveal_cost: 300,
        finger_reveal_cost: 200,
        num_combo_required_for_coin_reward: 300,
        num_coins_awarded_for_combo: 25,
        num_bonus_words_to_find_for_reward: 50,
        num_coins_awarded_for_bonus_words: 25,
        default_coin_count: 5000,
        enable_daily_reward: true,
        use_hand_cursor_for_buttons: true,
        bg_music_enabled: true,
        bg_music_volume: 0.1,
        wordnik_api_key: 'sh2ebobqdmoyapuqdmvdzgfci7le5sbrfro373gac1mh10ros',
        default_language: 'en',
        dial_line_color: '#e63941',
        canvas_color: '#fa85b1',
        enable_full_screen_button: true,
        auto_full_screen_mobile: true,
        auto_full_screen_desktop: false,
        push_btns_on_ios: true
    };
}else{
    wordPressParams.console_log = wordPressParams.console_log === '1';
    wordPressParams.single_random_reveal_cost = parseInt(wordPressParams.single_random_reveal_cost);
    wordPressParams.multi_random_reveal_cost = parseInt(wordPressParams.multi_random_reveal_cost);
    wordPressParams.finger_reveal_cost = parseInt(wordPressParams.finger_reveal_cost);
    wordPressParams.num_combo_required_for_coin_reward = parseInt(wordPressParams.num_combo_required_for_coin_reward);
    wordPressParams.num_coins_awarded_for_combo = parseInt(wordPressParams.num_coins_awarded_for_combo);
    wordPressParams.num_bonus_words_to_find_for_reward = parseInt(wordPressParams.num_bonus_words_to_find_for_reward);
    wordPressParams.num_coins_awarded_for_bonus_words = parseInt(wordPressParams.num_coins_awarded_for_bonus_words);
    wordPressParams.default_coin_count = parseInt(wordPressParams.default_coin_count);
    wordPressParams.use_hand_cursor_for_buttons = wordPressParams.use_hand_cursor_for_buttons === '1';
    wordPressParams.bg_music_enabled = wordPressParams.bg_music_enabled === '1';
    wordPressParams.bg_music_volume = parseFloat(wordPressParams.bg_music_volume) / 100.0;
    wordPressParams.auto_full_screen_mobile = wordPressParams.auto_full_screen_mobile === '1';
    wordPressParams.auto_full_screen_desktop = wordPressParams.auto_full_screen_desktop === '1';
    wordPressParams.push_btns_on_ios = wordPressParams.push_btns_on_ios === '1';
} 

let AVAILABLE_LANGUAGES = [
    {label: "English",   code: "en", hasDictionary: true,  levelCount: 10034}
];

let WHEEL_SLICES = [
    {text:"15", quantity: 15, probability: 17},
    {text:"50", quantity: 50, probability: 16},
    {text:"25", quantity: 25, probability: 16},
    {text:"500", quantity: 500, probability: 1},
    {text:"75", quantity: 75, probability: 16},
    {text:"35", quantity: 35, probability: 17},
    {text:"100", quantity: 100, probability: 16},
    {text:"750", quantity: 750, probability: 1}
];

function getNumberOfTilesToRevealForMultiRandomHint(levelIndex){
    if(levelIndex < 100) return 3;
    else if(levelIndex < 200) return 4;
    else if(levelIndex < 300) return 5;
    else if(levelIndex < 500) return 6;
    else return 7;
}

let FONT = "Arial";