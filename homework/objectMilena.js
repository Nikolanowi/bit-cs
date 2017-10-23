var moi = {
    name: 'Milena',
    lastname: 'Mijovic',
    yearOfBirth: '1991',
    country: 'Serbia',
    languages: function () {
        return 'english' + ' ' + 'french' + ' ' + 'greek'
    },
    parents: {
        name: 'Desimir',
        lastname: 'Mijovic'
    }
}

console.log(moi.yearOfBirth, moi.name, moi.country)


var englishToFrench = {
    car: {
        voiture: {
            synonym: 'bagnole'
        }
    }
}

console.log(englishToFrench.car.voiture.synonym)