enum Color {
    Pink,
    Red,
    Purple,
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Color {
    export function from(s: 'pink' | 'red' | 'purple'): Color;
    export function from(s: string) {
        switch (s) {
            case 'pink':
                return Color.Pink;
            case 'red':
                return Color.Red;
            case 'purple':
                return Color.Purple;
            default:
                return null;
        }
    }
}

const color: Color = Color.from('red');
