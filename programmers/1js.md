# [프로그래머스] 없는 숫자 더하기 자바스크립트 알고리즘
-------
https://programmers.co.kr/learn/courses/30/lessons/86051?language=python3
### Q.없는 숫자더하기
-----
> 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 
---
* 1 ≤ numbers의 길이 ≤ 9
  
  * 0 ≤ numbers의 모든 원소 ≤ 9
  * numbers의 모든 원소는 서로 다릅니다.

#### 입출력 예  
----
*입력* : [1,2,3,4,6,7,8,0]

*출력* : 14
*  5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.


* 코드 
```js
function solution(numbers){
     var answer=0;
    for(let i = 1; i<10; i++){
        if(!numbers.includes(i)){
            answer += i
        }
    }
    return answer;
}
   
```
**참고**
```js
let arr =[1,2,4];
console.log(arr.includes(2));
``` 
.includes()는 문자열이 특정 문자열을 포함하는지 확인하는 메서드입니다. 

