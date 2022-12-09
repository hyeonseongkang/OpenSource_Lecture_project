import sys
import Levenshtein

def calcDistance(str1, str2):
    dist = Levenshtein.distance(str1, str2)
       
    if(dist == 0):
        print(0)
    elif(dist <= 10):
        print(dist)
    else:
        print(-1)
        

if __name__ == '__main__':    
    calcDistance(sys.argv[1], sys.argv[2])