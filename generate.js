const fs = require('fs')
const path = require('path')

const credits = require('./credits.js')

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

    console.log(target, filename)

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
let filenameArray = fs.readdirSync('./')
for (let filename of filenameArray)
{
    if (/\.(png|gif|jp(e|)g)$/i.test(filename))
    {
        elements.push(GenerateTemplate(filename))
    }
}

if (fs.existsSync('index.html'))
    fs.unlinkSync('index.html')
let content = fs.readFileSync('header.html').toString()
content += '<ul>' + elements.map(v => `<li>${v}</li>`).join('\n') + '</ul>'
content += fs.readFileSync('footer.html')
fs.writeFileSync('index.html', content)