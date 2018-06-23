# HTML 강의를 듣고 기록
- 강의는 Inflearn의 [생활코딩 html기초](https://www.inflearn.com/course/html-%EA%B8%B0%EC%B4%88/)
- 예제를 저장하거나 핵심 내용을 기록.

## DTD (DOCTYPE)
- <!DOCTYPE html>
- DTD (Document Type Definition)
- 브라우저로 하여금, 문서의 정의를 알림

## 띄어쓰기
- &nbsp;

## 목록
- 연관되어 있는 항목들을 나열할 때 사용
- 순서가 없는 항목들은 ul(unordered list), 순서가 없는 항목은 ol(ordered list)를 사용
- css와 함께 메뉴로도 사용

순서가 없는 항목
> <ul>
>   <li>항목</li>
> </ul>
순서가 있는 항목
> <ol>
>   <li>항목</li>
> </ol>

## 이스케이핑
- html 코드를 화면에 표시하기 위해 사용
- 브라우저에 의해 해석되기 때문에 표시하기 위해서는 escaping을 사용

### 코드 리스트
> &amp; -> &
> &lt; -> <
> &gt; -> >
> &quot; -> "
> &apos; -> '

## Definition of HEAD tag
- 어떤 내용을 담고 있는가에 대한 정보

#### 메타 데이터
- 데이터를 설명하는 데이터
- HEAD tag 아랫쪽에 들어감
- e.g. 어떤 favicon을 쓰는가, 어떤 JS를 쓰는가에 대해