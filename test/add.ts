// todo: write general assumption that we never create matrix with negative values
// so we dont have to deal with edge case of negative values in matrices
export function add(aa: number[], bb: number[]): number[] {
  return aa.map((_, i) => aa[i] + bb[i]);
}
