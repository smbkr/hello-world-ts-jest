import { main } from './hello-world'

const mockConsoleLog = jest.spyOn(console, 'log')

describe('hello-world', () => {
  it('says hello world', () => {
    main()
    expect(mockConsoleLog).toHaveBeenCalledWith('hello world')
  })
})
