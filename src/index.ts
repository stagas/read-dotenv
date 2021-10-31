/* eslint-disable @typescript-eslint/no-explicit-any */

import { readFileSync as read } from 'fs'
import { join } from 'path'

export default function (
  env: Record<string, any> | null = {},
  root: string = process.cwd()
) {
  env ??= {}

  const parse = (s: string) => {
    try {
      return JSON.parse(s)
    } catch {
      return s
    }
  }

  const entries = Object.entries(env) as string[][]

  try {
    entries.push(
      ...(read(join(root, '.env'), 'utf-8').split(/\r\n|\n/g) as string[])
        .filter(Boolean)
        .filter(line => !line.startsWith('#'))
        .map(line => line.split('='))
    )
  } catch {}

  env = Object.fromEntries(
    entries.map(([key, ...value]) => [
      key,
      parse(process.env[key] ?? value.join('='))
    ])
  ) as typeof env & Record<string, string>

  return env
}
