# CSS강의를 듣고 기록
- 강의는 inflearn의 [생활코딩 강의](https://www.inflearn.com/course/css-%EA%B8%B0%EB%B3%B8%EB%B6%80%ED%84%B0-%ED%99%9C%EC%9A%A9%EA%B9%8C%EC%A7%80/)
- 예제를 실습해 보고 저장하거나 핵심 내용을 메모

## 목차
1. [선택자](#선택자)
2. [적용 순서](#적용순서)
3. [서체 다루기](#서체다루기)
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
