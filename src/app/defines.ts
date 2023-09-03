
type Nullable<T> = T | null;

interface IParticlesOptions {
    preset: string;
    emitters: Nullable<object>;
}

enum Shape {
    X = 'X',
    O = 'O'
}

export {
    Shape,
    Nullable,
    IParticlesOptions
}