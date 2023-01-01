import { GeneratedGroup, ImageDetails } from "./generate.ts";

export function RenderImage(image: ImageDetails): string
{
    let link = ''
    if (image.link != undefined && image.link.length > 3)
        link = image.link
    let content = `<img alt="${image.name}" src="${image.name}" `
    if (image.link != undefined && image.link.length > 3 )
        content += ` targetLink="${link}" `
    content +=` height="31" />`
    if (link.length > 1)
        content = `<a href="${link}">${content}</a>`
    return content
}
export function RenderGroup(group: GeneratedGroup): string
{
    let returnValue: string[] = []
    returnValue = returnValue.concat([
        `<li><h1>${group.name}</h1></li>`
    ])
    for (let item of group.images)
    {
        returnValue.push(`<li>${RenderImage(item)}</li>`)
    }

    return returnValue.join('\n')
}
export function RenderTimestamp(): string
{
    return `<h3>Generated at ${new Date(Date.now()).toLocaleString('en-AU', {timeZone: 'UTC'})} (UTC+00:00)</h3>`
}