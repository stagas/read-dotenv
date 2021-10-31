import { expect } from 'chai'
import readdotenv from '../src'

it('should return an object when no .env is found', () => {
  const env = readdotenv()
  expect(env).to.be.an('object')
  expect(env).to.deep.equal({})
})

it('should read dotenv in cwd', () => {
  // pretend cwd is in ./fixture
  const origin = process.cwd()
  process.chdir(__dirname + '/fixture')

  const env = readdotenv({ SOME: 'env' })

  process.chdir(origin)
  expect(env).to.be.an('object')
  expect(env.SOME).to.equal('env')
  expect(env.FOO).to.equal('bar')
  expect(env.BAR).to.equal('baz')
  expect(env['#IGNORED']).to.be.an('undefined')
})

it('should read given directory', () => {
  const env = readdotenv(null, __dirname + '/fixture')

  expect(env).to.be.an('object')
  expect(env.FOO).to.equal('bar')
})
