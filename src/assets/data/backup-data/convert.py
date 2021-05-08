import json

w1 = open("worlds4.txt", 'r')
w2 = open("worlds.txt", 'r')

data1 = json.load(w1)
data2 = json.load(w2)

for d1 in data1:
    for d2 in data2:
        if d1['Country_or_Area'] == d2['name']:
            d2['isoAlpha3Code'] = d1["ISO_Alpha3_Code"]

output = open('result.txt', 'w')
json.dump(data2, output)