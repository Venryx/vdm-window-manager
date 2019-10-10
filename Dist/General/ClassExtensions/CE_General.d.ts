interface Array<T> {
    SequenceEquals(otherArray: any[], equalsFunc?: (a: any, b: any) => boolean): boolean;
}
