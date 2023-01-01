import * as path from 'https://deno.land/std@0.170.0/path/mod.ts';
import type { IConfig } from './index.d.ts'

import * as _groups from './groups.js'
import * as _credits from './credits.js'

import * as generate from './src/generate.ts'

let decoder = new TextDecoder('utf-8')
export const config: IConfig = {
    imagePath: path.resolve('./img/'),
    distPath: path.resolve('./dist/'),
    groups: _groups.data,
    credits: _credits.data,
    headerContent: decoder.decode(Deno.readFileSync('./header.html')),
    footerContent: decoder.decode(Deno.readFileSync('./footer.html'))
}

let content = generate.run()
let encoder = new TextEncoder()
Deno.removeSync('./dist/index.html')
Deno.writeFileSync('./dist/index.html', encoder.encode(content))