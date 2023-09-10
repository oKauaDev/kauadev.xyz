function isType<T>(check: unknown, ...possibles: T[]): check is T {
  if (check && typeof check === "string") {
    return possibles.includes(check as T);
  }
  return false;
}

export default isType;
