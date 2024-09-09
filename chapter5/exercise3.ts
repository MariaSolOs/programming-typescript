type Shoe = { purpose: string };

class BalletFlat implements Shoe {
    purpose = 'dancing';
}

class Boot implements Shoe {
    purpose = 'woodcutting';
}

class Sneaker implements Shoe {
    purpose = 'walking';
}

function create(type: 'balletFlat'): BalletFlat;
function create(type: 'boot'): Boot;
function create(type: 'sneaker'): Sneaker;
function create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
        case 'balletFlat':
            return new BalletFlat();
        case 'boot':
            return new Boot();
        case 'sneaker':
            return new Sneaker();
    }
}

const Shoe = { create };
