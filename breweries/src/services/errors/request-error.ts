export class RequestError extends Error {
  constructor(statusText: string) {
    super(statusText)
    this.name = 'RequestError'
  }
}