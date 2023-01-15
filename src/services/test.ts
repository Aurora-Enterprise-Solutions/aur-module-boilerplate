export type TestParams = {
  foo: string,
}

export type BazService = (params: TestParams) => boolean

export function baz ({ foo }: TestParams) : boolean {
  return foo !== 'bar'
}

export default baz
