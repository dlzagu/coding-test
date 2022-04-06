words = input().upper
unique_worlds = list(set(words))

cnt_list = []

for i in unique_worlds:
    cnt = words.count(i)
    cnt_list.append(cnt)

if cnt_list.count(max(cnt_list)) > 1:
    print('?')
else:
    max_index = cnt_list.index(max(cnt_list))
    print(unique_worlds[max_index])