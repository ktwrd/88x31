const fs = require('fs')
const path = require('path')

const credits = require('./credits.js')
const groupData = require('./groups')

const GenerateTemplate = (filename) =>
{
    let target = null
    for (let item of credits)
    {
        if (target != null) continue
        if (item.validate != undefined && typeof item.validate == 'function')
        {
            if (item.validate(filename))
            {
                target = item
            }
        }
        else if (item.files != undefined || typeof item.files == 'object')
        {
            if (item.files.includes(filename))
            {
                target = item
            }
        }
    }

    // console.log(target, filename)

    let elementImage = `<img alt="${filename}" src="${filename}" height="31" targetLink="${target != null ? target.link != null ? target.link || '' : '' : ''}" />`
    if (target != null && target.link != undefined)
    {
        return `<a href="${target.link}">${elementImage}</a>`
    }
    else
    {
        return elementImage
    }
}
let elements = []
let filenameArray = fs.readdirSync('./img')
let generatedFilenames = {}
for (let group of groupData)
{
    let groupElements = []
    for (let filename of filenameArray)
    {
        console.log(filename, filename.match(group.expression))
        if (filename.match(group.expression) != null && generatedFilenames[filename] == undefined)
        {
            groupElements.push(GenerateTemplate(filename))
            generatedFilenames[filename] = true
        }
    }
    if (groupElements.length > 0)
        groupElements = [
            `<h1>${group.name}</h1>`,
            ...groupElements
        ]
    elements = elements.concat(groupElements)
}
let tempElementArr = []
for (let filename of filenameArray)
{
    if (/\.(png|gif|jp(e|)g)$/i.test(filename) && generatedFilenames[filename] == undefined)
    {
        tempElementArr.push(GenerateTemplate(filename))
    }
}
if (tempElementArr.length > 0)
    tempElementArr = [
        `<h1>Other</h1>`,
        ...tempElementArr
    ]
elements = elements.concat(tempElementArr)

if (fs.existsSync('dist/index.html'))
    fs.unlinkSync('dist/index.html')
let content = fs.readFileSync('header.html').toString()
content += '<ul>' + elements.map(v => `<li>${v}</li>`).join('\n') + '</ul>'
content += `<h3>Generated at ${new Date(Date.now()).toLocaleString('en-AU', {timeZone: 'UTC'})} (UTC+00:00)</h3>`
content += fs.readFileSync('footer.html')

fs.writeFileSync('dist/index.html', content)
for (let filename of filenameArray)
{
    if (/\.(png|gif|jp(e|)g)$/i.test(filename))
        fs.copyFileSync(`./img/${filename}`, `./dist/${filename}`)
}