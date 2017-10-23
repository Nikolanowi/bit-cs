var ja = {
    name: 'Nenad',
    lastname: 'Radovanovic',
    age: 25,
    placeOfBirth: 'Arandjelovac',
    fullname: function () {
        return ja.name + ' ' + ja.lastname;
    },
    end: function () {
        return 'Thats all folks!'
    },
    sibling: {
        name: 'Milos',
        lastname: 'Radovanovic'
    },
    drzava: {
        grad: {
            opstina: {
                adresa: {
                    zgrada: {
                        sprat: {
                            ulaz: {
                                interfon: {
                                    skola: {
                                        class: {
                                            profesor: {
                                                ime: 'Marko',
                                                prezime: 'Arsic'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


console.log(ja.drzava.grad.opstina.adresa.zgrada.sprat.ulaz.interfon.skola.class.profesor.ime + ' ' + ja.drzava.grad.opstina.adresa.zgrada.sprat.ulaz.interfon.skola.class.profesor.prezime);

