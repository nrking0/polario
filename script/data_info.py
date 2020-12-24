import json

with open('src\data\mbfc.json') as f:
  data = json.load(f)

accuracy = []
bias = []

for source in data["sources"]:
    accuracy.append(source["accuracy"])
    bias.append(source["bias"])


accuracy = set(accuracy)
bias = set(bias)

print(accuracy)
print(bias)

# Accuracy Labels: 
#   {'', 'very high', 'not parsed', 'mixed', 'unlisted', 'low', 'mostly factual', 'fake', 'very low', 'satire', 'high'}
# Bias Labels: 
#   {'least biased', 'not parsed', 'left-center', 'satire', 'right-center', 'least', 'pro-science', 'right', 'fake', 
#    'questionable', 'conspiracy', 'left', 'conspiracy/pseudoscience'}