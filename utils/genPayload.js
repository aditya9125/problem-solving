
const images=[
    {
        "name": "4000x4000_1.jpg",
        "source": {
            "creativeCloudPath": "temp/a50dcd2f-994c-41a0-88b8-f9f0254b8b63.jpg"
        }
    }
]
for(let i=2;i<=1000;i++){
    images.push({
        "name": `4000x4000_${i}.jpg`,
        "source": {
            "creativeCloudPath": `temp/a50dcd2f-994c-41a0-88b8-f9f0254b8b63.jpg`
        }
    });
}

const fs = require('fs');

fs.writeFileSync('outputPaylod.json', JSON.stringify(images, null, 2));