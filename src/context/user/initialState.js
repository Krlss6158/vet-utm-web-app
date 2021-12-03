export const initialState = {
    user: {
        user_id: null,
        avatar: null,
        first_name: null,
        last_name: null,
        id_canton: null,
        email: null,
        phone: null,
        address: null
    },
    pet: {
        pet_id: null,
        avatar: null,
        name: null,
        birth: null,
        description: null,
        sex: null,
        castrated: null,
        specie: null,
        race: null,
        lost: null,
        id_pet_pather: null,
        id_pet_mother: null,
        photes: []
    },
    provinces: {
        data: []
    }
};