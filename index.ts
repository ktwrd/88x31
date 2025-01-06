import * as path from 'https://deno.land/std@0.170.0/path/mod.ts';
import type { IConfig } from './index.d.ts'

import * as _groups from './groups.js'
import * as _credits from './credits.js'

import * as generate from './src/generate.ts'

const exists = async (filename: string): Promise<boolean> => {
    try {
        await Deno.stat(filename);
        // successful, file or directory must exist
        return true;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            // file or directory does not exist
            return false;
        } else {
            // unexpected error, maybe permissions, pass it along
            throw error;
        }
    }
};

let decoder = new TextDecoder('utf-8')
export const config: IConfig = {
    imagePath: path.resolve('./img/'),
    distPath: path.resolve('./dist/'),
    groups: _groups.data,
    credits: _credits.data,
    headerContent: decoder.decode(Deno.readFileSync('./header.html')),
    footerContent: decoder.decode(Deno.readFileSync('./footer.html'))
}
console.log(`cwd: ` + Deno.cwd());
console.log(`Files in ${path.resolve('./')}`)
for (let item of Deno.readDirSync(path.resolve('./')))
{
    console.log(`- ${item.name}` + (item.isDirectory ? ' (directory)' : ''))
}
if (!exists(config.distPath))
{
    Deno.mkdirSync(config.distPath);
}
console.log(`Reading all files in ${config.distPath}`);
for (let item of Deno.readDirSync(config.distPath))
{
    if (!item.isFile && item.name != '.gitkeep')
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
