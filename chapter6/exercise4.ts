let userId: string;

fetchUser();

userId!.toUpperCase();

// Silliest cache ever, but if will definitely never miss!
const cache = { get: (s: string) => s };
function fetchUser() {
    userId = cache.get('userId');
}
