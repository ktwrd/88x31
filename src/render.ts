import { GeneratedGroup, ImageDetails } from "./generate.ts";

export function RenderImage(image: ImageDetails): string
{
    let link = ''
    if (image.link != undefined && image.link.length > 3)
        link = encodeURI(image.link);
    
    let content = `<img alt="${image.name}" src="${image.name}" `
    if (link.length > 3)
        content += ` targetLink="${link}" `
    content +=` height="31" />`
    if (link.length > 1)
        content = `<a href="${link}" target="_blank">${content}</a>`
    return content
}
export function RenderGroup(group: GeneratedGroup): string
{
    let returnValue: string[] = []
    const groupName = group.name.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&lt;');
    returnValue = returnValue.concat([
        `<li><h1>${groupName}</h1></li>`
    ]);
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