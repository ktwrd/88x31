import {config} from '../index.ts'
import { RenderGroup, RenderTimestamp } from './render.ts'
export function run(): string
{
    let content: string = ''
    content += config.headerContent
    let lookup = generateLookup()
    let gengroups: string[] = []
    for (let group of lookup)
    {
        gengroups.push(RenderGroup(group))
    }
    content += `<ul>${gengroups.join('\n')}</ul>`
    content += RenderTimestamp()
    content += config.footerContent
    return content
}

export interface ImageDetails
{
    name: string
    link?: string
    author: string
}
export interface GeneratedGroup
{
    images: ImageDetails[]
    name: string
}
export function generateLookup(): GeneratedGroup[]
{
    let files = Deno.readDirSync(config.imagePath)

    let groups: GeneratedGroup[] = []
    let images: ImageDetails[] = []
    for (let item of files)
    {
        if (!item.isFile)
            continue;

        let data: ImageDetails = {
            name: item.name,
            link: '',
            author: ''
        }
        for (let thing of config.credits)
        {
            if (thing.validate != undefined && thing.validate(item.name))
            {
                data.link = thing.link
            }
            else if (thing.files != undefined && thing.files.includes(item.name))
            {
                data.link = thing.link
            }
        }
        images.push(data)
    }
    let generatedItems: {[key: string]: Boolean} = {}
    for (let groupItem of config.groups)
    {
        let group: GeneratedGroup = {
            name: groupItem.name,
            images: []
        }
        for (let image of images)
        {
            if (image.name.match(groupItem.expression) != null
                && generatedItems[image.name] == undefined)
            {
                generatedItems[image.name] = true
                group.images.push(image)
            }
        }
        groups.push(group)
    }
    let noneGroup: GeneratedGroup = {
        name: 'Other',
        images: []
    }
    for (let item of images)
    {
        if (generatedItems[item.name] == undefined)
            noneGroup.images.push(item)
    }
    if (noneGroup.images.length > 0)
        groups.push(noneGroup)
    return groups
}