file = open("test.txt")
out = open('output.txt', 'w')

question = ""

while 1:
    line = file.readline()
    if not line:
        break
    line = line.lstrip()

    # start
    if ('new' in line):
        question = '{ \'type\': \'' + line[4:line.find('({')] + '\','
    
    # end
    elif ('})' in line):
        question += ' },'
        # print question
        out.write(question)

    else:
        question += line.replace("\n","")
    
file.close()
out.close()