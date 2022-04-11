# [프로그래머스] 음양 숫자 더하기 자바스크립트 알고리즘
-------
https://programmers.co.kr/learn/courses/30/lessons/76501
### Q.음양 숫자더하기
-----
> 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 
---
* absolutes의 길이는 1 이상 1,000 이하입니다.
  
  * absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.

* signs의 길이는 absolutes의 길이와 같습니다

  * signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

#### 입출력 예  
----
*입력* : [4,7,12], [true,false,true]

*출력* : 9
* signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
* 따라서 세 수의 합인 9를 return 해야 합니다.


* 코드 
```js
function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((a,i)=>{
        if(signs[i]==true){
            answer += a;
        }else{
            answer -= a;
        }
    })
    return answer;
}
    
   
``` 

다른풀이 
* 코드

```js
function solution(absolutes, signs) {
      
    return absolutes.reduce((acc, val , i)=> acc+(val * (signs[i]? 1 : -1)),0);
}
    
   
``` 

