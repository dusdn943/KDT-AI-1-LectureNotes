<template>
  <v-container>
    <div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <!-- 
        router-link 파트는 UI 엔진인 Vue에서 경로를 지정
        부가적으로 to라는 파라메터는 실제 URL에 입력하는 경로가 됩니다.
        나타나는 형태는 text 형태고 누르면 자동으로 URL을 입력한 결과를 보여줍니다.
        이 작업을 자동화 하려면 반드시 router/index.js 에
        /htmlTest를 누가 보여줄 것인지 컴포넌트 등록을 해줘야 합니다.
        -->
        <router-link to="/htmlTest">HtmlTest</router-link> |
        <router-link to="/cssTest">CssTest</router-link> |
        <router-link to="/vue-data-binding-page">VueDataBindingPage</router-link> |
        <router-link to="/vue-click-event-page">VueClickEventPage</router-link> |
        <router-link to="/vue-input-event-page">VueInputEventPage</router-link><br>
        <router-link to="/duplex-with-model-page">textarea 테스트 페이지</router-link> |
        <router-link to="/vue-chackbox-page">chackbox 테스트 페이지</router-link> |
        <router-link to="/multi-checkbox-test-page">다중 checkbox 테스트 페이지</router-link> |
        <router-link to="/global-component-test-page">전역 컴포넌트 테스트</router-link> | 
        <router-link to="/axios-test-page">axios 통신 테스트</router-link> | 
        <router-link to="/problem-page1">1번 연습 문제</router-link> |
        <router-link to="/random-dice-from-spring">axios로 주사위 값 받기</router-link> |
        <router-link to="/vue-life-cycle-test-page">게임으로 파악하는 라이프 사이클</router-link> |
        <router-link to="/problem-page2">2번 연습 문제</router-link> |
        <router-link to="/problem-page3">3번 연습 문제</router-link> |
        <router-link to="/problem-page4">4번 연습 문제</router-link> |
        <router-link to="/prob-page4">4번 연습 문제 - 복습</router-link> |
        <router-link to="/problem-page5">5번 연습 문제</router-link> |
        <router-link to="/board-list-page">Vue + Spring + JPA 게시판</router-link> |
        <router-link to="/product-list-page">상품 게시판</router-link> |
        <router-link to="/vuetify-table-test">Vuetify Table 테스트</router-link> |
        <router-link to="/vuetify-table-advanced">Vuetify Table 추가 테스트</router-link> |
        <router-link to="/vuetify-image-gallery">Vuetify Image 갤러리</router-link> |
        <router-link to="/print-image-test">Vuetify Image 테스트</router-link> |
        <router-link to="/dialog-test-page">Dialog 테스트</router-link> |
        <router-link to="/carousel-test-page">Carousel 테스트</router-link> |
        <router-link to="/d3-plot-test">d3 plotting 테스트</router-link> |
        <router-link to="/d3-health-print-page">d3 health 문제</router-link> |
        <router-link to="/file-handler-test-page">File 처리 테스트</router-link> |
        <router-link to="/file-list-show-page">Spring에 요청해서 파일 리스트 보기</router-link> |
        <router-link to="/food-register">Food Aggregate Root 만들기</router-link> |
        <router-link to="/fastapi-test-page">FastAPI 숫자 테스트</router-link> |
        <router-link to="/composition-problem-page">Spring, FastAPI 숫자 통합 테스트</router-link> |
        <router-link to="/sign-up-page">회원 가입</router-link> |
        <router-link to="/github-sign-in-page">Github 로그인</router-link> |
        <router-link to="/after-login/sample">로그인 이후 작업 테스트</router-link> |
        <router-link to="/chat-page">웹소켓 채팅 테스트</router-link> |
        <router-link to="/traffic-test-page">통신 테스트</router-link> |

      </nav>
    </div>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
}
</script>
