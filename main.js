let data;

function dataIsReady(csv) {
    data = csv;
    update();
}

function transformRow(d) {
    return {
        name: d.name,
        id: d.id,
        hydroelectric: parseFloat(d.hydroelectric),
        nuclear: parseFloat(d.nuclear),
        oilgascoal: parseFloat(d.oilgascoal),
        renewable: parseFloat(d.renewable)
    };
}

d3.csv('https://github.com/a10ruiz/Energy-Explorer/blob/be25a527e6e85ceb6e419618ba317547e6d66d72/data.csv', transformRow)
    .then(dataIsReady);
