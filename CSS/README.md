# CSS강의를 듣고 기록
- 강의는 inflearn의 [생활코딩 강의](https://www.inflearn.com/course/css-%EA%B8%B0%EB%B3%B8%EB%B6%80%ED%84%B0-%ED%99%9C%EC%9A%A9%EA%B9%8C%EC%A7%80/)
- 예제를 실습해 보고 저장하거나 핵심 내용을 메모

## 목차
1. [선택자](#선택자)
2. [적용 순서](#적용순서)
3. [서체 다루기](#서체&nbsp;다루기)
4. [레이아웃 기본](#레이아웃기본)
5. [레이아웃 활용](#레이아웃활용)
6. [그래픽](#그래픽)
7. [유지 보수](#유지보수)
8. [Preprocessor](#Preprocessor)
9. [Fontello](#Fontello)
---
## 선택자
### 선택자와 선언
```css
h1 {color:red; text-decoration:underline;}
```
- h1 은 selector로, 어떤 태그를 선택하였는가를 나타냄
- 선택한 태그의 CSS효과는 뒤쪽의 {}안에서 선언됨
> [예제파일](./src/Ex_SelectorDeclaration.html)
### ID 선택자
```css
#select {color:blue; text-decoration:none;}
```
- 태그를 선택자로 할 경우 해당하는 모든 태그의 CSS 효과가 바뀌기 때문
- 원하는 효과를 주고자하는 대상을 ID 속성값을 통하여 구분
> [예제파일](./src/Ex_IDSelectorDeclaration.html)
### 부모 자식 선택자
```css
#lecture>li {color:white; font-size:10px;}
```
- 부모 ID에서 직계 자손인 li태그를 선택한 예
- 직계 자손인 li만 해당 CSS 효과를 받음
> [예제파일](./src/Ex_ParentChildSelecotr.html)
#### Selector 관련 게임
> [CSS DINER](http://flukeout.github.io/)
### 가상 클래스 선택자(Pseudo Class Selector)
```css
a:link{color: black;}
a:visited{color: red;}
a:hover{color: yellow;}
a:active{color: green;}
a:focus{color: white;}
```
- :link - 방문한 적이 없는 링크
- :visited – 방문한 적이 있는 링크
- :hover – 마우스를 롤오버 했을 때
- :active – 마우스를 클릭했을 때
- :focus - tab키 또는 input일 경우 입력값을 받는 상태일 때(focus on 상태)
> [예제파일](./src/Ex_PseudoSel.html)
---
## 적용순서
### 상속
- css에서는 생산성 향상을 위해 기본적으로 상속을 지원함
- 일부 속성은 상속되지 않음(e.g. 폰트의 color는 상속되나 테두리는 상속되지않음)
> [예제파일](./src/Ex_Inheritance.html)
### Cascading(적용 우선순위)
> CSS (Cascading Style Sheet)
- 폭포수형 스타일 시트
- depth로 우선순위를 지정
- [실습](./src/Ex_Cascading.html)
#### 우선순위
1. style attribute (스타일 속성)
2. ID selector
3. class selector
4. tag selector
- 생산성을 위해 좀 더 구체화되어있어야 우선순위가 높다
- 포괄적이면 우선순위가 낮음
- !important를 통해 우선순위를 높게 바꿀 수 있다. (좋은 방법은 아님)
##### syntax
```css
#idsel{color:red; !important}
```
---
## 서체&nbsp;다루기
### 크기 : font-size
> **px** and **em**, **rem**
- px : 고정된 크기, 변하지 않음 (e.g. 사용자가 브라우저의 글꼴 크기를 바꾸었을때 px는 바뀌지 않음)
- em, rem : 상대적인 크기, 사용자가 페이지의 폰트를 가변적으로 변경할 수 있게 할 때
#### 오늘날에는 rem을 사용함 ([예제](./src/Ex_Font_size.html))

### 색상 : Color
1. color name
2. hex
3. rgb
> **이러한 세가지 방식으로 색상을 표시함** **([예제](./src/Ex_color.html))**

### 정렬 : text-align
```css
p{
    text-align: right;
    text-align: center;
    text-align: left;
    text-align: justify;
}
```
1. 오른쪽 정렬
2. 가운데 정렬
3. 왼쪽 정렬
4. 균등하게 정렬(텍스트의 길이가 균등하게 잘림)

#### 많은 양의 텍스트가 필요한 경우, [Lorem Ipsum](https://www.lipsum.com/) 에서 의미없는 텍스트를 가져올 수 있다.

### 서체
#### font-family
```css
h1{
    font-family: "Times New Roman", Times, serif;
}
```
- 띄어쓰기가 있는 경우, ""큰따옴표로 묶어준다
- Times New Roman 폰트가 없을 경우, Times 폰트를 사용하게 됨
- 마지막 폰트는 포괄적인 폰트로 지정함, [예제](./src/Ex_FontFamily.html)
  - serif (장식이 있음)
  - sans-serif (장식이 없음)
  - cursive
  - fantasy
  - monospace (고정폭)

#### line-height
```css
#type1{
    font-size: 2rem;
    line-height: 3;
}
```
- 자간을 조정
- px같은 절대적인 길이를 피해 사용(숫자 2와같은 상대적인 수치 사용), [예제](./src/Ex_FontFamily.html)

#### font
```css
#type2{
    font:bold 2rem/2 arial, verdana, "Helvetica Neue", sans-serif
}
```
- 앞서 사용했던 것들을 함축적으로 사용할 수 있게 함, [예제](./src/Ex_FontFamily.html)

### web font
> [Google Fonts](https://fonts.google.com/)를 사용해서 폰트를 사용하는 기법
- 웹에있는 폰트를 사용자가 다운로드하게 해서 폰트를 사용하도록 함
- 브라우저는 href 링크안에 있는 파일을 다운로드 해서 해석함, [예제](./src/Ex_WebFont.html)

#### Google Fonts에 폰트가 없을 경우
- [Web Font Generator](https://www.web-font-generator.com/)를 사용해서 파일을 업로드하면 webfont를 만들어줌
- 샘플파일과 여러 행태의 폰트파일을 만들어줌