def encode(string):
    count = 1
    result = ""
    for i in range(len(string)-1):
        if string[i] == string[i+1]:
            count +=1
        else:
            result += string[i] + str(count)
            count = 1
        if i == len(string)-2 and string[i] != string[i+1]:
            result+= string[i+1]+"1"
    return resultdef encode(string):
    count = 1
    result = ""
    for i in range(len(string)-1):
        if string[i] == string[i+1]:
            count +=1
        else:
            result += string[i] + str(count)
            count = 1
        if i == len(string)-2 and string[i] != string[i+1]:
            result+= string[i+1]+"1"
    return result