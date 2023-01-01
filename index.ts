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

for (let item of Deno.readDirSync(config.distPath))
{
    if (!item.isFile && item.name != 'keep')
        continue;
    Deno.removeSync(path.join(config.distPath, item.name))
}

let content = generate.run()
let encoder = new TextEncoder()
Deno.writeFileSync('./dist/index.html', encoder.encode(content))

for (let item of Deno.readDirSync(config.imagePath))
{
    Deno.copyFileSync(
        path.join(config.imagePath, item.name),
        path.join(config.distPath, item.name))
}