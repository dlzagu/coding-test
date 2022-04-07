a = list(map(int, input().split()))
b = list(input().split())
answer = 0;
for i in range(len(a)):
        if b[i] == True:
            answer += a[i]
        else:
            
            answer -= a[i]

print(answer)