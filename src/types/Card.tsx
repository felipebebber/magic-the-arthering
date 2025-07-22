type CardType = {
    id?: string,
    name: string,
    artist?: string,
    image_uris: {
        normal: string,
        art_crop: string,
    },
    card_faces: [{
        image_uris: {
            normal: string,
            art_crop: string,
        }
    }],
    power?: string,
    toughness?: string,
    rarity?: string,
    mana_cost?: string,
    colors?: string[],
    type_line?: string,
    flavor_text?: string,
    oracle_text?: string,
    released_at?: string,
}

export default CardType;