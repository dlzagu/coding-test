# [프로그래머스] 'H-index ' 문제 자바스크립트 알고리즘
-------
https://programmers.co.kr/learn/courses/30/lessons/42747
### Q. H-index 
-----

> H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.


#### 제한사항 
---
* 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
* 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.


#### 입출력 예  
-----
|citations|return|
|:---:|:---:|
|[3, 0, 6, 1, 5]|3|



* 코드 
```js
function solution(citations) {
    var i = 0;
    citations.sort((a,b)=>b-a);
    
    while(i+1<=citations[i]){
        i++ 
    }
    return i;
}

   
``` 

**참고**
<https://www.ibric.org/myboard/read.php?Board=news&id=270333>

위 링크를 참고하면 H-index를 이해하기 쉬움.
![h-index](https://www.ibric.org/upload/geditor/201603/0.36055300_1457572609.gif)

#### H-지수 구하는 방법
나의 h는 어떻게 구할 수 있을까? 위 표와 같이 자신이 저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후, 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다. 이 표에서는 10이 H-지수가 되는 것입니다. 다시 말하여, 이 연구원은 논문 인용횟수가 10이 넘는 논문이 적어도 10편이 된다는 것을 의미합니다.

*즉 내림차순으로 정렬하고 논문 인용회수를 하나씩 돌면서, n회이상 인용된 논문이 n개 보다 같거나 클 때를 구해줌.*

출처: [BRIC Bio통신원] [연구논문을 위한 핵심 10단계] H-지수(H-Index) 란 무엇인가? ( https://www.ibric.org/myboard/read.php?Board=news&id=270333 )

