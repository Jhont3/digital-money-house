declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}
// export interface APIResults {
//     results: User[];
//     info:    Info;
// }

// export interface Info {
//     seed:    string;
//     results: number;
//     page:    number;
//     version: string;
// }

//  