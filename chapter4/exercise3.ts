type Reservation = unknown;

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
    (destination: string): Reservation;
};

const reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string) => {
    if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined) {
        // 1st overload.
    } else if (fromOrDestination instanceof Date && typeof toOrDestination === 'string') {
        // 2nd overload.
    } else if (typeof fromOrDestination === 'string') {
        // 3rd overload.
    }
};

reserve('Bogota');
